import { DoBootstrap, NgModule } from '@angular/core';
import { CommonModule  } from '@angular/common';
import { FormsModule   } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';
import { UIRouterUpgradeModule } from '@uirouter/angular-hybrid';

import { ajsInjectorServiceProvider, ajsSceServiceProvider, ajsTemplateRequestServiceProvider, ajsStateServiceProvider } from './ts/services/ajs.service'

import { FontService               } from './ts/services/font.service';
import { SongsService                 } from './ts/services/songs.service';
import { SongListService              } from './ts/services/song-list.service';
import { CurrentSongService           } from './ts/services/current-song.service'; 
import { ResizeService                } from './ts/services/resize.service'; 
import { LoadingService               } from './ts/services/loading.service'; 

import { AppComponent                } from './ts/components/app.component';
import { SongMetaComponent            } from './ts/components/song-meta.component';
import { SongViewComponent            } from './ts/components/song-view.component';
import { PlaceholderSongViewComponent } from './ts/components/song-view.component';
import { SongListComponent            } from './ts/components/song-list.component';

import { AngularJSAppModule } from './ajs.app';

/************************************************************/

const states = [{
	name: "index",
	url: "/index",
	componentSelector: 'placeholder-song-view',
	componentName: 'placeholderSongView',
	component: PlaceholderSongViewComponent,
},{
	name: "index.song",
	url: "/:songKey",
	componentSelector: 'song-view',
	componentName: 'songView',
	component: SongViewComponent,
}];

const ng2States = states.map( v => {
	let { name, url, component } = v;
	return {
		name, url,
		views: { '@': { component } }
	};
});

const ng1States = [];

AngularJSAppModule.config([ '$urlServiceProvider', $urlService => $urlService.deferIntercept() ]);
AngularJSAppModule.run([ '$stateRegistry', '$urlService', ( $stateRegistry, $urlService ) => {

	$urlService.rules.initial({ state: 'index' });

	for (let state of ng1States) $stateRegistry.register( state );
}]);

/****************************************************************/

@NgModule({
	imports: [
		BrowserModule,
		UpgradeModule,
		UIRouterUpgradeModule.forRoot({ states: ng2States }),
		CommonModule,
		FormsModule,
	],
	declarations: [
		AppComponent,
		SongListComponent,
		SongViewComponent,
		PlaceholderSongViewComponent,
	],
	providers: [
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
		SongViewComponent,
		PlaceholderSongViewComponent,
	]
})
export class AppModule implements DoBootstrap {
	
	constructor( private upgrade: UpgradeModule ) {}

	ngDoBootstrap() {
		this.upgrade.bootstrap( document.body, [ AngularJSAppModule.name ], { strictDi: true });
	}
}
