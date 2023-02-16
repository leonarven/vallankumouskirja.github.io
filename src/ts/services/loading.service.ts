import { Inject } from '@angular/core';

export class LoadingService {

	loading: boolean = true;

	is() {
		return this.loading;
	}
	
	set( _loading: (boolean|number) ) {
		
		let loading = !!_loading;

		console.count( "loading.set(" + this.loading + "->" + loading + ")" );
		
		if (this.loading != loading) {

			this.loading = loading;
		}

		return this.loading;
	}
}
