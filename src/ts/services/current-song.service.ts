export class CurrentSongService {

	$injector;
	$templateRequest;
	$sce;
	songsIndex;

	static $inject = [ "$injector","$templateRequest", "$sce", "songs" ];

	constructor( $injector, $templateRequest, $sce, songsIndex ) {
		this.$injector     = $injector;
		this.$templateRequest = $templateRequest;
		this.$sce             = $sce;
		this.songsIndex       = songsIndex;
	}

	async get() {
		let key = this.$injector.get("$stateParams").song_key;
		
		if (!key) throw "Missing song_key!";
		
		let song = this.songsIndex[key];

		if (!song) throw "Could not found song '"+ key +"'";

		if (song.lyrics) return song;

		return this.$templateRequest( song.$templateUrl ).then(( lyrics: string ) => {

			song.lyrics = lyrics;
			song.$lyrics = this.$sce.trustAsHtml( lyrics );

			return song;
		});

	}
}
	

