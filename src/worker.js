	class Song {
		constructor( key, data ) {
			this.key = key;
			for (var v in data) this[ v ] = data[ v ];

			if (this.$templateUrl == null) {
				this.$templateUrl = `songs/${ key }/song.html`;
			}

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


(() => {
	/************************************************************/

	angular.module("laulukirja-app", [ "ui.router" ])

	.config([ "$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider){
		$urlRouterProvider.otherwise("/index");
		$stateProvider.state("index", {
			url        : "/index",
			views : {
				"songsList@" : {
					controller : "songListController",
					
					template   : `
<div id="search">
	<input type="text" class="form-control" placeholder="Hae..." ng-model="$root.search" ng-change="runFilter()">

	<a class="clear-btn glyphicon glyphicon-remove" ng-if="$root.search.trim().length" ng-click="runFilter('')"></a>
</div>

<ul id="songlist" class="songs-list-group list-group">
	<li class="list-group-item"
	    ng-repeat="song in Songs.sorted"
	    ng-hide="song.$$filtered"
	    ng-class="{ 'active' : $root.$state.params.song_key == song.key }">

		<a ui-sref="index.song({ 'song_key' : song.key })">
			<h4 class="title"><b class="number">{{ song.num }}</b> &ndash; {{ song.title }}</h4>
		</a>
	</li>

	<li class="list-group-item no-results" ng-if="songsCount == 0">
		<b><h4>
				{{ (songsCount == 0) ? 'Ei lauluja :&lt;' : '...' }}
			</h4></b>
	</li>
</ul>

					`
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
					template : `
<pre ng-include="$song.$templateUrl" id="song-body" ng-style="{ 'font-size' : ($root.font_size / 10.0) + 'em' }"></pre>
					`
				},
				"songMeta@" : {
					controller  : "songMetaController",
					template : `
<div id="songmeta">
	<h2 class="title">{{ meta.title }}</h2>
	<h3 class="author">{{ meta.author }}</h3>
	<p class="description">{{ meta.description }}</p>
	<ul class="links">
		<li ng-repeat="link in meta.links">
			<a ng-href="{{ link.href }}" target="_blank" href="#"><i class="glyphicon glyphicon-link"></i> {{link.title}}</a>
		</li>
	</ul>
</div>
					`
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

	.run([ "$rootScope", "$state", "$timeout", "Songs", function( $rootScope, $state, $timeout, Songs ) {

		$rootScope.$state = $state;
		$rootScope.songsIndex = {};
	
		$rootScope.font_size = 10;
		$rootScope.resetFont = resetFont;

		$rootScope.$on( "resize", resetFont );
		$rootScope.$on( "resetFont", resetFont );
		$rootScope.$on( "toggleFont", toggleFont );
		$rootScope.$on( "increaseFont", ( evt, n ) => ($rootScope.font_size *= (n || 1.25) ));
		$rootScope.$on( "decreaseFont", ( evt, n ) => ($rootScope.font_size *= (n || 0.8) ));



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

		$rootScope.$on('$stateChangeError', function( event, toState, toParams, fromState, fromParams ) {
			console.error( '$stateChangeError @ '+toState.to, arguments );
		});

		$rootScope.$on('$stateChangeSuccess', function( event, toState, toParams, fromState, fromParams ) {
			console.log( '$stateChangeSuccess @ '+toState.to, arguments );
			
			if (toState.name == 'index') $rootScope.songlist.open = true;
	
			angular.element( document.body ).attr("state", toState.name);
		});

		$rootScope.$on('$viewContentLoaded', function( event ) {
			console.log('$viewContentLoaded', arguments);
		});

		$rootScope.$on('$stateNotFound', function( event, unfoundState, fromState, fromParams ) {
			console.error('$stateNotFound @ '+unfoundState.to, arguments);
		});
	
		function calcLargeFont() {
			var pre = document.getElementById( "song-body" );
			var prs = Math.max( 0, (pre.parentNode.parentNode.offsetWidth - 10) / pre.offsetWidth );
			return $rootScope.font_size * prs;

		}
		function calcMiddleFont() {
			var pre = document.getElementById( "song-body" );
			var prs = Math.max( 0, pre.parentNode.offsetWidth / pre.offsetWidth );
			return $rootScope.font_size * prs;
		}

		function toggleFont() {
			return $timeout(function(){
				var middleFont = calcMiddleFont();
				var largeFont = calcLargeFont();
				var font = $rootScope.font_size;
	
				var middleDiff = Math.abs( font - middleFont );
				var largeDiff  = Math.abs( font - largeFont );

				if (largeDiff < .1) {
					// Lähellä large-kokoa -> toggletetaan middleksi
					font = middleFont;

				} else if (middleDiff < .1) {
					// Lähellä middle-kokoa -> toggletetaan largeksi
					font = largeFont;

				} else if (font < middleFont) {
					font = middleFont;

				} else if (font > largeFont) {
					font = largeFont;

				} else if (middleDiff > largeDiff) {
					font = middleFont;

				} else {
					font = largeFont;
				}

				$rootScope.font_size = font;

			}).catch(function( e ) {
				console.warn( "Unable to customize font size", e );
			});

		}

		function resetFont() {
			return $timeout(function(){
				$rootScope.font_size = calcMiddleFont();
				console.log( "resetFont() :: ", $rootScope.font_size, "em" );
			}).catch(function( e ){
				console.warn( "Unable to customize font size", e );
			});
		}
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

		$scope.loading = $rootScope.resetFont().then(() => {
		
			$scope.loading = false;
		});

		try {
			songContentElem = ( document.getElementById( "song-content" ));

			if (window.Hammer && songContentElem) {
				
				if ($rootScope.hammertime) $rootScope.hammertime.off( 'tap' );

				$rootScope.hammertime = new Hammer( songContentElem, { });

				$rootScope.hammertime.on( 'tap', function( evt ) {
					$rootScope.$broadcast('toggleFont');
				});

				$rootScope.hammertime.get('tap').set({ taps: 2 });
			}
		} catch (error) { console.error( error ); }

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
