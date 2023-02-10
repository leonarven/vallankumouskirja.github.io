export class AjsFontService {	

	static $inject = [ "$rootScope", "$state", "$timeout", "$templateCache", "Songs" ];

	size: number;

	resetFont: ()=>{};

	constructor( $rootScope: any, $state: any, $timeout: any, Songs: any ) {

		const self = $rootScope.font = this;
		
		this.size = 10;
		
		this.resetFont = resetFont;

		$rootScope.$on( "resize", resetFont );
		$rootScope.$on( "resetFont", resetFont );
		$rootScope.$on( "toggleFont", toggleFont );
		$rootScope.$on( "increaseFont", ( evt: any, n: number ) => (self.size *= (n || 1.25) ));
		$rootScope.$on( "decreaseFont", ( evt: any, n: number ) => (self.size *= (n || 0.8) ));


		function calcLargeFont(): number {
			let pre: any = document.getElementById( "song-body" );
			let parent: any = pre && pre.parentNode && pre.parentNode.parentNode;

			if (!parent || !parent.offsetWidth || !pre || !pre.offsetWidth) return 12;

			var prs = Math.max( 0, (parent.offsetWidth - 10) / pre.offsetWidth );

			return self.size * prs;

		}
		function calcMiddleFont(): number {
			let pre: any = document.getElementById( "song-body" );
			let parent:any  = pre && pre.parentNode;

			if (!parent || !parent.offsetWidth || !pre || !pre.offsetWidth) return 10;

			var prs = Math.max( 0, parent.offsetWidth / pre.offsetWidth );

			return self.size * prs;
		}

		function toggleFont() {
			return $timeout(function(){
				let middleFont: number = calcMiddleFont();
				let largeFont: number = calcLargeFont();
				let font: number = self.size;
	
				let middleDiff = Math.abs( font - middleFont );
				let largeDiff  = Math.abs( font - largeFont );

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

			}).catch(( e: any ) => {
				console.warn( "Unable to customize font size", e );
			});

		}

		function resetFont() {
			return $timeout(function(){
				self.size = calcMiddleFont();
				console.log( "resetFont() :: ", self.size, "em" );
			}).catch(( e: any ) => {
				console.warn( "Unable to customize font size", e );
			});
		}

	}
}

