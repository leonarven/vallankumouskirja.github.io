function t(t,e,n,a){Object.defineProperty(t,e,{get:n,set:a,enumerable:!0,configurable:!0})}function e(t){return t&&t.__esModule?t.default:t}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},l={},o=n.parcelRequiree6cf;null==o&&((o=function(t){if(t in a)return a[t].exports;if(t in l){var e=l[t];delete l[t];var n={id:t,exports:{}};return a[t]=n,e.call(n.exports,n,n.exports),n.exports}var o=new Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(t,e){l[t]=e},n.parcelRequiree6cf=o),o.register("dRo73",(function(e,n){var a,l;t(e.exports,"register",(()=>a),(t=>a=t)),t(e.exports,"resolve",(()=>l),(t=>l=t));var o={};a=function(t){for(var e=Object.keys(t),n=0;n<e.length;n++)o[e[n]]=t[e[n]]},l=function(t){var e=o[t];if(null==e)throw new Error("Could not resolve bundle with id "+t);return e}})),o("dRo73").register(JSON.parse('{"fzFqu":"index.f85382be.js","4ojk6":"song.6e8a85e4.html","fUYm9":"song.4b3a6fac.html","1Zp8J":"song.e8560b5b.html","2pqHp":"song.f95ff852.html","ebCAA":"song.1047c355.html","lWQWn":"song.15d8abf0.html","lmXYG":"song.3d73535c.html","fkAPe":"song.5373d3f8.html","l2BmK":"song.17dc5160.html","cDHyW":"song.b8bf37d1.html","84E4d":"song.4436043a.html","7AZWn":"song.8cba3251.html","fgjrM":"song.7cf4de16.html","fZIf6":"song.fb3f3e69.html","2Kiej":"song.5e855fbd.html","91vCB":"song.1147ebf9.html","hNRJR":"song.8ebb83d9.html","cO89C":"song.afb1dfc7.html","9ShJL":"song.44e31a46.html","gqPEI":"song.3a7b394a.html","lD8gd":"song.8cb443dd.html","fRhff":"song.21ac3898.html","jW3ot":"song.ebc1ab9c.html","1akZ6":"song.16447634.html","9akTa":"song.0c1012fe.html","aWNas":"song.2d2d023c.html","69wQi":"song.47fd6f86.html","f3Dpi":"song.cb5ab0d8.html","dUzAf":"song.c9f6e1b3.html","7JjE9":"song.f5b34e27.html","aMOka":"song.39352589.html","cmE6n":"song.64c923b7.html","o1Ul6":"song.9841e279.html","1AofZ":"song.e4120c1e.html","0Frgu":"song.fe684615.html","hySaX":"song.e47c183f.html","j44VK":"song.b3f4f00f.html","a5cFN":"song.ab589eb9.html","b4Dso":"song.08b38d22.html","c9dCl":"song.6a33f066.html","cmTkl":"song.021223d8.html","aqEVg":"song.a3659596.html","XS3sC":"song.5e47ebdc.html","9GnMf":"song.7438b046.html","lzvX7":"song.2d6135fd.html","iCwvG":"song.173e2fda.html","iYB4f":"song.99630a5f.html","6WxWX":"song.17577c0c.html","63G8u":"song.735905ae.html","5a5MJ":"song.2427d8e4.html","h5klR":"song.d2b23942.html","6MbvP":"song.e25f4f89.html","kEils":"song.b0667a2d.html","6lXrL":"song.48e29533.html","7t5wm":"song.e011dd94.html","2q8rp":"song.a5850477.html","c3vU6":"song.0905166f.html","1iQXi":"song.15357b8d.html","77xRQ":"song.33c57cbe.html","jXEQh":"song.ea132eb5.html","3UfXO":"song.27b5ad6b.html","gi9HL":"song.85c907d1.html"}'));class i{constructor(t){this.$string="",this.$contains={},t&&this.extend(t)}extend(t){var e=null;if("object"==typeof t)for(var n in e="",t)null!=t[n]&&(t[n]=i.filterString2searchKey(t[n]),this.$contains[n]=(this.$contains[n]||"")+" "+t[n],e+=" "+t[n]);else"string"==typeof t&&t.trim().length>0&&(e=t);"string"==typeof e?this.$string=i.filterString2searchKey(this.$string,e):t&&console.warn("SearchString.extend :: Invalid argument")}toString(){return this.$string}}i.filterString2searchKey=function(){var t=/[\.,:'\(\)\[\]\{\}\/\\]/g,e=/\s.{0,3}\s/g;return function(a){return arguments.length>1?i.filterString2searchKey(Array.prototype.slice.call(arguments)):(Array.isArray(a)&&(a=n(a)),"string"!=typeof a?(console.warn("SearchString.filterString2searchkey :: Invalid argument",typeof a,a),""):(" "+a.toLowerCase().replace(t," ")+" ").replace(e," ").trim())};function n(t){return t.filter((function(t){return!!t})).map((function(t){return Array.isArray(t)?n(t):t})).join(" ")}}();var r=i;var s=class{constructor(t,e){for(var n in this.key=t,e)this[n]=e[n];null==this.$templateUrl&&(this.$templateUrl=`songs/${t}/song.html`),this.$search=new r({title:e.title||"",num:null==e.num?"":e.num.toString().trim()})}};var u;u=JSON.parse('{"kenen-joukoissa-seisot":{"title":"Kenen joukoissa seisot","author":null,"links":{},"num":4},"oppimisen-ylistys":{"title":"Oppimisen ylistys","author":"Bertol Brechtin runo vuodelta 1932","links":{"Elävä arkisto: Agit-Prop, 1975":"http://yle.fi/aihe/artikkeli/2007/04/30/agit-prop-oppimisen-ylistys"},"num":7},"riistajan-lait":{"title":"Riistäjän lait","author":null,"links":{},"num":8},"kalliolle-kukkulalle":{"title":"Kalliolle kukkulalle","author":null,"links":{},"num":40},"balladi-toveri-viljasesta":{"title":"Balladi toveri Viljasesta","author":null,"links":{},"num":12},"vapaa-venaja":{"title":"Vapaa Venäjä","author":null,"links":{},"num":49},"kolme-pikku-assaa":{"title":"Kolme pikku ässää","author":null,"links":{},"num":24},"suomi-myyntiin":{"title":"Suomi myyntiin","author":null,"links":{},"num":25},"kansainvalinen":{"title":"Kansainvälinen","author":null,"links":{},"num":1},"the-internationale":{"title":"The Internationale","author":null,"links":{},"num":2},"punakaartin-marssi":{"title":"Punakaartin marssi","author":null,"links":{},"num":13},"nuorison-marssi":{"title":"Nuorison marssi","author":null,"links":{},"num":3},"kisallittaret":{"title":"Kisällittäret","author":null,"links":{},"num":5},"allendelle":{"title":"Allendelle","author":null,"links":{},"num":11},"bella-ciao":{"title":"Bella Ciao","author":"By anti-fascist resistance in Italy 1943-1945!","links":{"Youtube":"https://www.youtube.com/watch?v=VS8GIqjPVHM"},"num":14},"oikeuden-jumalatar":{"title":"Oikeuden jumalatar","author":null,"links":{},"num":30},"partisaanimarssi":{"title":"Partisaanin marssi","author":null,"links":{},"num":15},"natalia":{"title":"Natalia ","author":null,"links":{},"num":6},"nuoruustango":{"title":"Nuoruustango","author":null,"links":{},"num":17,"disabled":true},"hasta-siempre-comandante":{"title":"Hasta siempre, Comandante","author":null,"links":{},"num":16},"jos-rakastat":{"title":"Jos rakastat","author":null,"links":{},"num":42},"uralin-pihlaja":{"title":"Uralin pihlaja","author":null,"links":{},"num":43},"varrella-virran":{"title":"Varrella virran","author":null,"links":{},"num":44},"mina-soitan-harmonikkaa":{"title":"Minä soitan harmonikkaa","author":null,"links":{},"num":null,"disabled":true},"mina-suojelen-sinua-kaikelta":{"title":"Minä suojelen sinua kaikelta","author":null,"links":{},"num":47},"lenin-seta-asuu-venajalla":{"title":"Lenin-setä asuu Venäjällä","author":null,"links":{},"num":21,"disabled":true},"sikajuna-brysseliin":{"title":"Sikajuna Brysseliin","author":null,"links":{},"num":23},"warshawjanka":{"title":"Warshawjanka","author":null,"links":{},"num":17},"partisaanivalssi":{"title":"Partisaanivalssi","author":null,"links":{},"num":18},"herrojen-kanssa-pellon-laidassa":{"title":"Herrojen kanssa pellon laidassa","author":null,"links":{},"num":25,"disabled":true},"laulu-siirtotyolaisesta":{"title":"Laulu siirtotyöläisestä","author":null,"links":{},"num":19},"taistojen-tiella":{"title":"Taistojen tiellä","author":null,"links":{},"num":20},"wir-sind-uberall":{"title":"Wir sind überall","author":null,"links":{},"num":28,"disabled":true},"solidarity-forever":{"title":"Solidarity forever","author":null,"links":{},"num":41},"oodi-vihervasemmistolaisuudelle":{"title":"Oodi vihervasemmistolaisuudelle","author":null,"links":{},"num":34},"syntymapaivalaulu":{"title":"Syntymäpäivälaulu","author":null,"links":{},"num":35},"vapauden-kaiho":{"title":"Vapauden kaiho","author":null,"links":{},"num":9},"se-erityinen-tyowaen-risteily-kappale":{"title":"Se Erityinen Työwäen Risteily-kappale","author":null,"links":{},"num":37},"aqua-vera":{"title":"Aqua vera","author":null,"links":{},"num":33,"disabled":true},"ranskassa-juodaan-viinia":{"title":"Ranskassa juodaan viiniä","author":null,"links":{},"num":null,"disabled":true},"vivassa-juodaan-kiljua":{"title":"ViVassa juodaan kiljua","author":null,"links":{},"num":36},"pikku-kakkosen-posti":{"title":"Pikku kakkosen posti","author":null,"links":{},"num":32},"rivakka-turkulainen-juomalaulu":{"title":"Rivakka turkulainen juomalaulu","author":null,"links":{},"num":33},"ken-ompi-fuksi":{"title":"Fuksilaulu","author":null,"links":{},"num":31},"ylos-punakapina-ja-alas-hallitus":{"title":"Ylös punakapina ja alas hallitus","author":null,"links":{},"num":26},"nuoriso-valmis-on-maistelemaan":{"title":"Nuoriso valmis on maistelemaan","author":null,"links":{},"num":27},"nalkaisen-vegaanin-taisteluhuuto":{"title":"Nälkäisen vegaanin taisteluhuuto","author":null,"links":{},"num":28},"valkoinen-cis-heteromies":{"title":"Valkoinen cis-heteromies","author":null,"links":{},"num":29},"ampukaa-komissaarit":{"title":"Ampukaa komissaarit, nuo hullut koirat","author":null,"links":{},"num":38,"disabled":true},"volga":{"title":"Volga","author":null,"links":{},"num":48},"toveri-mita-odotat":{"title":"Toveri, mitä odotat?","author":null,"links":{},"num":21},"koyhaliston-marssi":{"title":"Köyhälistön marssi","author":null,"links":{},"num":22},"working-class-hero":{"title":"Working class hero ","author":null,"links":{},"num":45},"ken-saro-wiva-on-kuollut":{"title":"Ken Saro Wiva on kuollut","author":null,"links":{},"num":46},"loldiers-anthem":{"title":"Emme suostu pelkäämään","author":"Paleface","links":{"Youtube":"https://www.youtube.com/watch?v=-0lht7PZLac"},"num":38},"haistakaa-paska-koko-valtiovalta":{"title":"haistakaa paska koko valtiovalta","author":"Irwin","num":39},"esko-kulonen":{"title":"Esko Kulonen","author":null,"links":{},"num":10},"nalkamaan-laulu":{"title":"Nälkämaan laulu","author":null,"links":{},"num":50},"kolme-pikku-miesta":{"title":"Kolme pikku miestä","num":51},"juo-kaljas-laulellen":{"title":"Juo kaljas laulellen","num":52},"helsinki-shangri-la":{"title":"Helsinki Shangri-La","num":53}}');var m,d;d=new URL(o("dRo73").resolve("4ojk6"),import.meta.url).toString();var h;h=new URL(o("dRo73").resolve("fUYm9"),import.meta.url).toString();var g;g=new URL(o("dRo73").resolve("1Zp8J"),import.meta.url).toString();var c;c=new URL(o("dRo73").resolve("2pqHp"),import.meta.url).toString();var k;k=new URL(o("dRo73").resolve("ebCAA"),import.meta.url).toString();var v;v=new URL(o("dRo73").resolve("lWQWn"),import.meta.url).toString();var p;p=new URL(o("dRo73").resolve("lmXYG"),import.meta.url).toString();var f;f=new URL(o("dRo73").resolve("fkAPe"),import.meta.url).toString();var R;R=new URL(o("dRo73").resolve("l2BmK"),import.meta.url).toString();var S;S=new URL(o("dRo73").resolve("cDHyW"),import.meta.url).toString();var H;H=new URL(o("dRo73").resolve("84E4d"),import.meta.url).toString();var _;_=new URL(o("dRo73").resolve("7AZWn"),import.meta.url).toString();var b;b=new URL(o("dRo73").resolve("fgjrM"),import.meta.url).toString();var w;w=new URL(o("dRo73").resolve("fZIf6"),import.meta.url).toString();var y;y=new URL(o("dRo73").resolve("2Kiej"),import.meta.url).toString();var E;E=new URL(o("dRo73").resolve("91vCB"),import.meta.url).toString();var $;$=new URL(o("dRo73").resolve("hNRJR"),import.meta.url).toString();var j;j=new URL(o("dRo73").resolve("cO89C"),import.meta.url).toString();var A;A=new URL(o("dRo73").resolve("9ShJL"),import.meta.url).toString();var F;F=new URL(o("dRo73").resolve("gqPEI"),import.meta.url).toString();var L;L=new URL(o("dRo73").resolve("lD8gd"),import.meta.url).toString();var U;U=new URL(o("dRo73").resolve("fRhff"),import.meta.url).toString();var x;x=new URL(o("dRo73").resolve("jW3ot"),import.meta.url).toString();var C;C=new URL(o("dRo73").resolve("1akZ6"),import.meta.url).toString();var W;W=new URL(o("dRo73").resolve("9akTa"),import.meta.url).toString();var z;z=new URL(o("dRo73").resolve("aWNas"),import.meta.url).toString();var M;M=new URL(o("dRo73").resolve("69wQi"),import.meta.url).toString();var V;V=new URL(o("dRo73").resolve("f3Dpi"),import.meta.url).toString();var I;I=new URL(o("dRo73").resolve("dUzAf"),import.meta.url).toString();var N;N=new URL(o("dRo73").resolve("7JjE9"),import.meta.url).toString();var K;K=new URL(o("dRo73").resolve("aMOka"),import.meta.url).toString();var P;P=new URL(o("dRo73").resolve("cmE6n"),import.meta.url).toString();var O;O=new URL(o("dRo73").resolve("o1Ul6"),import.meta.url).toString();var X;X=new URL(o("dRo73").resolve("1AofZ"),import.meta.url).toString();var q;q=new URL(o("dRo73").resolve("0Frgu"),import.meta.url).toString();var B;B=new URL(o("dRo73").resolve("hySaX"),import.meta.url).toString();var J;J=new URL(o("dRo73").resolve("j44VK"),import.meta.url).toString();var T;T=new URL(o("dRo73").resolve("a5cFN"),import.meta.url).toString();var D;D=new URL(o("dRo73").resolve("b4Dso"),import.meta.url).toString();var Z;Z=new URL(o("dRo73").resolve("c9dCl"),import.meta.url).toString();var Q;Q=new URL(o("dRo73").resolve("cmTkl"),import.meta.url).toString();var G;G=new URL(o("dRo73").resolve("aqEVg"),import.meta.url).toString();var Y;Y=new URL(o("dRo73").resolve("XS3sC"),import.meta.url).toString();var tt;tt=new URL(o("dRo73").resolve("9GnMf"),import.meta.url).toString();var et;et=new URL(o("dRo73").resolve("lzvX7"),import.meta.url).toString();var nt;nt=new URL(o("dRo73").resolve("iCwvG"),import.meta.url).toString();var at;at=new URL(o("dRo73").resolve("iYB4f"),import.meta.url).toString();var lt;lt=new URL(o("dRo73").resolve("6WxWX"),import.meta.url).toString();var ot;ot=new URL(o("dRo73").resolve("63G8u"),import.meta.url).toString();var it;it=new URL(o("dRo73").resolve("5a5MJ"),import.meta.url).toString();var rt;rt=new URL(o("dRo73").resolve("h5klR"),import.meta.url).toString();var st;st=new URL(o("dRo73").resolve("6MbvP"),import.meta.url).toString();var ut;ut=new URL(o("dRo73").resolve("kEils"),import.meta.url).toString();var mt;mt=new URL(o("dRo73").resolve("6lXrL"),import.meta.url).toString();var dt;dt=new URL(o("dRo73").resolve("7t5wm"),import.meta.url).toString();var ht;ht=new URL(o("dRo73").resolve("2q8rp"),import.meta.url).toString();var gt;gt=new URL(o("dRo73").resolve("c3vU6"),import.meta.url).toString();var ct;ct=new URL(o("dRo73").resolve("1iQXi"),import.meta.url).toString();var kt;kt=new URL(o("dRo73").resolve("77xRQ"),import.meta.url).toString();var vt;vt=new URL(o("dRo73").resolve("jXEQh"),import.meta.url).toString();var pt;pt=new URL(o("dRo73").resolve("3UfXO"),import.meta.url).toString();for(var ft in m={allendelle:d,"aqua-vera":h,"ampukaa-komissaarit":g,"balladi-toveri-viljasesta":c,"bella-ciao":k,"bella-ciao-es":v,"esko-kulonen":p,"haistakaa-paska-koko-valtiovalta":f,"hasta-siempre-comandante":R,"helsinki-shangri-la":S,"herrojen-kanssa-pellon-laidassa":H,"jos-rakastat":_,"juo-kaljas-laulellen":b,"kalliolle-kukkulalle":w,kansainvalinen:y,"ken-ompi-fuksi":E,"ken-saro-wiva-on-kuollut":$,"kenen-joukoissa-seisot":j,kisallittaret:A,"kolme-pikku-assaa":F,"kolme-pikku-miesta":L,"koyhaliston-marssi":U,"laulu-siirtotyolaisesta":x,"lenin-seta-asuu-venajalla":C,"loldiers-anthem":W,"mina-soitan-harmonikkaa":z,"mina-suojelen-sinua-kaikelta":M,"nalkaisen-vegaanin-taisteluhuuto":V,"nalkamaan-laulu":I,natalia:N,"nuoriso-valmis-on-maistelemaan":K,"nuorison-marssi":P,nuoruustango:O,"oikeuden-jumalatar":X,"oodi-vihervasemmistolaisuudelle":q,"oppimisen-ylistys":B,partisaanimarssi:J,partisaanivalssi:T,"pikku-kakkosen-posti":D,"punakaartin-marssi":Z,"ranskassa-juodaan-viinia":Q,"riistajan-lait":G,"rivakka-turkulainen-juomalaulu":Y,"se-erityinen-tyowaen-risteily-kappale":tt,"sikajuna-brysseliin":et,"solidarity-forever":nt,"suomi-myyntiin":at,syntymapaivalaulu:lt,"taistojen-tiella":ot,"the-internationale":it,"toveri-mita-odotat":rt,"uralin-pihlaja":st,"valkoinen-cis-heteromies":ut,"vapaa-venaja":mt,"vapauden-kaiho":dt,"varrella-virran":ht,"vivassa-juodaan-kiljua":gt,volga:ct,warshawjanka:kt,"wir-sind-uberall":vt,"working-class-hero":pt,"ylos-punakapina-ja-alas-hallitus":new URL(o("dRo73").resolve("gi9HL"),import.meta.url).toString()},e(u))null!=m[ft]&&(e(u)[ft].$templateUrl=m[ft]);var Rt=e(u);angular.module("laulukirja-app",["ui.router"]).constant("songs",Rt).service("Songs",class{static $inject=["$http","$injector"];constructor(t,e){this.index={};this.setIndex=t=>{for(var e in this.index=t,this.index)this.index[e].disable?delete this.index[e]:this.index[e]=new s(e,this.index[e]);return this.sorted=Object.keys(this.index).map((t=>this.index[t])).sort(((t,e)=>t.num-e.num)),this.index},this.init=n=>{try{return this.setIndex(e.get("songs"))}catch(t){}return t({url:n}).then((t=>this.setIndex(t.data)))}}}).service("fontService",class{static $inject=["$rootScope","$state","$timeout","$templateCache","Songs"];constructor(t,e,n,a){var l=t.font=this;function o(){var t=document.getElementById("song-body");if(!t)return 12;var e=Math.max(0,(t.parentNode.parentNode.offsetWidth-10)/t.offsetWidth);return l.size*e}function i(){var t=document.getElementById("song-body");if(!t)return 10;var e=Math.max(0,t.parentNode.offsetWidth/t.offsetWidth);return l.size*e}function r(){return n((function(){l.size=i(),console.log("resetFont() :: ",l.size,"em")})).catch((function(t){console.warn("Unable to customize font size",t)}))}this.size=10,this.resetFont=r,t.$on("resize",r),t.$on("resetFont",r),t.$on("toggleFont",(function(){return n((function(){var t=i(),e=o(),n=n.size,a=Math.abs(n-t),l=Math.abs(n-e);(n=l<.1?t:a<.1?e:n<t?t:n>e?e:a>l?t:e).size=n})).catch((function(t){console.warn("Unable to customize font size",t)}))})),t.$on("increaseFont",((t,e)=>l.size*=e||1.25)),t.$on("decreaseFont",((t,e)=>l.size*=e||.8))}}).controller("songListController",class{static $inject=["$rootScope","$scope","$stateParams","songsIndex","Songs"];constructor(t,e,n,a,l){e.Songs=l;e.songsCount=0,e.runFilter=n=>{n=t.search=(null==n?t.search:n)||"";for(var a of(n&&(n=n.toLowerCase().trim()),n&&(n=n.split(/\s+/g)),e.songsCount=0,l.sorted))n?(a.$$filtered=!0,n.forEach((t=>{-1!=a.$search.$string.indexOf(t)&&(a.$$filtered=!1)}))):a.$$filtered=!1,a.$$filtered||e.songsCount++},setTimeout((()=>{e.runFilter()}))}}).controller("songViewController",class{static $inject=["$rootScope","$scope","$sce","$song","$timeout"];constructor(t,e,n,a,l){console.log("songViewController :: Loaded song "+a.title,a),e.$song=a;document.getElementById("song-body");window.innerWidth<=768&&(t.songlist.open=!1),e.loading=!0,e.init=()=>l((()=>t.font.resetFont())).then((()=>{try{var n=document.getElementById("song-content");window.Hammer&&n&&(t.hammertime&&(t.hammertime.off("tap"),t.hammertime.off("pinch")),t.hammertime=new Hammer(n,{}),t.hammertime.on("tap",(function(e){t.$broadcast("toggleFont")})),t.hammertime.on("pinch",(function(t){})),t.hammertime.get("tap").set({taps:2}))}catch(t){console.error(t)}e.loading=!1}))}}).controller("songMetaController",class{static $inject=["$rootScope","$scope","$song"];constructor(t,e,n){for(var a in e.meta={title:n.title,author:n.author||null,links:n.links||{}},e.meta.links)e.meta.links[a]={title:a,href:e.meta.links[a]}}}).config(["$stateProvider","$urlRouterProvider",function(t,e){e.otherwise("/index"),t.state("index",{url:"/index",views:{"songsList@":{controller:"songListController",template:'\n<div id="search">\n<input type="text" class="form-control" placeholder="Hae..." ng-model="$root.search" ng-change="runFilter()">\n\n<a class="clear-btn glyphicon glyphicon-remove" ng-if="$root.search.trim().length" ng-click="runFilter(\'\')"></a>\n</div>\n\n<ul id="songlist" class="songs-list-group list-group">\n<li class="list-group-item"\n    ng-repeat="song in Songs.sorted"\n    ng-hide="song.$$filtered"\n    ng-class="{ \'active\' : $root.$state.params.song_key == song.key }">\n\n\t<a ui-sref="index.song({ \'song_key\' : song.key })">\n\t\t<h4 class="title"><b class="number">{{ song.num }}</b> &ndash; {{ song.title }}</h4>\n\t</a>\n</li>\n\n<li class="list-group-item no-results" ng-if="songsCount == 0">\n\t<b><h4>{{ (songsCount == 0) ? \'Ei lauluja :&lt;\' : \'...\' }}</h4></b>\n</li>\n</ul>'},"songView@":{controller:["$scope","$timeout",function(t,e){t.loading=e((()=>{t.loading=!1}))}],template:"<h3 style='text-align:left;padding-left:1em;'><b class='glyphicon glyphicon-share-alt' style='transform:rotate(230deg);'></b> Valitse laulu laululistasta</h3>"}},resolve:{songsIndex:["Songs",t=>t.init("songs/index.json")]}}).state("index.song",{url:"/:song_key",views:{"songView@":{controller:"songViewController",template:'\n<pre ng-init="init()" ng-include="$song.$templateUrl" id="song-body" ng-style="{ \'font-size\' : ($root.font.size / 10.0) + \'em\' }"></pre>\n\t\t\t\t'},"songMeta@":{controller:"songMetaController",template:'\n<div id="songmeta">\n<h2 class="title">{{ meta.title }}</h2>\n<h3 class="author">{{ meta.author }}</h3>\n<p class="description">{{ meta.description }}</p>\n<ul class="links">\n\t<li ng-repeat="link in meta.links">\n\t\t<a ng-href="{{ link.href }}" target="_blank" href="#"><i class="glyphicon glyphicon-link"></i> {{link.title}}</a>\n\t</li>\n</ul>\n</div>'}},resolve:{$song:["$stateParams","$templateRequest","$sce","songsIndex",function(t,e,n,a){var l=t.song_key,o=a[l];if(!o)throw"Could not found song '"+l+"'";return o.lyrics?o:e(o.$templateUrl).then((t=>(o.lyrics=t,o.$lyrics=n.trustAsHtml(t),o)))}]}})}]).run(["$rootScope","$state","$timeout","$templateCache","Songs","fontService",function(t,e,n,a,l){t.$state=e,t.songsIndex={},t.search="",t.songlist={open:!0},window.addEventListener("resize",t.$emit.bind(t,"resize")),t.$watch("songlist.open",t.$emit.bind(t,"resize")),t.$on("$stateChangeStart",((e,n,a,l,o,i)=>{try{"index"==n.name&&(t.$song=null)}catch(t){console.error(t),e.preventDefault()}})),t.$on("$stateChangeError",(function(t,e,n,a,l){console.error("$stateChangeError @ "+e.to,arguments)})),t.$on("$stateChangeSuccess",(function(e,n,a,l,o){console.log("$stateChangeSuccess @ "+n.to,arguments),"index"==n.name&&(t.songlist.open=!0),angular.element(document.body).attr("state",n.name)})),t.$on("$viewContentLoaded",(function(t){console.log("$viewContentLoaded",arguments)})),t.$on("$stateNotFound",(function(t,e,n,a){console.error("$stateNotFound @ "+e.to,arguments)}))}]);