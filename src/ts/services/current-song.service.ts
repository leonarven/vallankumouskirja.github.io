import { SongsService } from './songs.service';
import { AjsState, AjsInjector, AjsSce, AjsTemplateRequest } from './ajs.service'
import { Injectable, Inject } from '@angular/core';

export class AjsCurrentSongService {

	$injector;
	$templateRequest;
	$sce;
	Songs;

	static $inject = [ "$injector","$templateRequest", "$sce", "Songs" ];

	constructor( $injector, $templateRequest, $sce, Songs: SongsService ) {
		this.$injector        = $injector;
		this.$templateRequest = $templateRequest;
		this.$sce             = $sce;
		this.Songs            = Songs;
	}

	async get() {
		
		return Promise.resolve().then(() => {

			let key = this.$injector.get("$stateParams").song_key;
		
			if (!key) throw "Missing song_key!";
		
			let song = this.Songs.index[key];

			if (!song) throw "Could not found song '"+ key +"'";

			if (song.lyrics) return song;

			return this.$templateRequest( song.$templateUrl ).then(( lyrics: string ) => {

				song.lyrics = lyrics;
				song.$lyrics = this.$sce.trustAsHtml( lyrics );

				return song;
			});
		});

	}
}
	
@Injectable({
	providedIn: 'root'
})
export class CurrentSongService {

	$templateRequest;
	$sce;
	Songs;

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

	select( song_key: string ) {
		this.$state.go( 'index.song', { song_key })
	}

	async get() {
		
		return Promise.resolve().then(() => {

			let key = this.$injector.get("$stateParams").song_key;
		
			if (!key) throw "Missing song_key!";
		
			let song = this.Songs.index[key];

			if (!song) throw "Could not found song '"+ key +"'";

			if (song.lyrics) return song;

			return this.$templateRequest( song.$templateUrl ).then(( lyrics: string ) => {

				song.lyrics = lyrics;
				song.$lyrics = this.$sce.trustAsHtml( lyrics );

				return song;
			});
		});
	}
}
