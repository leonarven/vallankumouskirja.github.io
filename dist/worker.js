LaulukirjaApp.config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/index");
  $stateProvider.state("index", {
    url: "/index",
    views: {
      "songsList@": {
        controller: "songListController",
        templateUrl: "partials/songlist.html"
      }
    },
    resolve: {
      "songsIndex": ["$rootScope", "$http", function ($rootScope, $http) {
        return $http({
          url: "songs/index.json",
          method: "GET"
        }).then(function (response) {
          var songsIndex = response.data;

          for (var key in songsIndex) {
            if (songsIndex[key].disabled) {
              delete songsIndex[key];
            } else {
              songsIndex[key].key = key;
            }
          }

          $rootScope.songsArr = Object.keys(songsIndex);
          $rootScope.songsArr.sort(function (a, b) {
            return songsIndex[a].num - songsIndex[b].num;
          });
          return $rootScope.songsIndex = songsIndex;
        }).catch(console.error.bind(console, "Cannot GET 'songs/index.json'"));
      }]
    }
  }).state("index.song", {
    url: "/:song_key",
    views: {
      "songView@": {
        controller: "songViewController",
        templateUrl: "partials/songview.html"
      },
      "songMeta@": {
        controller: "songMetaController",
        templateUrl: "partials/songmeta.html"
      }
    },
    resolve: {
      "$songMeta": ["$rootScope", "$http", "$stateParams", "$state", "songsIndex", function ($rootScope, $http, $stateParams, $state, songsIndex) {
        if (!songsIndex[$stateParams.song_key]) {
          console.error("Could not found song '" + $stateParams.song_key + "'");
          $state.go("index");
        }

        return songsIndex[$stateParams.song_key];
      }],
      "$songBody": ["$rootScope", "$http", "$stateParams", "$state", "$songMeta", function ($rootScope, $http, $stateParams, $state, $songMeta) {
        return $http({
          url: "songs/" + $songMeta.key + "/song.html",
          method: "GET"
        }).then(function (response) {
          $rootScope.$songMeta = $songMeta;
          return response.data;
        }).catch(function () {
          console.error("Could not GET 'songs/" + $songMeta.key + "/song.html'");
          $state.go("index");
        });
      }]
    }
  });
});
LaulukirjaApp.run(["$rootScope", "Notification", "$state", function ($rootScope, Notification, $state) {
  $rootScope.$state = $state;
  $rootScope.songsIndex = {};
  $rootScope.font_size = 12;

  $rootScope.setSongFont = function (n) {
    $rootScope.font_size += n;
  };

  $rootScope.increaseFont = function (n) {
    $rootScope.font_size *= 1.1;
  };

  $rootScope.decreaseFont = function (n) {
    $rootScope.font_size *= 0.9;
  };

  $rootScope.songlist = {
    open: true
  };
  window.addEventListener("resize", $rootScope.$emit.bind($rootScope, "resize"));
  $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams, _options) {
    try {
      if (toState.name == "index") $rootScope.$songMeta = null;
    } catch (err) {
      console.error(err);
      event.preventDefault();
    }
  });
  $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams) {
    Notification.error('$stateChangeError @ ' + toState.name);
    console.error('$stateChangeError @ ' + toState.to, arguments);
  });
  $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
    console.log('$stateChangeSuccess @ ' + toState.to, arguments);
    if (toState.name == 'index') $rootScope.songlist.open = true;else if (toState.name == 'index.song') {
      if (window.innerWidth <= 768) $rootScope.songlist.open = false;
    }
    angular.element(document.body).attr("state", toState.name);
  });
  $rootScope.$on('$viewContentLoaded', function (event) {
    console.log('$viewContentLoaded', arguments);
  });
  $rootScope.$on('$stateNotFound', function (event, unfoundState, fromState, fromParams) {
    if (!!unfoundState.to) Notification.error('$stateNotFound @ ' + unfoundState.to);
    console.error('$stateNotFound @ ' + unfoundState.to, arguments);
  });
}]);
LaulukirjaApp.controller("songListController", ["$rootScope", "$scope", "$stateParams", "songsIndex", function ($rootScope, $scope, $stateParams, songsIndex) {
  $scope.$stateParams = $stateParams;
  console.log(songsIndex);
}]);
LaulukirjaApp.controller("songViewController", ["$rootScope", "$scope", "$sce", "songsIndex", "$songMeta", "$songBody", "$timeout", function ($rootScope, $scope, $sce, songsIndex, $songMeta, $songBody, $timeout) {
  var scrollStalker;
  $scope.$songMeta = $songMeta;
  $scope.$songBody = $songBody;
  var songBodyElem = document.getElementById("song-body");
  songBodyElem.innerHTML = $songBody;
  $rootScope.$on("resize", refreshFont);
  $scope.loading = refreshFont().then(function () {
    $scope.loading = false;
  });

  function refreshFont() {
    return $timeout(function () {
      var pre = document.getElementById("song-body");
      var prs = pre.parentNode.offsetWidth / pre.offsetWidth;
      if (prs > 0) $rootScope.font_size *= prs;
      console.log("refreshFont() :: ", $rootScope.font_size, "em");
    }).catch(function (e) {
      console.warn("Unable to customize font size", e);
    });
  }
}]);
LaulukirjaApp.controller("songMetaController", ["$rootScope", "$scope", "songsIndex", "$songBody", "$songMeta", function ($rootScope, $scope, songsIndex, $songBody, $songMeta) {
  //	console.log(songsIndex, $songBody, $songMeta);
  $scope.meta = {
    title: $songMeta.title,
    author: $songMeta.author || null,
    links: $songMeta.links || {}
  };

  for (var title in $scope.meta.links) {
    $scope.meta.links[title] = {
      title: title,
      href: $scope.meta.links[title]
    };
  }
}]);
LaulukirjaApp.component("a_songList", {
  template: "partials/songlist.html",
  controller: ["$scope", "$rootScope", function ($scope, $rootScope) {
    console.log($rootScope.songsIndex);
  }]
});

//# sourceMappingURL=worker.js.map