import { Injectable, Inject } from '@angular/core';

//import { AjsTimeout } from './ajs.service';

@Injectable({
	providedIn: 'root'
})
export class ResizeService {

	callbacks = {};

	$timeout;

	//static $inject = [ "$timeout" ];

	constructor(
		//@Inject( AjsTimeout ) $timeout
       	) {

		let $timeout = ( callback = () => {}, timeout = 0 ) => {
			return new Promise(( resolve, reject )=> {
				setTimeout( async () => {
					try {
						let result = await callback();
						resolve( result );
					} catch (error) {
						reject( error );
					}
				}, timeout);
			});
		};

		this.$timeout = $timeout;

		window.addEventListener( "resize", () => {
			this.$emit( "resize" );
		});
	}

	$on( key, callback ) {
		if (!this.callbacks[ key ]) this.callbacks[ key ] = [];

		this.callbacks[ key ].push( callback );
	}

	$emit( key ) {
		if (this.callbacks[ key ]) {
			for (let callback of this.callbacks[ key ]) {
				try {
					callback();
				} catch (error) {
				}
			}
			this.$timeout();
		}
	}
}
