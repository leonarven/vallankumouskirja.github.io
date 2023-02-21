
import { Injectable, Inject, ApplicationRef } from '@angular/core';
import { ResizeService } from './resize.service';

import { ScopeLikeEvents } from '../classes/scope-like-events';

@Injectable({
	providedIn: 'root'
})
export class FontService {	

	static $inject = [ "resize" ];

	size: number = 10;

	constructor(
		private aref: ApplicationRef,
		resize: ResizeService
	) {
		
		resize.$on( "resize", () => this.resetFont() );
	}

	resetFont() {
		this.size = this.calcMiddleFont();
		console.log( "resetFont() :: ", this.size, "em" );
	}

	toggleFont() {

		let middleFont: number = this.calcMiddleFont();
		let largeFont:  number = this.calcLargeFont();
		
		let size: number = this.size;

		if (Math.abs( largeFont - middleFont ) < .3) {
			// Fonttien kokoero on niin pieni, että ohitetaan koko toggle ja vakioidaan middle'ksi
			size = middleFont;

		} else {

			let middleDiff = Math.abs( size - middleFont );
			let largeDiff  = Math.abs( size - largeFont );

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

		this.size = size;

		this.aref.tick();
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

	getFont(): number {
		return this.size;
	}

	setFont( size: number ): number {
		return this.size = size;
	}

	decreaseFont( x = 0.8 ): number {
		return this.setFont( this.size * x );
	}

	increaseFont( x = 1.25 ): number {
		return this.setFont( this.size * x );
	}
}

