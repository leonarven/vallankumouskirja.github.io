
import { SearchString } from './SearchString';

export class Song {
	constructor( key, data ) {
		this.key = key;
		for (var v in data) this[ v ] = data[ v ];

		if (this.$templateUrl == null) {
			this.$templateUrl = `songs/${ key }/song.html`;
		}

		this.$search = new SearchString({
			title : data.title || "",
			num   : data.num == null ? "" : data.num.toString().trim()
		});
	}
}
