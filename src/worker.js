(() => {
	class Song {
		constructor( key, data ) {
			this.key = key;
			for (var v in data) this[ v ] = data[ v ];

			this.$templateUrl = `songs/${ key }/song.html`;

			this.$search = new SearchString({
				title : data.title || "",
				num   : data.num == null ? "" : data.num.toString().trim()
			});
		}
	}

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

	/************************************************************/

	angular.module("laulukirja-app", [ "ui.router" ])

	.config([ "$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider){
		$urlRouterProvider.otherwise("/index");
		$stateProvider.state("index", {
			url        : "/index",
			views : {
				"songsList@" : {
					controller  : "songListController",
					templateUrl : "partials/songlist.html"
				},
				"songView@" : {
					controller : [ "$scope", "$timeout", function( $scope, $timeout ){ $scope.loading = $timeout(()=>{ $scope.loading = false; }); }],
					template: "<h3 style='text-align:left;padding-left:1em;'><b class='glyphicon glyphicon-share-alt' style='transform:rotate(230deg);'></b> Valitse laulu laululistasta</h3>"
				}
			},
			resolve : {
				"songsIndex" : [ "Songs", Songs => Songs.init( "songs/index.json" ) ]
			}
		}).state("index.song", {
			url   : "/:song_key",
			views : {
				"songView@" : {
					controller  : "songViewController",
					templateUrl : "partials/songview.html"
				},
				"songMeta@" : {
					controller  : "songMetaController",
					templateUrl : "partials/songmeta.html"
				}
			},
			resolve : {
				"$song" : [ "$stateParams", "$templateRequest", "songsIndex", function( $stateParams, $templateRequest, index ) {
					var key = $stateParams.song_key, song = index[key];

					if (!song) throw "Could not found song '"+ key +"'";

					return $templateRequest( song.$templateUrl ).then(() => song);
				}]
			}
		})
	}])

	.run([ "$rootScope", "$state", "Songs", function( $rootScope, $state, Songs ) {
		$rootScope.$state = $state;
		$rootScope.songsIndex = {};
		$rootScope.font_size = 12;

		$rootScope.setSongFont  = n => $rootScope.font_size += n;
		$rootScope.increaseFont = n => $rootScope.font_size *= 1.1;
		$rootScope.decreaseFont = n => $rootScope.font_size *= 0.9;
	
		$rootScope.search = "";

		$rootScope.songlist = {
			open : true
		};

		window.addEventListener( "resize", $rootScope.$emit.bind( $rootScope, "resize" ));

		$rootScope.$watch( "songlist.open", $rootScope.$emit.bind( $rootScope, "resize" ));

		$rootScope.$on('$stateChangeStart', (event, toState, toParams, fromState, fromParams, _options)=>{
			try {
				if (toState.name == "index")
					$rootScope.$song = null;
			} catch(err) {
				console.error(err);
				event.preventDefault();
			}
		});

		$rootScope.$on('$stateChangeError', (event, toState, toParams, fromState, fromParams)=>{
			console.error( '$stateChangeError @ '+toState.to, arguments );
		});

		$rootScope.$on('$stateChangeSuccess', (event, toState, toParams, fromState, fromParams)=>{
			console.log( '$stateChangeSuccess @ '+toState.to, arguments );
			
			if (toState.name == 'index') $rootScope.songlist.open = true;
	
			angular.element( document.body ).attr("state", toState.name);
		});

		$rootScope.$on('$viewContentLoaded', event => {
			console.log('$viewContentLoaded', arguments);
		});

		$rootScope.$on('$stateNotFound', (event, unfoundState, fromState, fromParams) => {
			console.error('$stateNotFound @ '+unfoundState.to, arguments);
		});
	}])

	.service( "Songs", [ "$http", function( $http ) {
		
		var index = this.index = {};

		/****************/

		this.init = url => ($http({ url }).then(response => {
			for (var key in response.data) {
				if (response.data[ key ].disable) continue;
				index[ key ] = new Song( key, response.data[ key ]);
			}
			
			this.sorted = Object.keys( index ).map(key => index[ key ]).sort((a, b) => (a.num - b.num));

			return index;
		}));
	}])

	.controller( "songListController", ["$rootScope", "$scope", "$stateParams", "songsIndex", "Songs", function( $rootScope, $scope, $stateParams, songsIndex, Songs ) {

		$scope.Songs = Songs;
		var index = songsIndex;
		$scope.songsCount = 0;

		$scope.runFilter = search => {
			var search = $rootScope.search = (search == null ? $rootScope.search : search) || '';
			if (search) search = search.toLowerCase( ).trim( );
			if (search) search = search.split( /\s+/g );

			$scope.songsCount = 0;

			for (var song of Songs.sorted) {
				if (search) {
					song.$$filtered = true;
					search.forEach( str => {
						if (song.$search.$string.indexOf( str ) != -1) {
							song.$$filtered = false;
						}
					});
				} else {
					song.$$filtered = false;
				}

				if (!song.$$filtered) $scope.songsCount++;
			}
		};

		setTimeout(() => {
			$scope.runFilter();
		});
	}])

	.controller("songViewController", ["$rootScope", "$scope", "$sce", "$song", "$timeout", function( $rootScope, $scope, $sce, $song, $timeout ) {
		console.log( "songViewController :: Loaded song " + $song.title, $song );

		$scope.$song = $song;

		var songBodyElem = document.getElementById("song-body");

		if (window.innerWidth <= 768) $rootScope.songlist.open = false;

		$rootScope.$on( "resize", refreshFont );

		$scope.loading = refreshFont().then(() => {
			$scope.loading = false;
		});

		function refreshFont() {
			return $timeout(function(){
				var pre = document.getElementById( "song-body" );
				var prs = pre.parentNode.offsetWidth / pre.offsetWidth;
				if (prs > 0) $rootScope.font_size *= prs;
				console.log( "refreshFont() :: ", $rootScope.font_size, "em" );
			}).catch(function( e ){
				console.warn( "Unable to customize font size", e );
			});
		}
	}])

	.controller("songMetaController", ["$rootScope", "$scope", "$song", function($rootScope, $scope, $song) {
		$scope.meta = {
			title  : $song.title,
			author : $song.author || null,
			links  : $song.links  || {},
		};

		for(var title in $scope.meta.links) {
			$scope.meta.links[title] = {
				title : title,
				href  : $scope.meta.links[title]
			};
		}
	}]);
})();
