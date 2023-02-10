
import { SearchString } from './SearchString';

export class Song {

	key: string;

	title: any;
	num?: number;
	
	disable?: boolean;

	$templateUrl?: string;
	$search: SearchString;

	constructor( key: string, data: any ) {

		this.key = key;

		for (let v in data) this[ v ] = data[ v ];

		if (this.$templateUrl == null) {
			this.$templateUrl = `songs/${ key }/song.html`;
		}

		this.$search = new SearchString({
			title : data.title || "",
			num   : data.num == null ? "" : data.num.toString().trim()
		});
	}
}
