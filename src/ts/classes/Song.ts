
import { SearchString } from './SearchString';

export interface ISongJson {

	author?: (null|string);

	title: any;

	num?: (null|number);
	
	disable?: boolean;

}

export class Song implements ISongJson {

	key: string;

	title: string = "";

	author: string = "";

	lyrics?: string;
	num?: number;
	
	disable?: boolean;

	song_file: string = "";
	$templateUrl: string = "";
	$search: SearchString;

	constructor( key: string, data: any ) {

		this.key = key;

		for (let v in data) this[ v ] = data[ v ];

		if (!this.song_file) {
			this.song_file = `${ key }.html`;
		}
		
		if (!this.$templateUrl) {// @DEPRECATED
			this.$templateUrl = `songs/${ key }/song.html`;
		}

		this.$search = new SearchString({
			title  : data.title || "",
			author : data.author || "",
			num    : data.num == null ? "" : `${ data.num }`
		});
	}
}
