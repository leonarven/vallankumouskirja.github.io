class Song{constructor(t,n){for(var e in this.key=t,n)this[e]=n[e];null==this.$templateUrl&&(this.$templateUrl=`songs/${t}/song.html`),this.$search=new SearchString({title:n.title||"",num:null==n.num?"":n.num.toString().trim()})}}class SearchString{constructor(t){this.$string="",this.$contains={},t&&this.extend(t)}extend(t){var n=null;if("object"==typeof t)for(var e in n="",t)null!=t[e]&&(t[e]=SearchString.filterString2searchKey(t[e]),this.$contains[e]=(this.$contains[e]||"")+" "+t[e],n+=" "+t[e]);else"string"==typeof t&&t.trim().length>0&&(n=t);"string"==typeof n?this.$string=SearchString.filterString2searchKey(this.$string,n):t&&console.warn("SearchString.extend :: Invalid argument")}toString(){return this.$string}}SearchString.filterString2searchKey=function(){var t=/[\.,:'\(\)\[\]\{\}\/\\]/g,n=/\s.{0,3}\s/g;return function(o){return arguments.length>1?SearchString.filterString2searchKey(Array.prototype.slice.call(arguments)):(Array.isArray(o)&&(o=e(o)),"string"!=typeof o?(console.warn("SearchString.filterString2searchkey :: Invalid argument",typeof o,o),""):(" "+o.toLowerCase().replace(t," ")+" ").replace(n," ").trim())};function e(t){return t.filter((function(t){return!!t})).map((function(t){return Array.isArray(t)?e(t):t})).join(" ")}}(),angular.module("laulukirja-app",["ui.router"]).config(["$stateProvider","$urlRouterProvider",function(t,n){n.otherwise("/index"),t.state("index",{url:"/index",views:{"songsList@":{controller:"songListController",template:'\n<div id="search">\n\t<input type="text" class="form-control" placeholder="Hae..." ng-model="$root.search" ng-change="runFilter()">\n\n\t<a class="clear-btn glyphicon glyphicon-remove" ng-if="$root.search.trim().length" ng-click="runFilter(\'\')"></a>\n</div>\n\n<ul id="songlist" class="songs-list-group list-group">\n\t<li class="list-group-item"\n\t    ng-repeat="song in Songs.sorted"\n\t    ng-hide="song.$$filtered"\n\t    ng-class="{ \'active\' : $root.$state.params.song_key == song.key }">\n\n\t\t<a ui-sref="index.song({ \'song_key\' : song.key })">\n\t\t\t<h4 class="title"><b class="number">{{ song.num }}</b> &ndash; {{ song.title }}</h4>\n\t\t</a>\n\t</li>\n\n\t<li class="list-group-item no-results" ng-if="songsCount == 0">\n\t\t<b><h4>\n\t\t\t\t{{ (songsCount == 0) ? \'Ei lauluja :&lt;\' : \'...\' }}\n\t\t\t</h4></b>\n\t</li>\n</ul>\n\n\t\t\t\t\t'},"songView@":{controller:["$scope","$timeout",function(t,n){t.loading=n((()=>{t.loading=!1}))}],template:"<h3 style='text-align:left;padding-left:1em;'><b class='glyphicon glyphicon-share-alt' style='transform:rotate(230deg);'></b> Valitse laulu laululistasta</h3>"}},resolve:{songsIndex:["Songs",t=>t.init("songs/index.json")]}}).state("index.song",{url:"/:song_key",views:{"songView@":{controller:"songViewController",template:'\n<pre ng-include="$song.$templateUrl" id="song-body" ng-style="{ \'font-size\' : ($root.font_size / 10.0) + \'em\' }"></pre>\n\t\t\t\t\t'},"songMeta@":{controller:"songMetaController",template:'\n<div id="songmeta">\n\t<h2 class="title">{{ meta.title }}</h2>\n\t<h3 class="author">{{ meta.author }}</h3>\n\t<p class="description">{{ meta.description }}</p>\n\t<ul class="links">\n\t\t<li ng-repeat="link in meta.links">\n\t\t\t<a ng-href="{{ link.href }}" target="_blank" href="#"><i class="glyphicon glyphicon-link"></i> {{link.title}}</a>\n\t\t</li>\n\t</ul>\n</div>\n\t\t\t\t\t'}},resolve:{$song:["$stateParams","$templateRequest","songsIndex",function(t,n,e){var o=t.song_key,s=e[o];if(!s)throw"Could not found song '"+o+"'";return n(s.$templateUrl).then((()=>s))}]}})}]).run(["$rootScope","$state","$timeout","Songs",function(t,n,e,o){function s(){var n=document.getElementById("song-body"),e=Math.max(0,n.parentNode.offsetWidth/n.offsetWidth);return t.font_size*e}function r(){return e((function(){t.font_size=s(),console.log("resetFont() :: ",t.font_size,"em")})).catch((function(t){console.warn("Unable to customize font size",t)}))}t.$state=n,t.songsIndex={},t.font_size=10,t.resetFont=r,t.$on("resize",r),t.$on("resetFont",r),t.$on("toggleFont",(function(){return e((function(){var n,e,o=s(),r=(n=document.getElementById("song-body"),e=Math.max(0,(n.parentNode.parentNode.offsetWidth-10)/n.offsetWidth),t.font_size*e),i=t.font_size,l=Math.abs(i-o),a=Math.abs(i-r);i=a<.1?o:l<.1?r:i<o?o:i>r?r:l>a?o:r,t.font_size=i})).catch((function(t){console.warn("Unable to customize font size",t)}))})),t.$on("increaseFont",((n,e)=>t.font_size*=e||1.25)),t.$on("decreaseFont",((n,e)=>t.font_size*=e||.8)),t.search="",t.songlist={open:!0},window.addEventListener("resize",t.$emit.bind(t,"resize")),t.$watch("songlist.open",t.$emit.bind(t,"resize")),t.$on("$stateChangeStart",((n,e,o,s,r,i)=>{try{"index"==e.name&&(t.$song=null)}catch(t){console.error(t),n.preventDefault()}})),t.$on("$stateChangeError",(function(t,n,e,o,s){console.error("$stateChangeError @ "+n.to,arguments)})),t.$on("$stateChangeSuccess",(function(n,e,o,s,r){console.log("$stateChangeSuccess @ "+e.to,arguments),"index"==e.name&&(t.songlist.open=!0),angular.element(document.body).attr("state",e.name)})),t.$on("$viewContentLoaded",(function(t){console.log("$viewContentLoaded",arguments)})),t.$on("$stateNotFound",(function(t,n,e,o){console.error("$stateNotFound @ "+n.to,arguments)}))}]).controller("songListController",["$rootScope","$scope","$stateParams","songsIndex","Songs",function(t,n,e,o,s){n.Songs=s,n.songsCount=0,n.runFilter=e=>{for(var o of((e=t.search=(null==e?t.search:e)||"")&&(e=e.toLowerCase().trim()),e&&(e=e.split(/\s+/g)),n.songsCount=0,s.sorted))e?(o.$$filtered=!0,e.forEach((t=>{-1!=o.$search.$string.indexOf(t)&&(o.$$filtered=!1)}))):o.$$filtered=!1,o.$$filtered||n.songsCount++},setTimeout((()=>{n.runFilter()}))}]).controller("songViewController",["$rootScope","$scope","$sce","$song","$timeout",function(t,n,e,o,s){console.log("songViewController :: Loaded song "+o.title,o),n.$song=o,document.getElementById("song-body"),window.innerWidth<=768&&(t.songlist.open=!1),n.loading=t.resetFont().then((()=>{n.loading=!1}));try{songContentElem=document.getElementById("song-content"),window.Hammer&&songContentElem&&(t.hammertime&&t.hammertime.off("tap"),t.hammertime=new Hammer(songContentElem,{}),t.hammertime.on("tap",(function(n){t.$broadcast("toggleFont")})),t.hammertime.get("tap").set({taps:2}))}catch(t){console.error(t)}}]).controller("songMetaController",["$rootScope","$scope","$song",function(t,n,e){for(var o in n.meta={title:e.title,author:e.author||null,links:e.links||{}},n.meta.links)n.meta.links[o]={title:o,href:n.meta.links[o]}}]);