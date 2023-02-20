
import { ChangeDetectorRef, Component, Input, Inject } from '@angular/core';
import { Song } from '../classes/Song';
import { LoadingService } from '../services/loading.service';
import { SongsService   } from '../services/songs.service';
import { CurrentSongService   } from '../services/current-song.service';
import { AjsTimeout, AjsState } from '../services/ajs.service';

@Component({
	selector: 'song-list',
	template: 
	`<div id="search">
		<input
			type="text"
			class="form-control"
			style="user-select:none"
			placeholder="Hae..." [(ngModel)]="search"
			(ngModelChange)="runFilter()"
		>

		<a style="cursor:pointer" class="clear-btn glyphicon glyphicon-remove" *ngIf="search.trim().length" (click)="runFilter('')"></a>
	</div>

	<ul id="songlist" class="songs-list-group list-group">
		<li
			class="list-group-item"
			style="user-select:none"
			*ngFor="let song of getSongs()"
			[ngClass]="{ 'active': currentSongKey == song.key }"
		>
			<a style="cursor:pointer" (click)="currentSongKey = song.key">
				<h4 class="title"><b class="number">{{ song.num }}</b> &ndash; {{ song.title }}</h4>
			</a>
		</li>

		<li
			class="list-group-item no-results"
			style="user-select:none"
			*ngIf="searchResult != null && searchResult.length == 0"
		>
			<b><h4>Ei lauluja :&lt;</h4></b>
		</li>
	</ul>`
})
export class SongListComponent {

	static $inject = [ "$scope", "$state", "Songs" ];

	runFilter;

	getSongs;
	Songs;
	$state;
	
	search: string = "";
	//@Input('search') search: string = "";

	searchResult: (null|Song[]) = null;

	get currentSongKey(): (null|string) {
		return this.currentSong.current && this.currentSong.current.key;
	}
	set currentSongKey( key: (null|string) ) {
		this.currentSong.select( key );
		setTimeout(() => {
			this.cdr.detectChanges();
		}, 100);
	}

	constructor( private cdr: ChangeDetectorRef, @Inject( AjsState ) $state, public currentSong: CurrentSongService, Songs: SongsService ) {

		this.$state = $state;

		let $scope = this;
		
		$scope.$state = $state;
		$scope.Songs = Songs;

		$scope.getSongs = () => {

			if (this.searchResult != null) return this.searchResult;

			return Songs.sorted;
		}

		$scope.runFilter = ( searchStr = $scope.search ) => {

			$scope.search = searchStr = searchStr || '';

			this.searchResult = null;

			let searchArr = searchStr.toLowerCase( ).trim( ).split( /\s+/g );

			if (searchArr.length) {

				this.searchResult = Songs.sorted.filter( song => {
					for (let word of searchArr) {
						if (song.$search.$string.indexOf( word ) != -1) return true;
					}
					return false;
				});
			}
		};
	}
}
