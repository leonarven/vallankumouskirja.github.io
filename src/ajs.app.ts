import { AjsFontService               } from './ts/services/font.service';
import { AjsSongsService              } from './ts/services/songs.service';
import { SongListService              } from './ts/services/song-list.service';
import { CurrentSongService           } from './ts/services/current-song.service'; 

import { AjsAppComponent              } from './ts/components/app.component';
import { SongMetaComponent            } from './ts/components/song-meta.component';
import { SongViewComponent            } from './ts/components/song-view.component';
import { SongListComponent            } from './ts/components/song-list.component';
import { PlaceholderSongListComponent } from './ts/components/song-list.component';

import SONGS_META from './songs/index.json';

import angular from 'angular';

angular.module( "laulukirja-app", [ "ui.router" ])

.value( 'songs', SONGS_META )

.service( "currentSong", CurrentSongService )
.service( "songList",    SongListService )
.service( "Songs",       AjsSongsService )
.service( 'fontService', AjsFontService )
.service( 'fontService', AjsFontService )

.component( 'appRoot', AjsAppComponent )

.config([ "$stateProvider", "$urlRouterProvider", function( $stateProvider: any, $urlRouterProvider: any ) {

	$urlRouterProvider.otherwise("/index");

	$stateProvider.state( "index", {
		url: "/index",
		views: {
			"songsList@" : SongListComponent,
			"songView@" : PlaceholderSongListComponent
		}
	});
	$stateProvider.state( "index.song", {
		url: "/:song_key",
		views: {
			"songView@" : SongViewComponent,
			"songMeta@": SongMetaComponent
		}
	})
}])

.run( class AjsAppRun {

	static $inject = [ "$rootScope", "$state", "$timeout", "songList" ];

	constructor( $rootScope: any, $state: any, $timeout: any, songList: SongListService ) {

		$rootScope.songsIndex = {};

		//$rootScope.songList = songList;

		window.addEventListener( "resize", $rootScope.$emit.bind( $rootScope, "resize" ));

		$rootScope.$watch(function() {
		       return songList.open;
		}, $rootScope.$emit.bind( $rootScope, "resize" ));

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
			
			if (toState.name == 'index') songList.open = true;

			angular.element( document.body ).attr("state", toState.name);
		});

		$rootScope.$on('$viewContentLoaded', function( event ) {
			console.log('$viewContentLoaded', arguments);
		});

		$rootScope.$on('$stateNotFound', function( event, unfoundState, fromState, fromParams ) {
			console.error('$stateNotFound @ '+unfoundState.to, arguments);
		});

	}
})
