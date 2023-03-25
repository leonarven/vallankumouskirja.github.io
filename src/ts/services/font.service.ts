
import { Injectable, Inject, ApplicationRef } from '@angular/core';
import { ResizeService } from './resize.service';
import { CurrentSongService } from './current-song.service';
import { ScopeLikeEvents } from '../classes/scope-like-events';

const BASE_SIZE = 10;

@Injectable({
	providedIn: 'root'
})
export class FontService {	

	size: number = BASE_SIZE;

	constructor(
		public currentSong: CurrentSongService,
		private aref: ApplicationRef,
		resize: ResizeService
	) {

		resize.$on( "resize", () => this.resetFont() );
	}

	async toggleFont() {
		try {
			this.size = this.solveFontSize();
		} catch (e) {
			console.warn( "Unable to customize font size", e );
		}
	}

	solveFontSize(): number {

		const middleFont: number = this.calcMiddleFont();
		const largeFont:  number = this.calcLargeFont();

		let size: number = this.size;

		if (Math.abs( largeFont - middleFont ) < .3) {
			// Fonttien kokoero on niin pieni, että ohitetaan koko toggle ja vakioidaan middle'ksi
			size = middleFont;

		} else {

			const middleDiff = Math.abs( size - middleFont );
			const largeDiff  = Math.abs( size - largeFont );

			if (largeDiff < .1) {
				// Lähellä large-kokoa -> toggletetaan middleksi
				size = middleFont;

			} else if (middleDiff < .1) {
				// Lähellä middle-kokoa -> toggletetaan largeksi
				size = largeFont;

			} else if (size < middleFont) {
				size = middleFont;

			} else if (size > largeFont) {
				size = largeFont;

			} else if (middleDiff > largeDiff) {
				size = middleFont;

			} else {
				size = largeFont;
			}
		}

		return size;
	}

	calcLargeFont(): number {
		let pre:    any = document.getElementById( "song-body" );
		let parent: any = document.getElementById( "content" );
		parent = parent && parent.parentNode;

		if (!parent || !parent.offsetWidth || !pre || !pre.offsetWidth) return 12;

		var prs = Math.max( 0, (parent.offsetWidth - 10) / pre.offsetWidth );

		return this.size * prs;
	}

	calcMiddleFont(): number {
		let pre:    any = document.getElementById( "song-body" );
		let parent: any = document.getElementById( "content" );

		if (!parent || !parent.offsetWidth || !pre || !pre.offsetWidth) return 10;

		var prs = Math.max( 0, parent.offsetWidth / pre.offsetWidth );

		return this.size * prs;
	}

	async resetFont() {
		try {
			this.size = BASE_SIZE; // this.calcMiddleFont();
			console.log( "resetFont() :: ", this.size, "em" );
		} catch (e) {
			console.warn( "Unable to customize font size", e );
		}
	}

	getFont(): number {
		return this.size;
	}

	setFont( size: number ): number {

		return this.size = size;
	}

	decreaseFont( x = 0.8 ): number {

		if (this.currentSong.fixedSize) {

			this.currentSong.fixedSize = false;

			this.size = this.solveFontSize();
		}

		return this.setFont( this.size * x );
	}

	increaseFont( x = 1.25 ): number {

		if (this.currentSong.fixedSize) {

			this.currentSong.fixedSize = false;

			this.size = this.solveFontSize();
		}

		return this.setFont( this.size * x );
	}
}

