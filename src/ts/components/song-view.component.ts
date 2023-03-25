import { Inject, Component } from '@angular/core';
import { SongListService } from '../services/song-list.service';
import { CurrentSongService } from '../services/current-song.service';
import { LoadingService } from '../services/loading.service';
import { FontService } from '../services/font.service';
//import { AjsTimeout } from '../services/ajs.service';

let hammertime;

@Component({
	selector: 'song-view',
	template: `
	<pre
		class="alert alert-danger"
		style="display:inline-block;margin-top:1em;"
       		*ngIf="error">{{ error.message }} &#x2639;</pre>

	<pre
		*ngIf="$song"
		[innerHtml]="$song.lyrics"
		id="song-body"
		[ngStyle]="{ 'font-size.em' : (fontService.size / 10.0) }"
		[class.fixed-size]="currentSong.fixedSize"
	></pre>`,
	styles: [
		`#song-body {
			line-height: 2em;
			background-color: transparent;
			border: none;
			color: #000;
			font-size: 1.2em;
			padding: 1rem 2rem;
			display: inline-block;
		}`,
		`:host ::ng-deep #song-body.fixed-size .fixed-size {
			line-height: 2em;
			font-size: 1.8rem !important;
			width: 100%;
			white-space: pre-wrap;
			word-break: normal;
		}`
	]
})
export class SongViewComponent {
	
	error?: Error;
	$song;

	constructor(
		//@Inject( AjsTimeout ) $timeout,   
		public currentSong: CurrentSongService,
		public fontService: FontService,
		songList: SongListService,
		loading: LoadingService
	) {

		let $timeout = ( callback = () => {}, timeout = 0 ) => {
			return new Promise(( resolve, reject )=> {
				setTimeout( async () => {
					try {
						let result = await callback();
						resolve( result );
					} catch (error) {
						reject( error );
					}
				}, timeout);
			});
		};



		console.log( "songViewController :: Initiated" );
		
		loading.set( true );

		currentSong.get().then( $song => {
		
			console.log( "songViewController :: Loaded song " + $song.title, $song );

			return $timeout( () => this.init( $song ) );

		}).catch( error => {

			if (!this.$song) {
				this.error = new Error( "Laulua ei onnistuttu lataamaan!" );
			} else {
				this.error = error;
			}

			console.error( error );

		}).then(() => {

			if (window.innerWidth <= 768) songList.close();

			loading.set( false );
		});
	}

	setSong( $song ) {
	
		this.$song = $song;

		let fixedSize = false;

		try {
			let wrapperElem = document.createElement( "section" );

			wrapperElem.innerHTML = $song.lyrics;

			fixedSize = !!wrapperElem.querySelector( "section > article.fixed-size" );
		
		} catch (error) {}

		this.currentSong.fixedSize = fixedSize;
	}

	init( $song ) {

		this.setSong( $song );

		let hammertime = iniHammer();

		if (hammertime) hammertime.on( 'tap', event => {
			this.fontService.toggleFont();
		});

		return this.fontService.resetFont();
	}
}

function iniHammer() {
			
	let hammertime;

	try {
		var songContentElem = document.getElementById( "song-content" );

		if (window.Hammer && songContentElem) {
	
			hammertime = window.Hammer.instance;

			if (hammertime) {
				hammertime.off( 'tap' );
				hammertime.off( 'pinch' );
			}

			hammertime = Hammer.instance = new Hammer( songContentElem, { });

			//hammertime.on( 'pinch', function( evt ) {});

			hammertime.get( 'tap' ).set({ taps: 2 });
	
			return hammertime;
		}

	} catch (error) {
		console.error( error );
	}
	
	return hammertime;
}

@Component({
	selector: 'placeholder-song-view',
	template: "<h3 style='text-align:left;padding-left:1em;'><b class='glyphicon glyphicon-share-alt' style='transform:rotate(230deg);'></b> Valitse laulu laululistasta</h3>"
})
export class PlaceholderSongViewComponent {

	constructor( loading: LoadingService ) {
		loading.set( 0 );
	}
}
