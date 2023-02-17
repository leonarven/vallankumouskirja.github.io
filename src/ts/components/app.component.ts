import { Component } from '@angular/core';
import { SongListService } from '../services/song-list.service';
import { LoadingService } from '../services/loading.service';
import { FontService } from '../services/font.service';

@Component({
	selector: 'app-root',
	template: `
		<main>
		<section id="song-content" class="col-xs-12" style="user-select:text"
			 ng-class="{ 'col-sm-6 col-md-8 col-lg-9 col-sm-offset-6 col-md-offset-4 col-lg-offset-3' : songList.isOpen() }"
		>

			<article id="content"
				 class="loading col-xs-12 col-sm-12 col-md-12 col-lg-pull-0"
				 ng-class="{ 'loading': loading.is(), 'col-lg-8': songList.isOpen() }"
			>
				<ui-view></ui-view>
			</article>

		</section>

		<section id="songlist-wrapper"
			 class="sidebar col-xs-12 col-sm-6 col-md-4 col-lg-3"
			 ng-if="songList.isOpen()"
		>
			 <song-list></song-list>
		</section>

	</main>

	<header class="navbar navbar-default">
		<div class="container-fluid">
			<div class="navbar-header">
				<ul class="nav navbar-nav pull-right">
					<li class="font-ctrl"><a class="font-decr-btn" ng-click="font.decreaseFont()" href="">A-</a></li>
					<li class="font-ctrl"><a class="font-incr-btn" ng-click="font.increaseFont()" href="">A+</a></li>
				</ul>
				<a class="navbar-brand" ng-click="songList.toggleOpen()" href>
					<span><b class="glyphicon glyphicon-menu-hamburger"></b></span> Laululista
				</a>
			</div>
		</div>
	</header>`
})
export class AppComponent {

	loading;
	songList;
	font;

	constructor( songList: SongListService, loading: LoadingService, font: FontService ) {
	}
}
