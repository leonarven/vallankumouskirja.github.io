import { SongListService } from '../services/song-list.service';
import { CurrentSongService } from '../services/current-song.service';
import { AjsFontService as FontService } from '../services/font.service';

let hammertime;

export class SongViewController {

	static $inject = ["$scope", "$sce", "currentSong", "$timeout", "fontService", "songList" ];

	constructor( $scope, $sce, currentSong: CurrentSongService, $timeout, fontService: FontService, songList: SongListService ) {
			
		console.log( "songViewController :: Initiated" );
		
		$scope.font = fontService;
		$scope.loading = true;

		currentSong.get().then( $song => {
		
			console.log( "songViewController :: Loaded song " + $song.title, $song );

			$scope.$song = $song;

			var songBodyElem = document.getElementById("song-body");

			if (window.innerWidth <= 768) songList.close();

			return $timeout();
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
				
				$scope.loading = false;
			});
		};
	}
}

export const SongViewComponent = {
	controller: SongViewController,
	template: `
		<pre ng-if="$song" ng-init="init()" ng-include="$song.$templateUrl" id="song-body" ng-style="{ 'font-size' : (font.size / 10.0) + 'em' }"></pre>
	`
};
