import { FontService                  } from './ts/services/font.service';
import { SongsService                 } from './ts/services/songs.service';
import { SongListService              } from './ts/services/song-list.service';
import { CurrentSongService           } from './ts/services/current-song.service'; 
import { ResizeService                } from './ts/services/resize.service'; 
import { LoadingService               } from './ts/services/loading.service'; 
import { AppComponent                 } from './ts/components/app.component';
import { SongMetaComponent            } from './ts/components/song-meta.component';
import { SongViewComponent            } from './ts/components/song-view.component';
import { PlaceholderSongViewComponent } from './ts/components/song-view.component';
import { SongListComponent            } from './ts/components/song-list.component';

import { downgradeInjectable, downgradeComponent } from '@angular/upgrade/static';

export const AngularJSAppModule = angular.module( "laulukirja", [])// "ui.router" ])//, 'ui.router.upgrade' ])

.service( "currentSong", downgradeInjectable( CurrentSongService ))
.service( "songList",    downgradeInjectable( SongListService ))
.service( "Songs",       downgradeInjectable( SongsService ))
.service( 'fontService', downgradeInjectable( FontService ))
.service( 'resize',      downgradeInjectable( ResizeService ))
.service( 'loading',     downgradeInjectable( LoadingService ))

.directive( 'appRoot',             downgradeComponent({ component: AppComponent }))
.directive( 'songMeta',            downgradeComponent({ component: SongMetaComponent }))
.directive( 'songView',            downgradeComponent({ component: SongViewComponent }))
.directive( 'songList',            downgradeComponent({ component: SongListComponent }))
.directive( 'placeholderSongView', downgradeComponent({ component: PlaceholderSongViewComponent }));
