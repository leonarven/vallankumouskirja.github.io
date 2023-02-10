import { AjsSongsService as SongsService } from './songs.service';

export class CurrentSongService {

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

	}
}
	

