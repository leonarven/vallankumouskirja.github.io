import { FontService                  } from './ts/services/font.service';
import { SongsService                 } from './ts/services/songs.service';
import { SongListService              } from './ts/services/song-list.service';
import { CurrentSongService           } from './ts/services/current-song.service'; 
import { ResizeService                } from './ts/services/resize.service'; 
import { LoadingService               } from './ts/services/loading.service'; 
import { AjsAppComponent              } from './ts/components/app.component';
import { AppComponent                 } from './ts/components/app.component';
import { SongMetaComponent            } from './ts/components/song-meta.component';
import { SongViewComponent            } from './ts/components/song-view.component';
import { SongListComponent            } from './ts/components/song-list.component';
import { PlaceholderSongListComponent } from './ts/components/song-list.component';

import { downgradeInjectable, downgradeComponent } from '@angular/upgrade/static';

import angular from 'angular';

const Routes = [{
	path: "index",
	component: PlaceholderSongListComponent,
	children: [{
		path: "/:song_key",
		component: SongViewComponent,
	}]
}];

angular.module( "laulukirja", [ "ui.router" ])

.service( "currentSong", downgradeInjectable( CurrentSongService ))
.service( "songList",    downgradeInjectable( SongListService ))
.service( "Songs",       downgradeInjectable( SongsService ))
.service( 'fontService', downgradeInjectable( FontService ))
.service( 'resize',      downgradeInjectable( ResizeService ))
.service( 'loading',     downgradeInjectable( LoadingService ))

//.directive( 'appRoot',             downgradeComponent({ component: AppComponent }))
.component( 'appRoot',              AjsAppComponent )
.directive( 'songMeta',            downgradeComponent({ component: SongMetaComponent }))
.directive( 'songView',            downgradeComponent({ component: SongViewComponent }))
.directive( 'songList',            downgradeComponent({ component: SongListComponent }))
.directive( 'placeholderSongList', downgradeComponent({ component: PlaceholderSongListComponent }))

.config([ "$stateProvider", "$urlRouterProvider", function( $stateProvider: any, $urlRouterProvider: any ) {

	$urlRouterProvider.otherwise("/index");

	$stateProvider.state( "index", {
		url: "/index",
		views: {
			"@": {
				//component: 'placeholderSongList' //PlaceholderSongListComponent,
				template: '<placeholder-song-list></placeholder-song-list>'
			}
		}
	});
	$stateProvider.state( "index.song", {
		url: "/:song_key",
		views: {
			"@": {
				//components: 'songView' //SongViewComponent
				template: '<song-view></song-view>'
			}
		}
	})
}]);

