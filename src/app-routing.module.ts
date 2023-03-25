import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router

import { SongViewComponent            } from './ts/components/song-view.component';
import { PlaceholderSongViewComponent } from './ts/components/song-view.component';

const routes: Routes = [{
	path: "index",
	component: PlaceholderSongViewComponent,
},{
	path: "index/:songKey",
	component: SongViewComponent,
}];
// sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [ RouterModule.forRoot( routes, { enableTracing: true, useHash: true } )],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }

