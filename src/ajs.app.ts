import { AjsFontService               } from './ts/services/font.service';
import { AjsSongsService              } from './ts/services/songs.service';
import { SongListService              } from './ts/services/song-list.service';
import { CurrentSongService           } from './ts/services/current-song.service'; 
import { ResizeService                } from './ts/services/resize.service'; 

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
.service( 'resize', ResizeService )

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

	static $inject = [ "$state", "$timeout", "songList", "resize" ];

	constructor( $state: any, $timeout: any, songList: SongListService, resize: ResizeService ) {

		window.addEventListener( "resize", () => {
			resize.$emit( "resize" );
		});

		//$rootScope.$on('$stateChangeSuccess', function( event, toState, toParams, fromState, fromParams ) {
		//	console.log( '$stateChangeSuccess @ '+toState.to, arguments );
			
		//	if (toState.name == 'index') songList.open = true;

		//	angular.element( document.body ).attr("state", toState.name);
		//});
	}
})
