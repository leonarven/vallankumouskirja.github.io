
import { Injectable, Inject } from '@angular/core';
import { ResizeService } from './resize.service';

import { AjsTimeout  } from './ajs.service';
import { ScopeLikeEvents } from '../classes/scope-like-events';

@Injectable({
	providedIn: 'root'
})
export class FontService {	

	static $inject = [ "$timeout", "resize" ];

	size: number = 10;

	constructor(
		@Inject(AjsTimeout) public $timeout,
		resize: ResizeService
	) {
		this.$timeout = $timeout;
		
		resize.$on( "resize", () => this.resetFont() );
	}

	toggleFont() {
		return this.$timeout(() => {
			let middleFont: number = this.calcMiddleFont();
			let largeFont:  number = this.calcLargeFont();
			let font:       number = this.size;

			let middleDiff = Math.abs( font - middleFont );
			let largeDiff  = Math.abs( font - largeFont );

			if (largeDiff < .1) {
				// Lähellä large-kokoa -> toggletetaan middleksi
				this.size = middleFont;

			} else if (middleDiff < .1) {
				// Lähellä middle-kokoa -> toggletetaan largeksi
				this.size = largeFont;

			} else if (font < middleFont) {
				this.size = middleFont;

			} else if (font > largeFont) {
				this.size = largeFont;

			} else if (middleDiff > largeDiff) {
				this.size = middleFont;

			} else {
				this.size = largeFont;
			}
		}).catch(( e: any ) => {
			console.warn( "Unable to customize font size", e );
		});
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

	resetFont() {
		return this.$timeout(() => {
			this.size = this.calcMiddleFont();
			console.log( "resetFont() :: ", this.size, "em" );
		}).catch(( e: any ) => {
			console.warn( "Unable to customize font size", e );
		});
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

