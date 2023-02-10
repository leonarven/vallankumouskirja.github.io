export class ScopeLikeEvents {

	callbacks = {};

	$timeout;

	constructor( $timeout? ) {
		if ($timeout) this.$timeout = $timeout;
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

			if (this.$timeout) this.$timeout();
		}
	}
}
