import { Inject, Component, ChangeDetectorRef, OnInit } from '@angular/core';
import { SongListService } from '../services/song-list.service';
import { CurrentSongService } from '../services/current-song.service';
import { LoadingService } from '../services/loading.service';
import { FontService } from '../services/font.service';

let hammertime;

@Component({
	selector: 'song-view',
	template: `
	<pre
		class="alert alert-danger"
		style="display:inline-block;margin-top:1em;"
       		*ngIf="error">{{ error }}</pre>

	<pre
		*ngIf="$song"
		[innerHtml]="$song.lyrics"
		id="song-body"
		[ngStyle]="{ 'font-size.em' : (fontService.size / 10.0) }"
	></pre>`
})
export class SongViewComponent extends OnInit{

	error;
	init;
	$song;

	constructor( private cdr: ChangeDetectorRef, currentSong: CurrentSongService, public fontService: FontService, songList: SongListService, loading: LoadingService ) {

		let $scope = this;
			
		console.log( "songViewController :: Initiated" );
		
		loading.set( true );

		currentSong.get().then( $song => {
		
			console.log( "songViewController :: Loaded song " + $song.title, $song );

			$scope.$song = $song;

			var songBodyElem = document.getElementById("song-body");

			if (window.innerWidth <= 768) songList.close();

			return $scope.init();

		}).catch( error => {

			if (!this.$song) {
				this.error = new Error( "Laulua ei onnistuttu lataamaan!" );
			} else {
				this.error = error;
			}

			console.error( error );

		}).then(() => {

			loading.set( false );

			cdr.detectChanges();
		});

		$scope.init = () => {

			let hammertime = iniHammer();

			if (hammertime) hammertime.on( 'tap', function( evt ) {
				fontService.toggleFont();
			});

			return fontService.resetFont();
		};
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
