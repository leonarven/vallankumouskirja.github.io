import { CurrentSongService } from '../services/current-song.service';

export class SongMetaController {

	static $inject = [ "$scope", "currentSong" ];

	constructor( $scope, currentSong: CurrentSongService ) {

		currentSong.get().then( $song => {

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
		})
	}
}

export const SongMetaComponent = {
	controller: SongMetaController,
	template: `
		<div id="songmeta">
			<h2 class="title">{{ meta.title }}</h2>
			<h3 class="author">{{ meta.author }}</h3>
			<p class="description">{{ meta.description }}</p>
			<ul class="links">
				<li ng-repeat="link in meta.links">
					<a ng-href="{{ link.href }}" target="_blank" href="#"><i class="glyphicon glyphicon-link"></i> {{link.title}}</a>
				</li>
			</ul>
		</div>`
};
