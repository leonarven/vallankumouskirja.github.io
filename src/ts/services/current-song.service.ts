import { SongsService } from './songs.service';
import { AjsState, AjsInjector, AjsSce, AjsTemplateRequest } from './ajs.service'
import { Song } from '../classes/Song';
import { Injectable, Inject } from '@angular/core';
	
@Injectable({
	providedIn: 'root'
})
export class CurrentSongService {

	$templateRequest;
	$sce;
	Songs;

	current: (null|Song) = null;

	static $inject = [ "$sce", "Songs" ];

	constructor(
		@Inject( AjsInjector ) public $injector,
		@Inject( AjsTemplateRequest ) $templateRequest,
		@Inject( AjsSce ) $sce,
		@Inject( AjsState ) public $state,
		Songs: SongsService
	) {
		this.$templateRequest = $templateRequest;
		this.$sce             = $sce;
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

		return (song.lyrics
		 ? Promise.resolve( song )
		 : (this.$templateRequest( song.$templateUrl ).then(( lyrics: string ) => {

			song.lyrics = lyrics;
			song.$lyrics = this.$sce.trustAsHtml( lyrics );

		}))).then(() => {

			return this.current = song;
			
		});
	}

	async get() {
		return this.set( this.$injector.get("$stateParams").songKey );
	}
}
