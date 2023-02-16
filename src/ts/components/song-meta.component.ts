import { Component } from '@angular/core';
import { CurrentSongService } from '../services/current-song.service';

@Component({
	selector: 'song-meta',
	template: `
		<div id="songmeta">
			<h2 class="title">{{ meta.title }}</h2>
			<h3 class="author">{{ meta.author }}</h3>
			<p class="description">{{ meta.description }}</p>
			<ul class="links">
				<li *ngFor="let link of meta.links">
					<a href="{{ link.href }}" target="_blank" href="#"><i class="glyphicon glyphicon-link"></i> {{link.title}}</a>
				</li>
			</ul>
		</div>`
})
export class SongMetaComponent {
	
	meta: any;
      
	constructor( currentSong: CurrentSongService ) {

		currentSong.get().then( $song => {

			this.meta = {
				title  : $song.title,
				author : $song.author || null,
				links  : $song.links  || {},
			};

			for (let title in this.meta.links) {
				this.meta.links[title] = {
					title : title,
					href  : this.meta.links[title]
				};
			}
		});
	}
}
