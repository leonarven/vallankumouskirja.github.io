import { AjsFontService     } from './ts/services/FontService';
import { AjsSongsService    } from './ts/services/SongsService';
import { SongMetaController } from './ts/components/SongMetaController';
import { SongListController } from './ts/components/SongListController';
import { SongViewController } from './ts/components/SongViewController';

import songs from './songs';
console.log(songs);
window.angular.module( "laulukirja-app", [ "ui.router" ])

.constant(   'songs',              songs )

.service(    "Songs",              AjsSongsService )
.service(    'fontService',        AjsFontService )

.config([ "$stateProvider", "$urlRouterProvider", function( $stateProvider: any, $urlRouterProvider: any ) {
	$urlRouterProvider.otherwise("/index");
	$stateProvider.state("index", {
		url        : "/index",
		views : {
			"songsList@" : {
				controller : SongListController,
				
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
	<b><h4>{{ (songsCount == 0) ? 'Ei lauluja :&lt;' : '...' }}</h4></b>
</li>
</ul>`
			},
			"songView@" : {
				controller : [ "$scope", "$timeout", function( $scope: any, $timeout: any ) { $scope.loading = $timeout(()=>{ $scope.loading = false; }); }],
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
				controller: SongViewController,
				template: `
<pre ng-init="init()" ng-include="$song.$templateUrl" id="song-body" ng-style="{ 'font-size' : ($root.font.size / 10.0) + 'em' }"></pre>
				`
			},
			"songMeta@": {
				controller: SongMetaController,
				template: `
<div id="songmeta">
<h2 class="title">{{ meta.title }}</h2>
<h3 class="author">{{ meta.author }}</h3>
<p class="description">{{ meta.description }}</p>
<ul class="links">
	<li ng-repeat="link in meta.links">
		<a ng-href="{{ link.href }}" target="_blank" href="#"><i class="glyphicon glyphicon-link"></i> {{link.title}}</a>
	</li>
</ul>
</div>`
			}
		},
		resolve : {
			"$song" : [ "$stateParams", "$templateRequest", "$sce", "songsIndex", function( $stateParams: any, $templateRequest: any, $sce: any, index: any ) {
				var key = $stateParams.song_key, song = index[key];

				if (!song) throw "Could not found song '"+ key +"'";

				if (song.lyrics) return song;

				return $templateRequest( song.$templateUrl ).then(( lyrics: string ) => {

					song.lyrics = lyrics;
					song.$lyrics = $sce.trustAsHtml( lyrics );

					return song;
				});
			}]
		}
	})
}])

.run([ "$rootScope", "$state", "$timeout", "$templateCache", "Songs", "fontService", function( $rootScope: any, $state: any, $timeout: any, Songs: AjsSongsService, fontService: AjsFontService ) {

	$rootScope.$state = $state;
	$rootScope.songsIndex = {};

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

		window.angular.element( document.body ).attr("state", toState.name);
	});

	$rootScope.$on('$viewContentLoaded', function( event ) {
		console.log('$viewContentLoaded', arguments);
	});

	$rootScope.$on('$stateNotFound', function( event, unfoundState, fromState, fromParams ) {
		console.error('$stateNotFound @ '+unfoundState.to, arguments);
	});

}])

