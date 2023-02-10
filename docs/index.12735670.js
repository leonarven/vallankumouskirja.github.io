// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"gB2y1":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "42036d7a98ade5a7";
module.bundle.HMR_BUNDLE_ID = "b4e81f3612735670";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"fDsWs":[function(require,module,exports) {
var _ajsAppTs = require("./ajs.app.ts");

},{"./ajs.app.ts":"hCR0M"}],"hCR0M":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _fontService = require("./ts/services/FontService");
var _songsService = require("./ts/services/SongsService");
var _songMetaController = require("./ts/components/SongMetaController");
var _songListController = require("./ts/components/SongListController");
var _songViewController = require("./ts/components/SongViewController");
var _songs = require("./songs");
var _songsDefault = parcelHelpers.interopDefault(_songs);
angular.module("laulukirja-app", [
    "ui.router"
]).constant("songs", (0, _songsDefault.default)).service("Songs", (0, _songsService.AjsSongsService)).service("fontService", (0, _fontService.AjsFontService)).config([
    "$stateProvider",
    "$urlRouterProvider",
    function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/index");
        $stateProvider.state("index", {
            url: "/index",
            views: {
                "songsList@": {
                    controller: (0, _songListController.SongListController),
                    template: `
<div id="search">
<input type="text" class="form-control" placeholder="Hae..." ng-model="$root.search" ng-change="runFilter()">

<a class="clear-btn glyphicon glyphicon-remove" ng-if="$root.search.trim().length" ng-click="runFilter('')"></a>
</div>

<ul id="songlist" class="songs-list-group list-group">
<li class="list-group-item"
    ng-repeat="song in Songs.sorted"
    ng-hide="song.$$filtered"
    ng-class="{ 'active' : $root.$state.params.song_key == song.key }">

	<a ui-sref="index.song({ 'song_key' : song.key })">
		<h4 class="title"><b class="number">{{ song.num }}</b> &ndash; {{ song.title }}</h4>
	</a>
</li>

<li class="list-group-item no-results" ng-if="songsCount == 0">
	<b><h4>{{ (songsCount == 0) ? 'Ei lauluja :&lt;' : '...' }}</h4></b>
</li>
</ul>`
                },
                "songView@": {
                    controller: [
                        "$scope",
                        "$timeout",
                        function($scope, $timeout) {
                            $scope.loading = $timeout(()=>{
                                $scope.loading = false;
                            });
                        }
                    ],
                    template: "<h3 style='text-align:left;padding-left:1em;'><b class='glyphicon glyphicon-share-alt' style='transform:rotate(230deg);'></b> Valitse laulu laululistasta</h3>"
                }
            },
            resolve: {
                "songsIndex": [
                    "Songs",
                    (Songs)=>Songs.init("songs/index.json")
                ]
            }
        }).state("index.song", {
            url: "/:song_key",
            views: {
                "songView@": {
                    controller: (0, _songViewController.SongViewController),
                    template: `
<pre ng-init="init()" ng-include="$song.$templateUrl" id="song-body" ng-style="{ 'font-size' : ($root.font.size / 10.0) + 'em' }"></pre>
				`
                },
                "songMeta@": {
                    controller: (0, _songMetaController.SongMetaController),
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
                }
            },
            resolve: {
                "$song": [
                    "$stateParams",
                    "$templateRequest",
                    "$sce",
                    "songsIndex",
                    function($stateParams, $templateRequest, $sce, index) {
                        var key = $stateParams.song_key, song = index[key];
                        if (!song) throw "Could not found song '" + key + "'";
                        if (song.lyrics) return song;
                        return $templateRequest(song.$templateUrl).then((lyrics)=>{
                            song.lyrics = lyrics;
                            song.$lyrics = $sce.trustAsHtml(lyrics);
                            return song;
                        });
                    }
                ]
            }
        });
    }
]).run([
    "$rootScope",
    "$state",
    "$timeout",
    "$templateCache",
    "Songs",
    "fontService",
    function($rootScope, $state, $timeout, Songs, fontService) {
        $rootScope.$state = $state;
        $rootScope.songsIndex = {};
        $rootScope.search = "";
        $rootScope.songlist = {
            open: true
        };
        window.addEventListener("resize", $rootScope.$emit.bind($rootScope, "resize"));
        $rootScope.$watch("songlist.open", $rootScope.$emit.bind($rootScope, "resize"));
        $rootScope.$on("$stateChangeStart", (event, toState, toParams, fromState, fromParams, _options)=>{
            try {
                if (toState.name == "index") $rootScope.$song = null;
            } catch (err) {
                console.error(err);
                event.preventDefault();
            }
        });
        $rootScope.$on("$stateChangeError", function(event, toState, toParams, fromState, fromParams) {
            console.error("$stateChangeError @ " + toState.to, arguments);
        });
        $rootScope.$on("$stateChangeSuccess", function(event, toState, toParams, fromState, fromParams) {
            console.log("$stateChangeSuccess @ " + toState.to, arguments);
            if (toState.name == "index") $rootScope.songlist.open = true;
            angular.element(document.body).attr("state", toState.name);
        });
        $rootScope.$on("$viewContentLoaded", function(event) {
            console.log("$viewContentLoaded", arguments);
        });
        $rootScope.$on("$stateNotFound", function(event, unfoundState, fromState, fromParams) {
            console.error("$stateNotFound @ " + unfoundState.to, arguments);
        });
    }
]);

},{"./songs":"f8pHf","@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh","./ts/components/SongMetaController":"9FiZE","./ts/components/SongListController":"hnImv","./ts/components/SongViewController":"28O1H","./ts/services/FontService":"iDRZX","./ts/services/SongsService":"1o4Cv"}],"f8pHf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJson = require("./songs/index.json");
var _indexJsonDefault = parcelHelpers.interopDefault(_indexJson);
var _songHtml = require("./songs/*/song.html");
for(var key in 0, _indexJsonDefault.default)if (_songHtml[key] != null) (0, _indexJsonDefault.default)[key].$templateUrl = _songHtml[key];
exports.default = (0, _indexJsonDefault.default);

},{"./songs/index.json":"8AsJZ","./songs/*/song.html":"SpCyl","@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"8AsJZ":[function(require,module,exports) {
module.exports = JSON.parse('{"kenen-joukoissa-seisot":{"title":"Kenen joukoissa seisot","author":null,"links":{},"num":4},"oppimisen-ylistys":{"title":"Oppimisen ylistys","author":"Bertol Brechtin runo vuodelta 1932","links":{"El\xe4v\xe4 arkisto: Agit-Prop, 1975":"http://yle.fi/aihe/artikkeli/2007/04/30/agit-prop-oppimisen-ylistys"},"num":7},"riistajan-lait":{"title":"Riist\xe4j\xe4n lait","author":null,"links":{},"num":8},"kalliolle-kukkulalle":{"title":"Kalliolle kukkulalle","author":null,"links":{},"num":40},"balladi-toveri-viljasesta":{"title":"Balladi toveri Viljasesta","author":null,"links":{},"num":12},"vapaa-venaja":{"title":"Vapaa Ven\xe4j\xe4","author":null,"links":{},"num":49},"kolme-pikku-assaa":{"title":"Kolme pikku \xe4ss\xe4\xe4","author":null,"links":{},"num":24},"suomi-myyntiin":{"title":"Suomi myyntiin","author":null,"links":{},"num":25},"kansainvalinen":{"title":"Kansainv\xe4linen","author":null,"links":{},"num":1},"the-internationale":{"title":"The Internationale","author":null,"links":{},"num":2},"punakaartin-marssi":{"title":"Punakaartin marssi","author":null,"links":{},"num":13},"nuorison-marssi":{"title":"Nuorison marssi","author":null,"links":{},"num":3},"kisallittaret":{"title":"Kis\xe4llitt\xe4ret","author":null,"links":{},"num":5},"allendelle":{"title":"Allendelle","author":null,"links":{},"num":11},"bella-ciao":{"title":"Bella Ciao","author":"By anti-fascist resistance in Italy 1943-1945!","links":{"Youtube":"https://www.youtube.com/watch?v=VS8GIqjPVHM"},"num":14},"oikeuden-jumalatar":{"title":"Oikeuden jumalatar","author":null,"links":{},"num":30},"partisaanimarssi":{"title":"Partisaanin marssi","author":null,"links":{},"num":15},"natalia":{"title":"Natalia ","author":null,"links":{},"num":6},"nuoruustango":{"title":"Nuoruustango","author":null,"links":{},"num":17,"disabled":true},"hasta-siempre-comandante":{"title":"Hasta siempre, Comandante","author":null,"links":{},"num":16},"jos-rakastat":{"title":"Jos rakastat","author":null,"links":{},"num":42},"uralin-pihlaja":{"title":"Uralin pihlaja","author":null,"links":{},"num":43},"varrella-virran":{"title":"Varrella virran","author":null,"links":{},"num":44},"mina-soitan-harmonikkaa":{"title":"Min\xe4 soitan harmonikkaa","author":null,"links":{},"num":null,"disabled":true},"mina-suojelen-sinua-kaikelta":{"title":"Min\xe4 suojelen sinua kaikelta","author":null,"links":{},"num":47},"lenin-seta-asuu-venajalla":{"title":"Lenin-set\xe4 asuu Ven\xe4j\xe4ll\xe4","author":null,"links":{},"num":21,"disabled":true},"sikajuna-brysseliin":{"title":"Sikajuna Brysseliin","author":null,"links":{},"num":23},"warshawjanka":{"title":"Warshawjanka","author":null,"links":{},"num":17},"partisaanivalssi":{"title":"Partisaanivalssi","author":null,"links":{},"num":18},"herrojen-kanssa-pellon-laidassa":{"title":"Herrojen kanssa pellon laidassa","author":null,"links":{},"num":25,"disabled":true},"laulu-siirtotyolaisesta":{"title":"Laulu siirtoty\xf6l\xe4isest\xe4","author":null,"links":{},"num":19},"taistojen-tiella":{"title":"Taistojen tiell\xe4","author":null,"links":{},"num":20},"wir-sind-uberall":{"title":"Wir sind \xfcberall","author":null,"links":{},"num":28,"disabled":true},"solidarity-forever":{"title":"Solidarity forever","author":null,"links":{},"num":41},"oodi-vihervasemmistolaisuudelle":{"title":"Oodi vihervasemmistolaisuudelle","author":null,"links":{},"num":34},"syntymapaivalaulu":{"title":"Syntym\xe4p\xe4iv\xe4laulu","author":null,"links":{},"num":35},"vapauden-kaiho":{"title":"Vapauden kaiho","author":null,"links":{},"num":9},"se-erityinen-tyowaen-risteily-kappale":{"title":"Se Erityinen Ty\xf6w\xe4en Risteily-kappale","author":null,"links":{},"num":37},"aqua-vera":{"title":"Aqua vera","author":null,"links":{},"num":33,"disabled":true},"ranskassa-juodaan-viinia":{"title":"Ranskassa juodaan viini\xe4","author":null,"links":{},"num":null,"disabled":true},"vivassa-juodaan-kiljua":{"title":"ViVassa juodaan kiljua","author":null,"links":{},"num":36},"pikku-kakkosen-posti":{"title":"Pikku kakkosen posti","author":null,"links":{},"num":32},"rivakka-turkulainen-juomalaulu":{"title":"Rivakka turkulainen juomalaulu","author":null,"links":{},"num":33},"ken-ompi-fuksi":{"title":"Fuksilaulu","author":null,"links":{},"num":31},"ylos-punakapina-ja-alas-hallitus":{"title":"Yl\xf6s punakapina ja alas hallitus","author":null,"links":{},"num":26},"nuoriso-valmis-on-maistelemaan":{"title":"Nuoriso valmis on maistelemaan","author":null,"links":{},"num":27},"nalkaisen-vegaanin-taisteluhuuto":{"title":"N\xe4lk\xe4isen vegaanin taisteluhuuto","author":null,"links":{},"num":28},"valkoinen-cis-heteromies":{"title":"Valkoinen cis-heteromies","author":null,"links":{},"num":29},"ampukaa-komissaarit":{"title":"Ampukaa komissaarit, nuo hullut koirat","author":null,"links":{},"num":38,"disabled":true},"volga":{"title":"Volga","author":null,"links":{},"num":48},"toveri-mita-odotat":{"title":"Toveri, mit\xe4 odotat?","author":null,"links":{},"num":21},"koyhaliston-marssi":{"title":"K\xf6yh\xe4list\xf6n marssi","author":null,"links":{},"num":22},"working-class-hero":{"title":"Working class hero ","author":null,"links":{},"num":45},"ken-saro-wiva-on-kuollut":{"title":"Ken Saro Wiva on kuollut","author":null,"links":{},"num":46},"loldiers-anthem":{"title":"Emme suostu pelk\xe4\xe4m\xe4\xe4n","author":"Paleface","links":{"Youtube":"https://www.youtube.com/watch?v=-0lht7PZLac"},"num":38},"haistakaa-paska-koko-valtiovalta":{"title":"haistakaa paska koko valtiovalta","author":"Irwin","num":39},"esko-kulonen":{"title":"Esko Kulonen","author":null,"links":{},"num":10},"nalkamaan-laulu":{"title":"N\xe4lk\xe4maan laulu","author":null,"links":{},"num":50},"kolme-pikku-miesta":{"title":"Kolme pikku miest\xe4","num":51},"juo-kaljas-laulellen":{"title":"Juo kaljas laulellen","num":52},"helsinki-shangri-la":{"title":"Helsinki Shangri-La","num":53}}');

},{}],"SpCyl":[function(require,module,exports) {
const _temp0 = require("../allendelle/song.html");
const _temp1 = require("../ampukaa-komissaarit/song.html");
const _temp2 = require("../aqua-vera/song.html");
const _temp3 = require("../balladi-toveri-viljasesta/song.html");
const _temp4 = require("../bella-ciao/song.html");
const _temp5 = require("../bella-ciao-es/song.html");
const _temp6 = require("../esko-kulonen/song.html");
const _temp7 = require("../haistakaa-paska-koko-valtiovalta/song.html");
const _temp8 = require("../hasta-siempre-comandante/song.html");
const _temp9 = require("../helsinki-shangri-la/song.html");
const _temp10 = require("../herrojen-kanssa-pellon-laidassa/song.html");
const _temp11 = require("../jos-rakastat/song.html");
const _temp12 = require("../juo-kaljas-laulellen/song.html");
const _temp13 = require("../kalliolle-kukkulalle/song.html");
const _temp14 = require("../kansainvalinen/song.html");
const _temp15 = require("../ken-ompi-fuksi/song.html");
const _temp16 = require("../ken-saro-wiva-on-kuollut/song.html");
const _temp17 = require("../kenen-joukoissa-seisot/song.html");
const _temp18 = require("../kisallittaret/song.html");
const _temp19 = require("../kolme-pikku-assaa/song.html");
const _temp20 = require("../kolme-pikku-miesta/song.html");
const _temp21 = require("../koyhaliston-marssi/song.html");
const _temp22 = require("../laulu-siirtotyolaisesta/song.html");
const _temp23 = require("../lenin-seta-asuu-venajalla/song.html");
const _temp24 = require("../loldiers-anthem/song.html");
const _temp25 = require("../mina-soitan-harmonikkaa/song.html");
const _temp26 = require("../mina-suojelen-sinua-kaikelta/song.html");
const _temp27 = require("../nalkaisen-vegaanin-taisteluhuuto/song.html");
const _temp28 = require("../nalkamaan-laulu/song.html");
const _temp29 = require("../natalia/song.html");
const _temp30 = require("../nuoriso-valmis-on-maistelemaan/song.html");
const _temp31 = require("../nuorison-marssi/song.html");
const _temp32 = require("../nuoruustango/song.html");
const _temp33 = require("../oikeuden-jumalatar/song.html");
const _temp34 = require("../oodi-vihervasemmistolaisuudelle/song.html");
const _temp35 = require("../oppimisen-ylistys/song.html");
const _temp36 = require("../partisaanimarssi/song.html");
const _temp37 = require("../partisaanivalssi/song.html");
const _temp38 = require("../pikku-kakkosen-posti/song.html");
const _temp39 = require("../punakaartin-marssi/song.html");
const _temp40 = require("../ranskassa-juodaan-viinia/song.html");
const _temp41 = require("../riistajan-lait/song.html");
const _temp42 = require("../rivakka-turkulainen-juomalaulu/song.html");
const _temp43 = require("../se-erityinen-tyowaen-risteily-kappale/song.html");
const _temp44 = require("../sikajuna-brysseliin/song.html");
const _temp45 = require("../solidarity-forever/song.html");
const _temp46 = require("../suomi-myyntiin/song.html");
const _temp47 = require("../syntymapaivalaulu/song.html");
const _temp48 = require("../taistojen-tiella/song.html");
const _temp49 = require("../the-internationale/song.html");
const _temp50 = require("../toveri-mita-odotat/song.html");
const _temp51 = require("../uralin-pihlaja/song.html");
const _temp52 = require("../valkoinen-cis-heteromies/song.html");
const _temp53 = require("../vapaa-venaja/song.html");
const _temp54 = require("../vapauden-kaiho/song.html");
const _temp55 = require("../varrella-virran/song.html");
const _temp56 = require("../vivassa-juodaan-kiljua/song.html");
const _temp57 = require("../volga/song.html");
const _temp58 = require("../warshawjanka/song.html");
const _temp59 = require("../wir-sind-uberall/song.html");
const _temp60 = require("../working-class-hero/song.html");
const _temp61 = require("../ylos-punakapina-ja-alas-hallitus/song.html");
module.exports = {
    "allendelle": _temp0,
    "ampukaa-komissaarit": _temp1,
    "aqua-vera": _temp2,
    "balladi-toveri-viljasesta": _temp3,
    "bella-ciao": _temp4,
    "bella-ciao-es": _temp5,
    "esko-kulonen": _temp6,
    "haistakaa-paska-koko-valtiovalta": _temp7,
    "hasta-siempre-comandante": _temp8,
    "helsinki-shangri-la": _temp9,
    "herrojen-kanssa-pellon-laidassa": _temp10,
    "jos-rakastat": _temp11,
    "juo-kaljas-laulellen": _temp12,
    "kalliolle-kukkulalle": _temp13,
    "kansainvalinen": _temp14,
    "ken-ompi-fuksi": _temp15,
    "ken-saro-wiva-on-kuollut": _temp16,
    "kenen-joukoissa-seisot": _temp17,
    "kisallittaret": _temp18,
    "kolme-pikku-assaa": _temp19,
    "kolme-pikku-miesta": _temp20,
    "koyhaliston-marssi": _temp21,
    "laulu-siirtotyolaisesta": _temp22,
    "lenin-seta-asuu-venajalla": _temp23,
    "loldiers-anthem": _temp24,
    "mina-soitan-harmonikkaa": _temp25,
    "mina-suojelen-sinua-kaikelta": _temp26,
    "nalkaisen-vegaanin-taisteluhuuto": _temp27,
    "nalkamaan-laulu": _temp28,
    "natalia": _temp29,
    "nuoriso-valmis-on-maistelemaan": _temp30,
    "nuorison-marssi": _temp31,
    "nuoruustango": _temp32,
    "oikeuden-jumalatar": _temp33,
    "oodi-vihervasemmistolaisuudelle": _temp34,
    "oppimisen-ylistys": _temp35,
    "partisaanimarssi": _temp36,
    "partisaanivalssi": _temp37,
    "pikku-kakkosen-posti": _temp38,
    "punakaartin-marssi": _temp39,
    "ranskassa-juodaan-viinia": _temp40,
    "riistajan-lait": _temp41,
    "rivakka-turkulainen-juomalaulu": _temp42,
    "se-erityinen-tyowaen-risteily-kappale": _temp43,
    "sikajuna-brysseliin": _temp44,
    "solidarity-forever": _temp45,
    "suomi-myyntiin": _temp46,
    "syntymapaivalaulu": _temp47,
    "taistojen-tiella": _temp48,
    "the-internationale": _temp49,
    "toveri-mita-odotat": _temp50,
    "uralin-pihlaja": _temp51,
    "valkoinen-cis-heteromies": _temp52,
    "vapaa-venaja": _temp53,
    "vapauden-kaiho": _temp54,
    "varrella-virran": _temp55,
    "vivassa-juodaan-kiljua": _temp56,
    "volga": _temp57,
    "warshawjanka": _temp58,
    "wir-sind-uberall": _temp59,
    "working-class-hero": _temp60,
    "ylos-punakapina-ja-alas-hallitus": _temp61
};

},{"../allendelle/song.html":"UHH0P","../ampukaa-komissaarit/song.html":"aEEN1","../aqua-vera/song.html":"83PVO","../balladi-toveri-viljasesta/song.html":"6UJzr","../bella-ciao/song.html":"EWsQr","../bella-ciao-es/song.html":"dimYt","../esko-kulonen/song.html":"8oV2O","../haistakaa-paska-koko-valtiovalta/song.html":"1Y9pK","../hasta-siempre-comandante/song.html":"8lQD6","../helsinki-shangri-la/song.html":"94GPh","../herrojen-kanssa-pellon-laidassa/song.html":"2vNio","../jos-rakastat/song.html":"ej2Tv","../juo-kaljas-laulellen/song.html":"6flAi","../kalliolle-kukkulalle/song.html":"bV4K8","../kansainvalinen/song.html":"2AL91","../ken-ompi-fuksi/song.html":"896BF","../ken-saro-wiva-on-kuollut/song.html":"jLDId","../kenen-joukoissa-seisot/song.html":"kMImc","../kisallittaret/song.html":"5F9OA","../kolme-pikku-assaa/song.html":"is8PW","../kolme-pikku-miesta/song.html":"aQzya","../koyhaliston-marssi/song.html":"iOW0Z","../laulu-siirtotyolaisesta/song.html":"6kq2U","../lenin-seta-asuu-venajalla/song.html":"gK8zJ","../loldiers-anthem/song.html":"3GTvM","../mina-soitan-harmonikkaa/song.html":"jCVRZ","../mina-suojelen-sinua-kaikelta/song.html":"dzTv3","../nalkaisen-vegaanin-taisteluhuuto/song.html":"6RtCG","../nalkamaan-laulu/song.html":"1atsl","../natalia/song.html":"35Y3Z","../nuoriso-valmis-on-maistelemaan/song.html":"lt64f","../nuorison-marssi/song.html":"eOz9R","../nuoruustango/song.html":"egvAR","../oikeuden-jumalatar/song.html":"hhyV3","../oodi-vihervasemmistolaisuudelle/song.html":"19cBD","../oppimisen-ylistys/song.html":"gp3Vw","../partisaanimarssi/song.html":"72ntA","../partisaanivalssi/song.html":"gotL8","../pikku-kakkosen-posti/song.html":"btwAZ","../punakaartin-marssi/song.html":"aJOcs","../ranskassa-juodaan-viinia/song.html":"dLyB3","../riistajan-lait/song.html":"ifJL3","../rivakka-turkulainen-juomalaulu/song.html":"d5cRi","../se-erityinen-tyowaen-risteily-kappale/song.html":"01jrv","../sikajuna-brysseliin/song.html":"bhJS1","../solidarity-forever/song.html":"gTaTf","../suomi-myyntiin/song.html":"dL13n","../syntymapaivalaulu/song.html":"6daJD","../taistojen-tiella/song.html":"1xhO7","../the-internationale/song.html":"6CTCY","../toveri-mita-odotat/song.html":"2iIlV","../uralin-pihlaja/song.html":"laC8z","../valkoinen-cis-heteromies/song.html":"aIaQi","../vapaa-venaja/song.html":"c93b0","../vapauden-kaiho/song.html":"2N0qU","../varrella-virran/song.html":"fvfui","../vivassa-juodaan-kiljua/song.html":"faxar","../volga/song.html":"aWmso","../warshawjanka/song.html":"8OO9u","../wir-sind-uberall/song.html":"3YD5A","../working-class-hero/song.html":"gRtRp","../ylos-punakapina-ja-alas-hallitus/song.html":"5xu6a"}],"UHH0P":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("fwXEV") + "song.a9a3f5d6.html" + "?" + Date.now();

},{"./helpers/bundle-url":"hPpBg"}],"hPpBg":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
} // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"aEEN1":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("fwXEV") + "song.3c30580d.html" + "?" + Date.now();

},{"./helpers/bundle-url":"hPpBg"}],"83PVO":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("fwXEV") + "song.ed4b1731.html" + "?" + Date.now();

},{"./helpers/bundle-url":"hPpBg"}],"6UJzr":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("fwXEV") + "song.63e1713c.html" + "?" + Date.now();

},{"./helpers/bundle-url":"hPpBg"}],"EWsQr":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("fwXEV") + "song.30f636bf.html" + "?" + Date.now();

},{"./helpers/bundle-url":"hPpBg"}],"dimYt":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("fwXEV") + "song.34329619.html" + "?" + Date.now();

},{"./helpers/bundle-url":"hPpBg"}],"8oV2O":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("fwXEV") + "song.39633625.html" + "?" + Date.now();

},{"./helpers/bundle-url":"hPpBg"}],"1Y9pK":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("fwXEV") + "song.a52fd7c1.html" + "?" + Date.now();

},{"./helpers/bundle-url":"hPpBg"}],"8lQD6":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("fwXEV") + "song.f3c7d04b.html" + "?" + Date.now();

},{"./helpers/bundle-url":"hPpBg"}],"94GPh":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("fwXEV") + "song.ac621d8b.html" + "?" + Date.now();

},{"./helpers/bundle-url":"hPpBg"}],"2vNio":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("fwXEV") + "song.c3cd503f.html" + "?" + Date.now();

},{"./helpers/bundle-url":"hPpBg"}],"ej2Tv":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("fwXEV") + "song.7e78f6de.html" + "?" + Date.now();

},{"./helpers/bundle-url":"hPpBg"}],"6flAi":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("fwXEV") + "song.36087228.html" + "?" + Date.now();

},{"./helpers/bundle-url":"hPpBg"}],"bV4K8":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("fwXEV") + "song.ad3f7d2d.html" + "?" + Date.now();

},{"./helpers/bundle-url":"hPpBg"}],"2AL91":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("fwXEV") + "song.0d93e203.html" + "?" + Date.now();

},{"./helpers/bundle-url":"hPpBg"}],"896BF":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("fwXEV") + "song.317e3570.html" + "?" + Date.now();

},{"./helpers/bundle-url":"hPpBg"}],"jLDId":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("fwXEV") + "song.156b6909.html" + "?" + Date.now();

},{"./helpers/bundle-url":"hPpBg"}],"kMImc":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("fwXEV") + "song.ab5d2868.html" + "?" + Date.now();

},{"./helpers/bundle-url":"hPpBg"}],"5F9OA":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("fwXEV") + "song.592b884f.html" + "?" + Date.now();

},{"./helpers/bundle-url":"hPpBg"}],"is8PW":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("fwXEV") + "song.000b6e74.html" + "?" + Date.now();

},{"./helpers/bundle-url":"hPpBg"}],"aQzya":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("fwXEV") + "song.f2203007.html" + "?" + Date.now();

},{"./helpers/bundle-url":"hPpBg"}],"iOW0Z":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("fwXEV") + "song.65d52afd.html" + "?" + Date.now();

},{"./helpers/bundle-url":"hPpBg"}],"6kq2U":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("fwXEV") + "song.5f56e26f.html" + "?" + Date.now();

},{"./helpers/bundle-url":"hPpBg"}],"gK8zJ":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("fwXEV") + "song.05e845d7.html" + "?" + Date.now();

},{"./helpers/bundle-url":"hPpBg"}],"3GTvM":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("fwXEV") + "song.a69cbcda.html" + "?" + Date.now();

},{"./helpers/bundle-url":"hPpBg"}],"jCVRZ":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("fwXEV") + "song.498f43b6.html" + "?" + Date.now();

},{"./helpers/bundle-url":"hPpBg"}],"dzTv3":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("fwXEV") + "song.30fae092.html" + "?" + Date.now();

},{"./helpers/bundle-url":"hPpBg"}],"6RtCG":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("fwXEV") + "song.8517bd36.html" + "?" + Date.now();

},{"./helpers/bundle-url":"hPpBg"}],"1atsl":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("fwXEV") + "song.7f801f1f.html" + "?" + Date.now();

},{"./helpers/bundle-url":"hPpBg"}],"35Y3Z":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("fwXEV") + "song.77614717.html" + "?" + Date.now();

},{"./helpers/bundle-url":"hPpBg"}],"lt64f":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("fwXEV") + "song.71259b48.html" + "?" + Date.now();

},{"./helpers/bundle-url":"hPpBg"}],"eOz9R":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("fwXEV") + "song.30e4d7b4.html" + "?" + Date.now();

},{"./helpers/bundle-url":"hPpBg"}],"egvAR":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("fwXEV") + "song.2871c6f0.html" + "?" + Date.now();

},{"./helpers/bundle-url":"hPpBg"}],"hhyV3":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("fwXEV") + "song.eccde054.html" + "?" + Date.now();

},{"./helpers/bundle-url":"hPpBg"}],"19cBD":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("fwXEV") + "song.cc24ce11.html" + "?" + Date.now();

},{"./helpers/bundle-url":"hPpBg"}],"gp3Vw":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("fwXEV") + "song.28dc647d.html" + "?" + Date.now();

},{"./helpers/bundle-url":"hPpBg"}],"72ntA":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("fwXEV") + "song.ef6c4a3f.html" + "?" + Date.now();

},{"./helpers/bundle-url":"hPpBg"}],"gotL8":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("fwXEV") + "song.f3d47cf3.html" + "?" + Date.now();

},{"./helpers/bundle-url":"hPpBg"}],"btwAZ":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("fwXEV") + "song.63d8aad6.html" + "?" + Date.now();

},{"./helpers/bundle-url":"hPpBg"}],"aJOcs":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("fwXEV") + "song.9cf46abe.html" + "?" + Date.now();

},{"./helpers/bundle-url":"hPpBg"}],"dLyB3":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("fwXEV") + "song.90254c84.html" + "?" + Date.now();

},{"./helpers/bundle-url":"hPpBg"}],"ifJL3":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("fwXEV") + "song.802ab288.html" + "?" + Date.now();

},{"./helpers/bundle-url":"hPpBg"}],"d5cRi":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("fwXEV") + "song.52cb5897.html" + "?" + Date.now();

},{"./helpers/bundle-url":"hPpBg"}],"01jrv":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("fwXEV") + "song.524ce77f.html" + "?" + Date.now();

},{"./helpers/bundle-url":"hPpBg"}],"bhJS1":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("fwXEV") + "song.6bf51e09.html" + "?" + Date.now();

},{"./helpers/bundle-url":"hPpBg"}],"gTaTf":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("fwXEV") + "song.2f6eed2a.html" + "?" + Date.now();

},{"./helpers/bundle-url":"hPpBg"}],"dL13n":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("fwXEV") + "song.625b9004.html" + "?" + Date.now();

},{"./helpers/bundle-url":"hPpBg"}],"6daJD":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("fwXEV") + "song.ced4e2d9.html" + "?" + Date.now();

},{"./helpers/bundle-url":"hPpBg"}],"1xhO7":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("fwXEV") + "song.f62ea52f.html" + "?" + Date.now();

},{"./helpers/bundle-url":"hPpBg"}],"6CTCY":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("fwXEV") + "song.d73485d7.html" + "?" + Date.now();

},{"./helpers/bundle-url":"hPpBg"}],"2iIlV":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("fwXEV") + "song.56256725.html" + "?" + Date.now();

},{"./helpers/bundle-url":"hPpBg"}],"laC8z":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("fwXEV") + "song.6541451f.html" + "?" + Date.now();

},{"./helpers/bundle-url":"hPpBg"}],"aIaQi":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("fwXEV") + "song.f0b462f5.html" + "?" + Date.now();

},{"./helpers/bundle-url":"hPpBg"}],"c93b0":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("fwXEV") + "song.86f2bee9.html" + "?" + Date.now();

},{"./helpers/bundle-url":"hPpBg"}],"2N0qU":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("fwXEV") + "song.596941da.html" + "?" + Date.now();

},{"./helpers/bundle-url":"hPpBg"}],"fvfui":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("fwXEV") + "song.52dced31.html" + "?" + Date.now();

},{"./helpers/bundle-url":"hPpBg"}],"faxar":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("fwXEV") + "song.df324425.html" + "?" + Date.now();

},{"./helpers/bundle-url":"hPpBg"}],"aWmso":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("fwXEV") + "song.a67cf51e.html" + "?" + Date.now();

},{"./helpers/bundle-url":"hPpBg"}],"8OO9u":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("fwXEV") + "song.75092149.html" + "?" + Date.now();

},{"./helpers/bundle-url":"hPpBg"}],"3YD5A":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("fwXEV") + "song.7af94a39.html" + "?" + Date.now();

},{"./helpers/bundle-url":"hPpBg"}],"gRtRp":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("fwXEV") + "song.c65e0bad.html" + "?" + Date.now();

},{"./helpers/bundle-url":"hPpBg"}],"5xu6a":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("fwXEV") + "song.55aae223.html" + "?" + Date.now();

},{"./helpers/bundle-url":"hPpBg"}],"j7FRh":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"9FiZE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SongMetaController", ()=>(0, _songMetaControllerMjsDefault.default));
var _songMetaControllerMjs = require("../../js/controllers/SongMetaController.mjs");
var _songMetaControllerMjsDefault = parcelHelpers.interopDefault(_songMetaControllerMjs);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh","../../js/controllers/SongMetaController.mjs":"32VdB"}],"32VdB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class SongMetaController {
    static $inject = [
        "$rootScope",
        "$scope",
        "$song"
    ];
    constructor($rootScope, $scope, $song){
        $scope.meta = {
            title: $song.title,
            author: $song.author || null,
            links: $song.links || {}
        };
        for(var title in $scope.meta.links)$scope.meta.links[title] = {
            title: title,
            href: $scope.meta.links[title]
        };
    }
}
exports.default = SongMetaController;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"hnImv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SongListController", ()=>(0, _songListControllerMjsDefault.default));
var _songListControllerMjs = require("../../js/controllers/SongListController.mjs");
var _songListControllerMjsDefault = parcelHelpers.interopDefault(_songListControllerMjs);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh","../../js/controllers/SongListController.mjs":"7sdyB"}],"7sdyB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class SongListController {
    static $inject = [
        "$rootScope",
        "$scope",
        "$stateParams",
        "songsIndex",
        "Songs", 
    ];
    constructor($rootScope, $scope, $stateParams, songsIndex, Songs){
        $scope.Songs = Songs;
        var index = songsIndex;
        $scope.songsCount = 0;
        $scope.runFilter = (search)=>{
            var search = $rootScope.search = (search == null ? $rootScope.search : search) || "";
            if (search) search = search.toLowerCase().trim();
            if (search) search = search.split(/\s+/g);
            $scope.songsCount = 0;
            for (var song of Songs.sorted){
                if (search) {
                    song.$$filtered = true;
                    search.forEach((str)=>{
                        if (song.$search.$string.indexOf(str) != -1) song.$$filtered = false;
                    });
                } else song.$$filtered = false;
                if (!song.$$filtered) $scope.songsCount++;
            }
        };
        setTimeout(()=>{
            $scope.runFilter();
        });
    }
}
exports.default = SongListController;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"28O1H":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SongViewController", ()=>(0, _songViewControllerMjsDefault.default));
var _songViewControllerMjs = require("../../js/controllers/SongViewController.mjs");
var _songViewControllerMjsDefault = parcelHelpers.interopDefault(_songViewControllerMjs);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh","../../js/controllers/SongViewController.mjs":"53i6t"}],"53i6t":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class SongViewController {
    static $inject = [
        "$rootScope",
        "$scope",
        "$sce",
        "$song",
        "$timeout"
    ];
    constructor($rootScope, $scope, $sce, $song, $timeout){
        console.log("songViewController :: Loaded song " + $song.title, $song);
        $scope.$song = $song;
        var songBodyElem = document.getElementById("song-body");
        if (window.innerWidth <= 768) $rootScope.songlist.open = false;
        $scope.loading = true;
        $scope.init = ()=>{
            return $timeout(()=>{
                return $rootScope.font.resetFont();
            }).then(()=>{
                try {
                    var songContentElem = document.getElementById("song-content");
                    if (window.Hammer && songContentElem) {
                        if ($rootScope.hammertime) {
                            $rootScope.hammertime.off("tap");
                            $rootScope.hammertime.off("pinch");
                        }
                        $rootScope.hammertime = new Hammer(songContentElem, {});
                        $rootScope.hammertime.on("tap", function(evt) {
                            $rootScope.$broadcast("toggleFont");
                        });
                        $rootScope.hammertime.on("pinch", function(evt) {});
                        $rootScope.hammertime.get("tap").set({
                            taps: 2
                        });
                    }
                } catch (error) {
                    console.error(error);
                }
                $scope.loading = false;
            });
        };
    }
}
exports.default = SongViewController;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"iDRZX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AjsFontService", ()=>AjsFontService);
class AjsFontService {
    static $inject = [
        "$rootScope",
        "$state",
        "$timeout",
        "$templateCache",
        "Songs"
    ];
    constructor($rootScope, $state, $timeout, Songs){
        var font = $rootScope.font = this;
        this.size = 10;
        this.resetFont = resetFont;
        $rootScope.$on("resize", resetFont);
        $rootScope.$on("resetFont", resetFont);
        $rootScope.$on("toggleFont", toggleFont);
        $rootScope.$on("increaseFont", (evt, n)=>font.size *= n || 1.25);
        $rootScope.$on("decreaseFont", (evt, n)=>font.size *= n || 0.8);
        function calcLargeFont() {
            var pre = document.getElementById("song-body");
            if (!pre) return 12;
            var prs = Math.max(0, (pre.parentNode.parentNode.offsetWidth - 10) / pre.offsetWidth);
            return font.size * prs;
        }
        function calcMiddleFont() {
            var pre = document.getElementById("song-body");
            if (!pre) return 10;
            var prs = Math.max(0, pre.parentNode.offsetWidth / pre.offsetWidth);
            return font.size * prs;
        }
        function toggleFont() {
            return $timeout(function() {
                var middleFont = calcMiddleFont();
                var largeFont = calcLargeFont();
                var font = font.size;
                var middleDiff = Math.abs(font - middleFont);
                var largeDiff = Math.abs(font - largeFont);
                if (largeDiff < .1) // Lähellä large-kokoa -> toggletetaan middleksi
                font = middleFont;
                else if (middleDiff < .1) // Lähellä middle-kokoa -> toggletetaan largeksi
                font = largeFont;
                else if (font < middleFont) font = middleFont;
                else if (font > largeFont) font = largeFont;
                else if (middleDiff > largeDiff) font = middleFont;
                else font = largeFont;
                font.size = font;
            }).catch(function(e) {
                console.warn("Unable to customize font size", e);
            });
        }
        function resetFont() {
            return $timeout(function() {
                font.size = calcMiddleFont();
                console.log("resetFont() :: ", font.size, "em");
            }).catch(function(e) {
                console.warn("Unable to customize font size", e);
            });
        }
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"1o4Cv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AjsSongsService", ()=>AjsSongsService);
var _song = require("../../ts/classes/Song");
class AjsSongsService {
    static $inject = [
        "$http",
        "$injector"
    ];
    constructor($http, $injector){
        var index = this.index = {};
        /****************/ this.setIndex = (index)=>{
            this.index = index;
            for(var key in this.index)if (this.index[key].disable) delete this.index[key];
            else this.index[key] = new (0, _song.Song)(key, this.index[key]);
            this.sorted = Object.keys(this.index).map((key)=>this.index[key]).sort((a, b)=>a.num - b.num);
            return this.index;
        };
        this.init = (url)=>{
            try {
                return this.setIndex($injector.get("songs"));
            } catch (e) {}
            return $http({
                url
            }).then((response)=>{
                return this.setIndex(response.data);
            });
        };
    }
}

},{"../../ts/classes/Song":"ci8IB","@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"ci8IB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Song", ()=>Song);
var _searchString = require("./SearchString");
class Song {
    constructor(key, data){
        this.key = key;
        for(var v in data)this[v] = data[v];
        if (this.$templateUrl == null) this.$templateUrl = `songs/${key}/song.html`;
        this.$search = new (0, _searchString.SearchString)({
            title: data.title || "",
            num: data.num == null ? "" : data.num.toString().trim()
        });
    }
}

},{"./SearchString":"lNJuB","@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"lNJuB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SearchString", ()=>SearchString);
class SearchString {
    constructor(argv){
        this.$string = "";
        this.$contains = {};
        argv && this.extend(argv);
    }
    extend(argv) {
        var str = null;
        if (typeof argv == "object") {
            str = "";
            for(var key in argv)if (argv[key] != null) {
                argv[key] = SearchString.filterString2searchKey(argv[key]);
                this.$contains[key] = (this.$contains[key] || "") + " " + argv[key];
                str += " " + argv[key];
            }
        } else if (typeof argv == "string" && argv.trim().length > 0) str = argv;
        if (typeof str == "string") this.$string = SearchString.filterString2searchKey(this.$string, str);
        else if (argv) console.warn("SearchString.extend :: Invalid argument");
    }
    toString() {
        return this.$string;
    }
}
SearchString.filterString2searchKey = function() {
    var regexp_torm = /[\.,:'\(\)\[\]\{\}\/\\]/g; // Poistettavat (whitespacella korvattavat) merkit
    var regexp_toosm = /\s.{0,3}\s/g; // Liian lyhyet whitespacen ympäröimät merkkijonot ( 0-3 merkkiä) (myös whitespacen, (2-5 merkkiä))
    return function(str) {
        if (arguments.length > 1) return SearchString.filterString2searchKey(Array.prototype.slice.call(arguments));
        if (Array.isArray(str)) str = parseArray2string(str);
        if (typeof str != "string") return console.warn("SearchString.filterString2searchkey :: Invalid argument", typeof str, str), "";
        return (" " + str.toLowerCase().replace(regexp_torm, " ") + " ").replace(regexp_toosm, " ").trim();
    };
    function parseArray2string(arr) {
        return arr.filter(function(v) {
            return !!v;
        }).map(function(v) {
            return Array.isArray(v) ? parseArray2string(v) : v;
        }).join(" ");
    }
}();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}]},["gB2y1","fDsWs"], "fDsWs", "parcelRequiree6cf")

