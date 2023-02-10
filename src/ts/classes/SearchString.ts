const regexp_torm  = /[\.,:'\(\)\[\]\{\}\/\\]/g;  // Poistettavat (whitespacella korvattavat) merkit
const regexp_toosm = /\s.{0,3}\s/g;                 // Liian lyhyet whitespacen ympäröimät merkkijonot ( 0-3 merkkiä) (myös whitespacen, (2-5 merkkiä))

function parseArray2string( arr: any[] ): string {
	return arr.filter(function( v: any ) {
		return `${ v }`.trim().length > 0;
	}).map(function( v: any ) {
		return Array.isArray( v ) ? parseArray2string( v ) : v;
	}).join(" ");
}

export interface ISearchStringObjectArguments {
	[key: string]: string;
}

export interface ISearchStringContains {
	[key: string]: string;
}

export class SearchString {

	$string: string = "";

	$contains: ISearchStringContains = {};

	constructor( argv:(ISearchStringObjectArguments|string) = {} ) {

		//this.$string   = "";
		//this.$contains = {}

		if (argv) this.extend( argv );
	}

	extend( argv: (ISearchStringObjectArguments|string) ) {

		var str: (null|string) = null;

		if (typeof argv == "object") {
			str = "";
			for (var key in argv) {
				if (argv[ key ] != null) {
					argv[ key ] = SearchString.filterString2searchKey( argv[ key ]);
					this.$contains[ key ] = (this.$contains[ key ] || "") + " " + argv[ key ];
					str += " " + argv[ key ];
				}
			}
		} else if (typeof argv == "string" && argv.trim().length > 0 ){
			str = argv;
		}

		if (typeof str == "string") {
			this.$string = SearchString.filterString2searchKey([ this.$string, str ]);
		} else if (argv) {
			console.warn( "SearchString.extend :: Invalid argument" );
		}
	}

	toString() {
		return this.$string;
	}

	static filterString2searchKey( str: (string|string[]) ): string {
		//if (arguments.length > 1) return SearchString.filterString2searchKey([ str, argv1, argv2 ]);
		if (Array.isArray( str )) str = parseArray2string( str );
		if (typeof str != "string") return console.warn( "SearchString.filterString2searchKey :: Invalid argument", typeof str, str ), "";

		return (" " + str.toLowerCase().replace( regexp_torm, " " ) + " ").replace( regexp_toosm, " " ).trim();
	}
}


