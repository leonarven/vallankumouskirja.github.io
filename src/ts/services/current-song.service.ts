import { SongsService } from './songs.service';
import { AjsState, AjsInjector } from './ajs.service'
import { Song } from '../classes/Song';
import { Injectable, Inject } from '@angular/core';
	
@Injectable({
	providedIn: 'root'
})
export class CurrentSongService {

	$templateRequest;
	Songs;

	current: (null|Song) = null;

	fixedSize: boolean = false;

	constructor(
		@Inject( AjsInjector ) public $injector,
		@Inject( AjsState ) public $state,
		Songs: SongsService
	) {
		this.Songs            = Songs;
	}

	async select( songKey: (null|string) ) {

		return this.set( songKey ).then( song => {
			if (song == null) {

				this.$state.go( 'index' );

			} else {

				this.$state.go( 'index.song', { songKey });
			}
		});
	}

	async set( songKey: (null|string) ) {

		if (songKey == null) {
			return this.current = null;
		}

		let song = this.Songs.index[songKey];

		if (!song) throw `Could not found song '${ songKey }'`;

		return this.Songs.resolveSongWithLyrics( song ).then( song => this.current = song );
	}

	async get() {
		return this.set( this.$injector.get("$stateParams").songKey );
	}
}
