
import { Song } from '../classes/Song';
import { AjsSongsService as SongsService } from '../services/songs.service';

export class SongListController {

	static $inject = [ "$scope", "$state", "Songs" ];

	constructor( $scope, $state, Songs: SongsService ) {
	
		$scope.$state = $state;
		$scope.Songs = Songs;
	
		let searchResult: (null|Song[]) = null;

		$scope.getSongs = () => {

			if (searchResult != null) return searchResult;

			return Songs.sorted;
		}

		$scope.runFilter = ( searchStr = $scope.search ) => {

			$scope.search = searchStr = searchStr || '';

			searchResult = null;

			let searchArr = searchStr.toLowerCase( ).trim( ).split( /\s+/g );

			if (searchArr.length) {

				searchResult = Songs.sorted.filter( song => {
					for (let word of searchArr) {
						if (song.$search.$string.indexOf( word ) != -1) return true;
					}
					return false;
				});
			}
		};
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
				ng-repeat="song in getSongs()"
				ng-class="{ 'active' : $root.$state.params.song_key == song.key }"
			>
				<a ui-sref="index.song({ 'song_key' : song.key })">
					<h4 class="title"><b class="number">{{ song.num }}</b> &ndash; {{ song.title }}</h4>
				</a>
			</li>

			<li class="list-group-item no-results" ng-if="searchResult != null && searchResult.length == 0">
				<b><h4>Ei lauluja :&lt;</h4></b>
			</li>
		</ul>`
};

export const PlaceholderSongListComponent = {
	controller : [ "$scope", "$timeout", function( $scope: any, $timeout: any ) { $scope.loading = $timeout(()=>{ $scope.loading = false; }); }],
	template: "<h3 style='text-align:left;padding-left:1em;'><b class='glyphicon glyphicon-share-alt' style='transform:rotate(230deg);'></b> Valitse laulu laululistasta</h3>"
};
