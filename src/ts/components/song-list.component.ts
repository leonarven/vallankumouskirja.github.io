
import { Component, Inject } from '@angular/core';
import { Song } from '../classes/Song';
import { LoadingService } from '../services/loading.service';
import { SongsService   } from '../services/songs.service';
import { CurrentSongService   } from '../services/current-song.service';
import { AjsTimeout, AjsState } from '../services/ajs.service';

@Component({
	selector: 'song-list',
	template: 
	`<div id="search">
		<input type="text" class="form-control" placeholder="Hae..." ng-model="search" ng-change="runFilter()">

		<a style="cursor:pointer" class="clear-btn glyphicon glyphicon-remove" ng-if="search.trim().length" ng-click="runFilter('')"></a>
	</div>

	<ul id="songlist" class="songs-list-group list-group">
		<li class="list-group-item"
			*ngFor="let song of getSongs()"
			ng-class="{ 'active' : $root.$state.params.song_key == song.key }"
		>
			<a style="cursor:pointer" (click)="currentSong.select( song.key )">
				<h4 class="title"><b class="number">{{ song.num }}</b> &ndash; {{ song.title }}</h4>
			</a>
		</li>

		<li class="list-group-item no-results" ng-if="searchResult != null && searchResult.length == 0">
			<b><h4>Ei lauluja :&lt;</h4></b>
		</li>
	</ul>`
})
export class SongListComponent {

	static $inject = [ "$scope", "$state", "Songs" ];

	search;
	runFilter;
	getSongs;
	Songs;
	$state;

	constructor( @Inject( AjsState ) $state, public currentSong: CurrentSongService, Songs: SongsService ) {

		this.$state = $state;

		let $scope = this;
		
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

@Component({

	selector: 'placeholder-song-list',
	template: "<h3 style='text-align:left;padding-left:1em;'><b class='glyphicon glyphicon-share-alt' style='transform:rotate(230deg);'></b> Valitse laulu laululistasta</h3>"
})
export class PlaceholderSongListComponent {

	constructor( @Inject( AjsTimeout ) $timeout, loading: LoadingService ) {
		$timeout(()=>{ loading.set( 0 ); });
	}
};
