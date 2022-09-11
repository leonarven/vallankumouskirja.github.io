export default class SongMetaController {
	static $inject = [ "$rootScope", "$scope", "$song" ];

	constructor( $rootScope, $scope, $song ) {
		$scope.meta = {
			title  : $song.title,
			author : $song.author || null,
			links  : $song.links  || {},
		};

		for(var title in $scope.meta.links) {
			$scope.meta.links[title] = {
				title : title,
				href  : $scope.meta.links[title]
			};
		}
	}
}

