import { DoBootstrap, NgModule } from '@angular/core';
import { CommonModule  } from '@angular/common';
import { FormsModule   } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';

import { ajsTimeoutServiceProvider, ajsInjectorServiceProvider, ajsSceServiceProvider, ajsTemplateRequestServiceProvider, ajsStateServiceProvider } from './ts/services/ajs.service'

import { FontService               } from './ts/services/font.service';
import { SongsService                 } from './ts/services/songs.service';
import { SongListService              } from './ts/services/song-list.service';
import { CurrentSongService           } from './ts/services/current-song.service'; 
import { ResizeService                } from './ts/services/resize.service'; 
import { LoadingService               } from './ts/services/loading.service'; 

import { AppComponent      } from './ts/components/app.component';
import { SongViewComponent } from './ts/components/song-view.component';
import { SongListComponent } from './ts/components/song-list.component';

import angular from 'angular';

import './ajs.app.ts';

//angular.element(() => angular.bootstrap( document, [ 'laulukirja' ]));

@NgModule({
	imports: [
		BrowserModule,
		UpgradeModule,
		CommonModule,
		FormsModule,
	],
	declarations: [
		AppComponent,
		SongListComponent,
		SongViewComponent
	],
	providers: [
		ajsTimeoutServiceProvider,
		ajsInjectorServiceProvider,
		ajsSceServiceProvider,
		ajsTemplateRequestServiceProvider,
		ajsStateServiceProvider,
		LoadingService,
		SongsService,
		SongListService,
		CurrentSongService,
		FontService,
		ResizeService,
	],
	exports: [
		FormsModule,
		CommonModule,
		AppComponent,
		SongListComponent,
		SongViewComponent
	]
})
export class AppModule implements DoBootstrap {
	
	constructor( private upgrade: UpgradeModule ) {}

	ngDoBootstrap() {
		this.upgrade.bootstrap( document.body, [ 'laulukirja' ] );
	}
}
