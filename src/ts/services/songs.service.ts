
import { Song, ISongJson } from '../../ts/classes/Song';

import SONGS_META from '../../songs/index.json';

interface ISongJsonIndex {
	[key: string]: ISongJson;
}

interface ISongIndex {
	[key: string]: Song;
}

export class SongsService {
	
	static $inject = []; // "$http" ];

	$http;

	index: ISongIndex;
	sorted: Song[] = [];

	constructor() { // $http: any ) {
		this.$http = null; //$http;

		this.index = {};

		try {
			this.setIndex( SONGS_META );
		} catch (e) {}
	}

	setIndex( index: ISongJsonIndex ) {

		console.debug( "AjsSongService.setIndex()", index );

		this.index = {};
		this.sorted = [];

		for (var key in index) {
			if (!index[ key ].disable) {
				this.index[ key ] = new Song( key, index[ key ]);
				this.sorted.push( this.index[ key ] );
			}
		}

		this.sorted.sort(( a: ISongJson, b: ISongJson ) => ((a.num||0) - (b.num||0)));

		return this.index;
	}

	init( url: string ) {
		return this.$http({ url }).then(( response: any ) => {

			return this.setIndex( response.data );
		});
	}
}
