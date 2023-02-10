export class SongListController {

	static $inject = [ "$rootScope", "$scope", "$stateParams", "songsIndex", "Songs", ];

	constructor( $rootScope, $scope, $stateParams, songsIndex, Songs ) {

		$scope.Songs = Songs;
		var index = songsIndex;
		$scope.songsCount = 0;

		$scope.runFilter = search => {
			var search = $rootScope.search = (search == null ? $rootScope.search : search) || '';
			if (search) search = search.toLowerCase( ).trim( );
			if (search) search = search.split( /\s+/g );

			$scope.songsCount = 0;

			for (var song of Songs.sorted) {
				if (search) {
					song.$$filtered = true;
					search.forEach( str => {
						if (song.$search.$string.indexOf( str ) != -1) {
							song.$$filtered = false;
						}
					});
				} else {
					song.$$filtered = false;
				}

				if (!song.$$filtered) $scope.songsCount++;
			}
		};

		setTimeout(() => {
			$scope.runFilter();
		});
	}
}
