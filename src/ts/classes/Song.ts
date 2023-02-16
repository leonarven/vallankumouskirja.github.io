
import { SearchString } from './SearchString';

export interface ISongJson {

	author?: (null|string);

	title: any;

	num?: (null|number);
	
	disable?: boolean;

}

export class Song implements ISongJson {

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
