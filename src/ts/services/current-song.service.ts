import { SongsService } from './songs.service';
//import { AjsState, AjsInjector } from './ajs.service'
import { Song } from '../classes/Song';
import { Injectable, Inject } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

	
@Injectable({
	providedIn: 'root'
})
export class CurrentSongService {

	$templateRequest;
	Songs;

	songKey;

	current: (null|Song) = null;

	fixedSize: boolean = false;

	constructor(
		private route: ActivatedRoute,
		private router: Router,
		//@Inject( AjsInjector ) public $injector,
		//@Inject( AjsState ) public $state,
		Songs: SongsService
	) {
		this.Songs            = Songs;
		/*this.route.paramMap.pipe( switchMap((params: ParamMap) => {
			debugger;
			return params;
		}));
		return;*/
		/*this.route.params.subscribe( params => {
			debugger;
		})*/
	}

	async select( songKey: (null|string) ) {

		return this.set( songKey ).then( song => {
			
			if (song == null) {

				this.router.navigate([ 'index' ])
				//this.$state.go( 'index' );

			} else {

				this.router.navigate([ 'index/'+songKey ])
				//this.$state.go( 'index.song', { songKey }); 
			}
		});
	}

	async set( songKey: (null|string) ) {

		if (songKey == null) {
			this.songKey = null;
			this.current = null;
			return null;
		}

		let song = this.Songs.index[songKey];

		if (!song) throw `Could not found song '${ songKey }'`;

		return this.Songs.resolveSongWithLyrics( song ).then( song => {

			this.songKey = songKey;
	
			this.current = song

			return song;
		});
	}

	async getSongKey() {

		return this.songKey;

		try {
			//return this.route.snapshot.firstChild && this.route.snapshot.firstChild.params["songKey"];
		} catch (e) {}

		return angular.element(document.body).injector().get('$stateParams').songKey;
	}

	async get() {
		return this.set( await this.getSongKey());
	}
}
