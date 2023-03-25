import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SongViewComponent            } from './ts/components/song-view.component';
import { PlaceholderSongViewComponent } from './ts/components/song-view.component';

const enableTracing = false;

const routes: Routes = [{
	path: "index",
	component: PlaceholderSongViewComponent,
},{
	path: "index/:songKey",
	component: SongViewComponent,
}];

@NgModule({
	imports: [ RouterModule.forRoot( routes, { enableTracing, useHash: true } )],
	exports: [ RouterModule ]
})
export class AppRoutingModule { }

