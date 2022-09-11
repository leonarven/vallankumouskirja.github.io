class SearchString{
	constructor( argv ){
		this.$string   = "";
		this.$contains = {}

		argv && this.extend( argv );
	}

	extend( argv ){
		var str = null;
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
			this.$string = SearchString.filterString2searchKey( this.$string, str );
		} else if (argv) {
			console.warn( "SearchString.extend :: Invalid argument" );
		}
	}

	toString() {
		return this.$string;
	}
}

SearchString.filterString2searchKey = (function(){
	var regexp_torm  = /[\.,:'\(\)\[\]\{\}\/\\]/g;  // Poistettavat (whitespacella korvattavat) merkit
	var regexp_toosm = /\s.{0,3}\s/g;                 // Liian lyhyet whitespacen ympäröimät merkkijonot ( 0-3 merkkiä) (myös whitespacen, (2-5 merkkiä))

	return function( str ) {
		if (arguments.length > 1) return SearchString.filterString2searchKey( Array.prototype.slice.call( arguments ));
		if (Array.isArray( str )) str = parseArray2string( str );
		if (typeof str != "string") return console.warn( "SearchString.filterString2searchkey :: Invalid argument", typeof str, str ), "";

		return (" " + str.toLowerCase().replace( regexp_torm, " " ) + " ").replace( regexp_toosm, " " ).trim();
	};

	function parseArray2string( arr ){
		return arr.filter(function( v ) {
			return !!v;
		}).map(function( v ) {
			return Array.isArray( v ) ? parseArray2string( v ) : v;
		}).join(" ");
	}
})();

export default SearchString;
