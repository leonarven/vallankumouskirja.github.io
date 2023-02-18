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

	select( songKey: string ) {
		this.$state.go( 'index.song', { songKey })
	}

	async get() {
		
		return Promise.resolve().then(() => {

			let key = this.$injector.get("$stateParams").songKey;
		
			if (!key) throw "Missing song_key!";
		
			let song = this.Songs.index[key];

			if (!song) throw "Could not found song '"+ key +"'";

			if (song.lyrics) return song;

			return this.$templateRequest( song.$templateUrl ).then(( lyrics: string ) => {

				this.current = song;

				song.lyrics = lyrics;
				song.$lyrics = this.$sce.trustAsHtml( lyrics );

				return song;
			});
		});
	}
}
