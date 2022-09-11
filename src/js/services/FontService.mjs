export default class FontService {	

	static $inject = [ "$rootScope", "$state", "$timeout", "$templateCache", "Songs" ];

	constructor( $rootScope, $state, $timeout, Songs ) {

		var font = $rootScope.font = this;
		
		this.size = 10;
		
		this.resetFont = resetFont;

		$rootScope.$on( "resize", resetFont );
		$rootScope.$on( "resetFont", resetFont );
		$rootScope.$on( "toggleFont", toggleFont );
		$rootScope.$on( "increaseFont", ( evt, n ) => (font.size *= (n || 1.25) ));
		$rootScope.$on( "decreaseFont", ( evt, n ) => (font.size *= (n || 0.8) ));


		function calcLargeFont() {
			var pre = document.getElementById( "song-body" );
			if (!pre) return 12;
			var prs = Math.max( 0, (pre.parentNode.parentNode.offsetWidth - 10) / pre.offsetWidth );
			return font.size * prs;

		}
		function calcMiddleFont() {
			var pre = document.getElementById( "song-body" );
			if (!pre) return 10;
			var prs = Math.max( 0, pre.parentNode.offsetWidth / pre.offsetWidth );
			return font.size * prs;
		}

		function toggleFont() {
			return $timeout(function(){
				var middleFont = calcMiddleFont();
				var largeFont = calcLargeFont();
				var font = font.size;
	
				var middleDiff = Math.abs( font - middleFont );
				var largeDiff  = Math.abs( font - largeFont );

				if (largeDiff < .1) {
					// Lähellä large-kokoa -> toggletetaan middleksi
					font = middleFont;

				} else if (middleDiff < .1) {
					// Lähellä middle-kokoa -> toggletetaan largeksi
					font = largeFont;

				} else if (font < middleFont) {
					font = middleFont;

				} else if (font > largeFont) {
					font = largeFont;

				} else if (middleDiff > largeDiff) {
					font = middleFont;

				} else {
					font = largeFont;
				}

				font.size = font;

			}).catch(function( e ) {
				console.warn( "Unable to customize font size", e );
			});

		}

		function resetFont() {
			return $timeout(function(){
				font.size = calcMiddleFont();
				console.log( "resetFont() :: ", font.size, "em" );
			}).catch(function( e ){
				console.warn( "Unable to customize font size", e );
			});
		}

	}
}

