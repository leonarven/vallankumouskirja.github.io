export class SongListController {

	static $inject = [ "$scope", "$state", "Songs", "songList" ];

	constructor( $scope, $state, Songs, songList ) {
	
		$scope.$state = $state;
		$scope.Songs = Songs;

		$scope.songList = songList
	
		$scope.songsCount = 0;

		$scope.runFilter = search => {
			search = $scope.search = (search == null ? $scope.search : search) || '';
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

export const SongListComponent = {
	controller : SongListController,

	template   : `
		<div id="search">
			<input type="text" class="form-control" placeholder="Hae..." ng-model="search" ng-change="runFilter()">

			<a style="cursor:pointer" class="clear-btn glyphicon glyphicon-remove" ng-if="search.trim().length" ng-click="runFilter('')"></a>
		</div>

		<ul id="songlist" class="songs-list-group list-group">
			<li class="list-group-item"
				ng-repeat="song in Songs.sorted"
				ng-hide="song.$$filtered"
				ng-class="{ 'active' : $root.$state.params.song_key == song.key }"
			>
				<a ui-sref="index.song({ 'song_key' : song.key })">
					<h4 class="title"><b class="number">{{ song.num }}</b> &ndash; {{ song.title }}</h4>
				</a>
			</li>
	
			<li class="list-group-item no-results" ng-if="songsCount == 0">
				<b><h4>{{ (songsCount == 0) ? 'Ei lauluja :&lt;' : '...' }}</h4></b>
			</li>
		</ul>`
};

export const PlaceholderSongListComponent = {
	controller : [ "$scope", "$timeout", function( $scope: any, $timeout: any ) { $scope.loading = $timeout(()=>{ $scope.loading = false; }); }],
	template: "<h3 style='text-align:left;padding-left:1em;'><b class='glyphicon glyphicon-share-alt' style='transform:rotate(230deg);'></b> Valitse laulu laululistasta</h3>"
};
