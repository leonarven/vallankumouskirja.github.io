
import { Song } from '../../ts/classes/Song';

interface ISongIndex {
	[key: string]: Song;
}

export class AjsSongsService {
	
	static $inject = [ "$http", "$injector" ];

	$http;
	$injector;

	index: ISongIndex;

	sorted: Song[] = [];

	constructor( $http: any, $injector: any ) {
		this.$http = $http;
		this.$injector = $injector;

		var index = this.index = {};
	}

	setIndex( index: ISongIndex ) {

		this.index = index;

		for (var key in this.index) {
			if (this.index[ key ].disable) delete this.index[ key ];
			else this.index[ key ] = new Song( key, this.index[ key ]);
		}

		this.sorted = Object.keys( this.index ).map(( key: string ) => this.index[ key ]).sort(( a: Song, b: Song ) => ((a.num||0) - (b.num||0)));

		return this.index;
	}

	init( url: string ) {

		try {
			return this.setIndex( this.$injector.get( "songs" ) );
		} catch (e) {}

		return this.$http({ url }).then(( response: any ) => {

			return this.setIndex( response.data );
		});
	}
}
