
export default class SongViewController {

	static $inject = ["$rootScope", "$scope", "$sce", "$song", "$timeout" ];

	constructor( $rootScope, $scope, $sce, $song, $timeout ) {
	
		console.log( "songViewController :: Loaded song " + $song.title, $song );

		$scope.$song = $song;

		var songBodyElem = document.getElementById("song-body");

		if (window.innerWidth <= 768) $rootScope.songlist.open = false;

		$scope.loading = true;

		$scope.init = () => {

			return $timeout(() => {

				return $rootScope.font.resetFont();

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
