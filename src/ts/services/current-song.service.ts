import { SongsService } from './songs.service';
import { Song } from '../classes/Song';
import { Injectable, Inject } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

	
@Injectable({
	providedIn: 'root'
})
export class CurrentSongService {

	$templateRequest;

	songKey;

	current: (null|Song) = null;

	fixedSize: boolean = false;

	constructor(
		private route: ActivatedRoute,
		private router: Router,
		public Songs: SongsService
	) {}

	async select( songKey: (null|string) ) {

		return this.set( songKey ).then( song => {
			
			try {
				if (song == null) {

					this.router.navigate([ 'index' ])

				} else {

					this.router.navigate([ 'index/'+songKey ])
				}
			} catch (error) {
				console.error( error );
			}
		});
	}

	async set( songKey: (null|string) ) {

		if (songKey == null) {
			this.songKey = null;
			this.current = null;
			return null;
		}

		let song = this.Songs.index[songKey];

		if (!song) throw `Could not found song '${ songKey }'`;

		return this.Songs.resolveSongWithLyrics( song ).then( song => {

			this.songKey = songKey;
	
			this.current = song

			return song;
		});
	}

	async solveSongKey() {
		return this.songKey;
	}

	async get() {
		return this.set( await this.solveSongKey());
	}
}
