
import { OnInit, ChangeDetectorRef, Component, Input, Inject } from '@angular/core';
import { Song } from '../classes/Song';
import { LoadingService       } from '../services/loading.service';
import { SongsService         } from '../services/songs.service';
import { CurrentSongService   } from '../services/current-song.service';
import { SongListService      } from '../services/song-list.service';
//import { AjsTimeout           } from '../services/ajs.service';
//import { AjsState             } from '../services/ajs.service';
import { ActivatedRoute } from '@angular/router';

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
			<a style="cursor:pointer" (click)="currentSongKey == song.key ? songList.close() : (currentSongKey = song.key)">
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

		<li class="list-group-item footer" *ngIf="searchResult != null && searchResult.length == 0">
			<p><a href="mailto:vallankumouslaulukirja@miron.fi">L&auml;het&auml; palautetta</a></p>
		</li>

		<li class="list-group-item notice" *ngIf="searchResult == null">
			<p>Laulukirjaa kehitetään tällä hetkellä aktiivisesti, joten <a href="mailto:vallankumouslaulukirja@miron.fi">l&auml;het&auml; palautetta</a>, mikäli havaitset jotain huomautettavaa.</p>
		</li>
	</ul>`,
	styles: [
		`.list-group-item.footer,
		.list-group-item.notice,
		.list-group-item.no-results {
			margin: 10px 0px;
			border: none !important;
			background: transparent !important;
			text-align: center;
		}`
	]
})
export class SongListComponent implements OnInit {

	//static $inject = [ "$scope", "$state", "Songs" ];

	runFilter;

	getSongs;
	Songs;
	//$state;
	
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

	constructor(
		private cdr: ChangeDetectorRef,
		//@Inject( AjsState ) $state,
		public songList: SongListService,
		public currentSong: CurrentSongService,
		Songs: SongsService,
		private route: ActivatedRoute
	) {

		//this.$state = $state;

		let $scope = this;
		
		//$scope.$state = $state;
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

	ngOnInit() {

		this.route.params.subscribe(params => {
			debugger;
		});

		this.route.queryParams.subscribe(params => {
			debugger;
		});
	}
}
