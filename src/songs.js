

import songs_json from './songs/index.json';

import * as songs from './songs/*/song.html';

for (var key in songs_json) {
	if (songs[key] != null)  songs_json[ key ].$templateUrl = songs[ key ];
}

angular.module( 'laulukirja-app' ).constant( 'songs', songs_json );
