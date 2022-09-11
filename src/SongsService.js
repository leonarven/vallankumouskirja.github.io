
angular.module( 'laulukirja-app' ).service( "Songs", [ "$http", "$injector", function( $http, $injector ) {
		
		var index = this.index = {};

		/****************/

		this.setIndex = index => {

			this.index = index;

			for (var key in this.index) {
				if (this.index[ key ].disable) delete this.index[ key ];
				else this.index[ key ] = new Song( key, this.index[ key ]);
			}
			
			this.sorted = Object.keys( this.index ).map( key => this.index[ key ]).sort((a, b) => (a.num - b.num));

			return this.index;
		};

		this.init = url => {

			try {
				return this.setIndex( $injector.get( "songs" ) );
				
			} catch (e) {}

			return $http({ url }).then( response => {

				return this.setIndex( response );
			});
		};
	}])

