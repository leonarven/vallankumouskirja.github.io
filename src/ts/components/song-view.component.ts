import { Inject, Component } from '@angular/core';
import { SongListService } from '../services/song-list.service';
import { CurrentSongService } from '../services/current-song.service';
import { LoadingService } from '../services/loading.service';
import { FontService } from '../services/font.service';
import { AjsTimeout } from '../services/ajs.service';

let hammertime;

@Component({
	selector: 'song-view',
	template: `<pre
		*ngIf="$song"
		[innerHtml]="$song.lyrics"
		id="song-body"
		[ngStyle]="{ 'font-size.em' : (fontService.size / 10.0) }"
	></pre>`
})
export class SongViewComponent {

	init;
	$song;

	constructor( @Inject( AjsTimeout ) $timeout, currentSong: CurrentSongService, public fontService: FontService, songList: SongListService, loading: LoadingService ) {

		let $scope = this;
			
		console.log( "songViewController :: Initiated" );
		
		loading.set( true );

		currentSong.get().then( $song => {
		
			console.log( "songViewController :: Loaded song " + $song.title, $song );

			$scope.$song = $song;

			var songBodyElem = document.getElementById("song-body");

			if (window.innerWidth <= 768) songList.close();

			return $timeout(() => {
				$scope.init();
			});
		});

		$scope.init = () => {

			return $timeout(() => {

				return fontService.resetFont();

			}).then(() => {
			
				try {
					var songContentElem = document.getElementById( "song-content" );

					if (window.Hammer && songContentElem) {
						
						if (hammertime) {
							hammertime.off( 'tap' );
							hammertime.off( 'pinch' );
						}

						hammertime = new Hammer( songContentElem, { });

						hammertime.on( 'tap', function( evt ) {
							//$rootScope.$broadcast('toggleFont');
							fontService.events.$emit( 'toggleFont' );
						});

						//hammertime.on( 'pinch', function( evt ) {});

						hammertime.get( 'tap' ).set({ taps: 2 });
					}

				} catch (error) { console.error( error ); }
				
				loading.set( false );
			});
		};
	}
}
