export class SongViewController {

	static $inject = ["$rootScope", "$scope", "$sce", "currentSong", "$timeout", "fontService", "songList" ];

	constructor( $rootScope, $scope, $sce, currentSong, $timeout, fontService, songList ) {
			
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
						
						if ($rootScope.hammertime) {
							$rootScope.hammertime.off( 'tap' );
							$rootScope.hammertime.off( 'pinch' );
						}

						$rootScope.hammertime = new Hammer( songContentElem, { });

						$rootScope.hammertime.on( 'tap', function( evt ) {
							$rootScope.$broadcast('toggleFont');
						});

						$rootScope.hammertime.on( 'pinch', function( evt ) {
						});

						$rootScope.hammertime.get( 'tap' ).set({ taps: 2 });
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
