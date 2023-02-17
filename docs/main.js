"use strict";
(self["webpackChunkvallankumouskirja"] = self["webpackChunkvallankumouskirja"] || []).push([["main"],{

/***/ 1710:
/*!************************!*\
  !*** ./src/ajs.app.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AngularJSAppModule": () => (/* binding */ AngularJSAppModule)
/* harmony export */ });
/* harmony import */ var _ts_services_font_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ts/services/font.service */ 8427);
/* harmony import */ var _ts_services_songs_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ts/services/songs.service */ 4809);
/* harmony import */ var _ts_services_song_list_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ts/services/song-list.service */ 8609);
/* harmony import */ var _ts_services_current_song_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ts/services/current-song.service */ 9237);
/* harmony import */ var _ts_services_resize_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ts/services/resize.service */ 9574);
/* harmony import */ var _ts_services_loading_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ts/services/loading.service */ 7801);
/* harmony import */ var _ts_components_app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ts/components/app.component */ 158);
/* harmony import */ var _ts_components_song_meta_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ts/components/song-meta.component */ 5961);
/* harmony import */ var _ts_components_song_view_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ts/components/song-view.component */ 1889);
/* harmony import */ var _ts_components_song_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ts/components/song-list.component */ 1362);
/* harmony import */ var _angular_upgrade_static__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/upgrade/static */ 5813);
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angular */ 4892);
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_10__);













window.angular = (angular__WEBPACK_IMPORTED_MODULE_10___default());
const AngularJSAppModule = angular__WEBPACK_IMPORTED_MODULE_10___default().module("laulukirja", ["ui.router", 'ui.router.upgrade'])
    .service("currentSong", (0,_angular_upgrade_static__WEBPACK_IMPORTED_MODULE_11__.downgradeInjectable)(_ts_services_current_song_service__WEBPACK_IMPORTED_MODULE_3__.CurrentSongService))
    .service("songList", (0,_angular_upgrade_static__WEBPACK_IMPORTED_MODULE_11__.downgradeInjectable)(_ts_services_song_list_service__WEBPACK_IMPORTED_MODULE_2__.SongListService))
    .service("Songs", (0,_angular_upgrade_static__WEBPACK_IMPORTED_MODULE_11__.downgradeInjectable)(_ts_services_songs_service__WEBPACK_IMPORTED_MODULE_1__.SongsService))
    .service('fontService', (0,_angular_upgrade_static__WEBPACK_IMPORTED_MODULE_11__.downgradeInjectable)(_ts_services_font_service__WEBPACK_IMPORTED_MODULE_0__.FontService))
    .service('resize', (0,_angular_upgrade_static__WEBPACK_IMPORTED_MODULE_11__.downgradeInjectable)(_ts_services_resize_service__WEBPACK_IMPORTED_MODULE_4__.ResizeService))
    .service('loading', (0,_angular_upgrade_static__WEBPACK_IMPORTED_MODULE_11__.downgradeInjectable)(_ts_services_loading_service__WEBPACK_IMPORTED_MODULE_5__.LoadingService))
    .directive('appRoot', (0,_angular_upgrade_static__WEBPACK_IMPORTED_MODULE_11__.downgradeComponent)({ component: _ts_components_app_component__WEBPACK_IMPORTED_MODULE_6__.AppComponent }))
    .directive('songMeta', (0,_angular_upgrade_static__WEBPACK_IMPORTED_MODULE_11__.downgradeComponent)({ component: _ts_components_song_meta_component__WEBPACK_IMPORTED_MODULE_7__.SongMetaComponent }))
    .directive('songView', (0,_angular_upgrade_static__WEBPACK_IMPORTED_MODULE_11__.downgradeComponent)({ component: _ts_components_song_view_component__WEBPACK_IMPORTED_MODULE_8__.SongViewComponent }))
    .directive('songList', (0,_angular_upgrade_static__WEBPACK_IMPORTED_MODULE_11__.downgradeComponent)({ component: _ts_components_song_list_component__WEBPACK_IMPORTED_MODULE_9__.SongListComponent }))
    .directive('placeholderSongView', (0,_angular_upgrade_static__WEBPACK_IMPORTED_MODULE_11__.downgradeComponent)({ component: _ts_components_song_view_component__WEBPACK_IMPORTED_MODULE_8__.PlaceholderSongViewComponent }));


/***/ }),

/***/ 4695:
/*!***************************!*\
  !*** ./src/app.module.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_upgrade_static__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/upgrade/static */ 5813);
/* harmony import */ var _uirouter_angular_hybrid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @uirouter/angular-hybrid */ 7160);
/* harmony import */ var _ts_services_ajs_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ts/services/ajs.service */ 879);
/* harmony import */ var _ts_services_font_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ts/services/font.service */ 8427);
/* harmony import */ var _ts_services_songs_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ts/services/songs.service */ 4809);
/* harmony import */ var _ts_services_song_list_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ts/services/song-list.service */ 8609);
/* harmony import */ var _ts_services_current_song_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ts/services/current-song.service */ 9237);
/* harmony import */ var _ts_services_resize_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ts/services/resize.service */ 9574);
/* harmony import */ var _ts_services_loading_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ts/services/loading.service */ 7801);
/* harmony import */ var _ts_components_app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ts/components/app.component */ 158);
/* harmony import */ var _ts_components_song_view_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ts/components/song-view.component */ 1889);
/* harmony import */ var _ts_components_song_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ts/components/song-list.component */ 1362);
/* harmony import */ var _ajs_app__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ajs.app */ 1710);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 2560);




















/************************************************************/
const states = [{
        name: "index",
        url: "/index",
        componentSelector: 'placeholder-song-view',
        componentName: 'placeholderSongView',
        component: _ts_components_song_view_component__WEBPACK_IMPORTED_MODULE_9__.PlaceholderSongViewComponent,
    }, {
        name: "index.song",
        url: "/:songKey",
        componentSelector: 'song-view',
        componentName: 'songView',
        component: _ts_components_song_view_component__WEBPACK_IMPORTED_MODULE_9__.SongViewComponent,
    }];
const ng2States = states.map(v => {
    let { name, url, component } = v;
    return {
        name, url,
        views: { '@': { component } }
    };
});
const ng1States = [];
_ajs_app__WEBPACK_IMPORTED_MODULE_11__.AngularJSAppModule.run(['$stateRegistry', '$urlService', ($stateRegistry, $urlService) => {
        $urlService.rules.initial({ state: 'index' });
        for (let state of ng1States)
            $stateRegistry.register(state);
    }]);
/****************************************************************/
class AppModule {
    constructor(upgrade) {
        this.upgrade = upgrade;
    }
    ngDoBootstrap() {
        this.upgrade.bootstrap(document.body, [_ajs_app__WEBPACK_IMPORTED_MODULE_11__.AngularJSAppModule.name], { strictDi: true });
    }
    static { this.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵinject"](_angular_upgrade_static__WEBPACK_IMPORTED_MODULE_13__.UpgradeModule)); }; }
    static { this.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({ type: AppModule }); }
    static { this.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({ providers: [
            _ts_services_ajs_service__WEBPACK_IMPORTED_MODULE_1__.ajsTimeoutServiceProvider,
            _ts_services_ajs_service__WEBPACK_IMPORTED_MODULE_1__.ajsInjectorServiceProvider,
            _ts_services_ajs_service__WEBPACK_IMPORTED_MODULE_1__.ajsSceServiceProvider,
            _ts_services_ajs_service__WEBPACK_IMPORTED_MODULE_1__.ajsTemplateRequestServiceProvider,
            _ts_services_ajs_service__WEBPACK_IMPORTED_MODULE_1__.ajsStateServiceProvider,
            _ts_services_loading_service__WEBPACK_IMPORTED_MODULE_7__.LoadingService,
            _ts_services_songs_service__WEBPACK_IMPORTED_MODULE_3__.SongsService,
            _ts_services_song_list_service__WEBPACK_IMPORTED_MODULE_4__.SongListService,
            _ts_services_current_song_service__WEBPACK_IMPORTED_MODULE_5__.CurrentSongService,
            _ts_services_font_service__WEBPACK_IMPORTED_MODULE_2__.FontService,
            _ts_services_resize_service__WEBPACK_IMPORTED_MODULE_6__.ResizeService,
        ], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__.BrowserModule,
            _angular_upgrade_static__WEBPACK_IMPORTED_MODULE_13__.UpgradeModule,
            _uirouter_angular_hybrid__WEBPACK_IMPORTED_MODULE_0__.UIRouterUpgradeModule.forRoot({ states: ng2States }),
            _angular_common__WEBPACK_IMPORTED_MODULE_15__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormsModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_15__.CommonModule] }); }
}
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_ts_components_app_component__WEBPACK_IMPORTED_MODULE_8__.AppComponent,
        _ts_components_song_list_component__WEBPACK_IMPORTED_MODULE_10__.SongListComponent,
        _ts_components_song_view_component__WEBPACK_IMPORTED_MODULE_9__.SongViewComponent,
        _ts_components_song_view_component__WEBPACK_IMPORTED_MODULE_9__.PlaceholderSongViewComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__.BrowserModule,
        _angular_upgrade_static__WEBPACK_IMPORTED_MODULE_13__.UpgradeModule, _uirouter_angular_hybrid__WEBPACK_IMPORTED_MODULE_0__.UIRouterUpgradeModule, _angular_common__WEBPACK_IMPORTED_MODULE_15__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormsModule], exports: [_angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormsModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_15__.CommonModule,
        _ts_components_app_component__WEBPACK_IMPORTED_MODULE_8__.AppComponent,
        _ts_components_song_list_component__WEBPACK_IMPORTED_MODULE_10__.SongListComponent,
        _ts_components_song_view_component__WEBPACK_IMPORTED_MODULE_9__.SongViewComponent,
        _ts_components_song_view_component__WEBPACK_IMPORTED_MODULE_9__.PlaceholderSongViewComponent] }); })();


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _node_modules_hammerjs_hammer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/hammerjs/hammer.js */ 5977);
/* harmony import */ var _node_modules_hammerjs_hammer_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_hammerjs_hammer_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _uirouter_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @uirouter/core */ 7103);
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.module */ 4695);
/* harmony import */ var _ajs_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ajs.app */ 1710);






_ajs_app__WEBPACK_IMPORTED_MODULE_3__.AngularJSAppModule.config(['$urlServiceProvider', $urlService => $urlService.deferIntercept()]);
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.platformBrowser().bootstrapModule(_app_module__WEBPACK_IMPORTED_MODULE_2__.AppModule).then(platformRef => {
    const urlService = platformRef.injector.get(_uirouter_core__WEBPACK_IMPORTED_MODULE_1__.UIRouter).urlService;
    function startUIRouter() {
        urlService.listen();
        urlService.sync();
    }
    platformRef.injector.get(_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgZone).run(startUIRouter);
});


/***/ }),

/***/ 8388:
/*!****************************************!*\
  !*** ./src/ts/classes/SearchString.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchString": () => (/* binding */ SearchString)
/* harmony export */ });
const regexp_torm = /[\.,:'\(\)\[\]\{\}\/\\]/g; // Poistettavat (whitespacella korvattavat) merkit
const regexp_toosm = /\s.{0,3}\s/g; // Liian lyhyet whitespacen ympäröimät merkkijonot ( 0-3 merkkiä) (myös whitespacen, (2-5 merkkiä))
function parseArray2string(arr) {
    return arr.filter(function (v) {
        return `${v}`.trim().length > 0;
    }).map(function (v) {
        return Array.isArray(v) ? parseArray2string(v) : v;
    }).join(" ");
}
class SearchString {
    constructor(argv = {}) {
        //this.$string   = "";
        //this.$contains = {}
        this.$string = "";
        this.$contains = {};
        if (argv)
            this.extend(argv);
    }
    extend(argv) {
        var str = null;
        if (typeof argv == "object") {
            str = "";
            for (var key in argv) {
                if (argv[key] != null) {
                    argv[key] = SearchString.filterString2searchKey(argv[key]);
                    this.$contains[key] = (this.$contains[key] || "") + " " + argv[key];
                    str += " " + argv[key];
                }
            }
        }
        else if (typeof argv == "string" && argv.trim().length > 0) {
            str = argv;
        }
        if (typeof str == "string") {
            this.$string = SearchString.filterString2searchKey([this.$string, str]);
        }
        else if (argv) {
            console.warn("SearchString.extend :: Invalid argument");
        }
    }
    toString() {
        return this.$string;
    }
    static filterString2searchKey(str) {
        //if (arguments.length > 1) return SearchString.filterString2searchKey([ str, argv1, argv2 ]);
        if (Array.isArray(str))
            str = parseArray2string(str);
        if (typeof str != "string")
            return console.warn("SearchString.filterString2searchKey :: Invalid argument", typeof str, str), "";
        return (" " + str.toLowerCase().replace(regexp_torm, " ") + " ").replace(regexp_toosm, " ").trim();
    }
}


/***/ }),

/***/ 9157:
/*!********************************!*\
  !*** ./src/ts/classes/Song.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Song": () => (/* binding */ Song)
/* harmony export */ });
/* harmony import */ var _SearchString__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SearchString */ 8388);

class Song {
    constructor(key, data) {
        this.key = key;
        for (let v in data)
            this[v] = data[v];
        if (this.$templateUrl == null) {
            this.$templateUrl = `songs/${key}/song.html`;
        }
        this.$search = new _SearchString__WEBPACK_IMPORTED_MODULE_0__.SearchString({
            title: data.title || "",
            num: data.num == null ? "" : data.num.toString().trim()
        });
    }
}


/***/ }),

/***/ 7829:
/*!*********************************************!*\
  !*** ./src/ts/classes/scope-like-events.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScopeLikeEvents": () => (/* binding */ ScopeLikeEvents)
/* harmony export */ });
class ScopeLikeEvents {
    constructor($timeout) {
        this.callbacks = {};
        if ($timeout)
            this.$timeout = $timeout;
    }
    $on(key, callback) {
        if (!this.callbacks[key])
            this.callbacks[key] = [];
        this.callbacks[key].push(callback);
    }
    $emit(key) {
        if (this.callbacks[key]) {
            for (let callback of this.callbacks[key]) {
                try {
                    callback();
                }
                catch (error) {
                }
            }
            if (this.$timeout)
                this.$timeout();
        }
    }
}


/***/ }),

/***/ 158:
/*!********************************************!*\
  !*** ./src/ts/components/app.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_song_list_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/song-list.service */ 8609);
/* harmony import */ var _services_loading_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/loading.service */ 7801);
/* harmony import */ var _services_font_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/font.service */ 8427);
/* harmony import */ var _uirouter_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @uirouter/angular */ 4966);
/* harmony import */ var _song_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./song-list.component */ 1362);






class AppComponent {
    constructor(songList, loading, font) {
    }
    static { this.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_song_list_service__WEBPACK_IMPORTED_MODULE_0__.SongListService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_loading_service__WEBPACK_IMPORTED_MODULE_1__.LoadingService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_font_service__WEBPACK_IMPORTED_MODULE_2__.FontService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 20, vars: 0, consts: [["id", "song-content", "ng-class", "{ 'col-sm-6 col-md-8 col-lg-9 col-sm-offset-6 col-md-offset-4 col-lg-offset-3' : songList.isOpen() }", 1, "col-xs-12", 2, "user-select", "text"], ["id", "content", "ng-class", "{ 'loading': loading.is(), 'col-lg-8': songList.isOpen() }", 1, "loading", "col-xs-12", "col-sm-12", "col-md-12", "col-lg-pull-0"], ["id", "songlist-wrapper", "ng-if", "songList.isOpen()", 1, "sidebar", "col-xs-12", "col-sm-6", "col-md-4", "col-lg-3"], [1, "navbar", "navbar-default"], [1, "container-fluid"], [1, "navbar-header"], [1, "nav", "navbar-nav", "pull-right"], [1, "font-ctrl"], ["ng-click", "font.decreaseFont()", "href", "", 1, "font-decr-btn"], ["ng-click", "font.increaseFont()", "href", "", 1, "font-incr-btn"], ["ng-click", "songList.toggleOpen()", "href", "", 1, "navbar-brand"], [1, "glyphicon", "glyphicon-menu-hamburger"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "main")(1, "section", 0)(2, "article", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "ui-view");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "section", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "song-list");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "header", 3)(7, "div", 4)(8, "div", 5)(9, "ul", 6)(10, "li", 7)(11, "a", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "A-");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "li", 7)(14, "a", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "A+");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "a", 10)(17, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](18, "b", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, " Laululista ");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        } }, dependencies: [_uirouter_angular__WEBPACK_IMPORTED_MODULE_5__.UIView, _song_list_component__WEBPACK_IMPORTED_MODULE_3__.SongListComponent], encapsulation: 2 }); }
}


/***/ }),

/***/ 1362:
/*!**************************************************!*\
  !*** ./src/ts/components/song-list.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SongListComponent": () => (/* binding */ SongListComponent)
/* harmony export */ });
/* harmony import */ var _services_ajs_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/ajs.service */ 879);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_current_song_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/current-song.service */ 9237);
/* harmony import */ var _services_songs_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/songs.service */ 4809);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);






function SongListComponent_a_2_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SongListComponent_a_2_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r3.runFilter("")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function SongListComponent_li_4_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 7)(1, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SongListComponent_li_4_Template_a_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7); const song_r5 = restoredCtx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r6.currentSong.select(song_r5.key)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "h4", 9)(3, "b", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const song_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](song_r5.num);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" \u2013 ", song_r5.title, "");
} }
function SongListComponent_li_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 11)(1, "b")(2, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Ei lauluja :<");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
} }
class SongListComponent {
    constructor($state, currentSong, Songs) {
        this.currentSong = currentSong;
        this.search = "";
        //@Input('search') search: string = "";
        this.searchResult = null;
        this.$state = $state;
        let $scope = this;
        $scope.$state = $state;
        $scope.Songs = Songs;
        $scope.getSongs = () => {
            if (this.searchResult != null)
                return this.searchResult;
            return Songs.sorted;
        };
        $scope.runFilter = (searchStr = $scope.search) => {
            $scope.search = searchStr = searchStr || '';
            this.searchResult = null;
            let searchArr = searchStr.toLowerCase().trim().split(/\s+/g);
            if (searchArr.length) {
                this.searchResult = Songs.sorted.filter(song => {
                    for (let word of searchArr) {
                        if (song.$search.$string.indexOf(word) != -1)
                            return true;
                    }
                    return false;
                });
            }
        };
    }
    static { this.$inject = ["$scope", "$state", "Songs"]; }
    static { this.ɵfac = function SongListComponent_Factory(t) { return new (t || SongListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_ajs_service__WEBPACK_IMPORTED_MODULE_0__.AjsState), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_current_song_service__WEBPACK_IMPORTED_MODULE_1__.CurrentSongService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_songs_service__WEBPACK_IMPORTED_MODULE_2__.SongsService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: SongListComponent, selectors: [["song-list"]], decls: 6, vars: 4, consts: [["id", "search"], ["type", "text", "placeholder", "Hae...", 1, "form-control", 3, "ngModel", "ngModelChange"], ["style", "cursor:pointer", "class", "clear-btn glyphicon glyphicon-remove", 3, "click", 4, "ngIf"], ["id", "songlist", 1, "songs-list-group", "list-group"], ["class", "list-group-item", 4, "ngFor", "ngForOf"], ["class", "list-group-item no-results", 4, "ngIf"], [1, "clear-btn", "glyphicon", "glyphicon-remove", 2, "cursor", "pointer", 3, "click"], [1, "list-group-item"], [2, "cursor", "pointer", 3, "click"], [1, "title"], [1, "number"], [1, "list-group-item", "no-results"]], template: function SongListComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "input", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function SongListComponent_Template_input_ngModelChange_1_listener($event) { return ctx.search = $event; })("ngModelChange", function SongListComponent_Template_input_ngModelChange_1_listener() { return ctx.runFilter(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, SongListComponent_a_2_Template, 1, 0, "a", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "ul", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, SongListComponent_li_4_Template, 6, 2, "li", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, SongListComponent_li_5_Template, 4, 0, "li", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.search);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.search.trim().length);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.getSongs());
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.searchResult != null && ctx.searchResult.length == 0);
        } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel], encapsulation: 2 }); }
}


/***/ }),

/***/ 5961:
/*!**************************************************!*\
  !*** ./src/ts/components/song-meta.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SongMetaComponent": () => (/* binding */ SongMetaComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_current_song_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/current-song.service */ 9237);


function SongMetaComponent_li_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li")(1, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const link_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", link_r1.href, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", link_r1.title, "");
} }
class SongMetaComponent {
    constructor(currentSong) {
        currentSong.get().then($song => {
            this.meta = {
                title: $song.title,
                author: $song.author || null,
                links: $song.links || {},
            };
            for (let title in this.meta.links) {
                this.meta.links[title] = {
                    title: title,
                    href: this.meta.links[title]
                };
            }
        });
    }
    static { this.ɵfac = function SongMetaComponent_Factory(t) { return new (t || SongMetaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_current_song_service__WEBPACK_IMPORTED_MODULE_0__.CurrentSongService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SongMetaComponent, selectors: [["song-meta"]], decls: 9, vars: 4, consts: [["id", "songmeta"], [1, "title"], [1, "author"], [1, "description"], [1, "links"], [4, "ngFor", "ngForOf"], ["target", "_blank", "href", "#", 3, "href"], [1, "glyphicon", "glyphicon-link"]], template: function SongMetaComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "h2", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h3", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ul", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, SongMetaComponent_li_8_Template, 4, 2, "li", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.meta.title);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.meta.author);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.meta.description);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.meta.links);
        } }, encapsulation: 2 }); }
}


/***/ }),

/***/ 1889:
/*!**************************************************!*\
  !*** ./src/ts/components/song-view.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlaceholderSongViewComponent": () => (/* binding */ PlaceholderSongViewComponent),
/* harmony export */   "SongViewComponent": () => (/* binding */ SongViewComponent)
/* harmony export */ });
/* harmony import */ var _services_ajs_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/ajs.service */ 879);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_current_song_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/current-song.service */ 9237);
/* harmony import */ var _services_font_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/font.service */ 8427);
/* harmony import */ var _services_song_list_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/song-list.service */ 8609);
/* harmony import */ var _services_loading_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/loading.service */ 7801);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);







function SongViewComponent_pre_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "pre", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r0.error);
} }
const _c0 = function (a0) { return { "font-size.em": a0 }; };
function SongViewComponent_pre_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "pre", 3);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("innerHtml", ctx_r1.$song.lyrics, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeHtml"])("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](2, _c0, ctx_r1.fontService.size / 10));
} }
let hammertime;
class SongViewComponent {
    constructor($timeout, currentSong, fontService, songList, loading) {
        this.fontService = fontService;
        let $scope = this;
        console.log("songViewController :: Initiated");
        loading.set(true);
        currentSong.get().then($song => {
            console.log("songViewController :: Loaded song " + $song.title, $song);
            $scope.$song = $song;
            var songBodyElem = document.getElementById("song-body");
            if (window.innerWidth <= 768)
                songList.close();
            return $scope.init();
        }).catch(error => {
            if (!this.$song) {
                this.error = new Error("Laulua ei onnistuttu lataamaan!");
            }
            else {
                this.error = error;
            }
            console.error(error);
        }).then(() => {
            loading.set(false);
        });
        $scope.init = () => {
            return $timeout(() => {
                let hammertime = iniHammer();
                if (hammertime)
                    hammertime.on('tap', function (evt) {
                        //$rootScope.$broadcast('toggleFont');
                        fontService.events.$emit('toggleFont');
                    });
                return fontService.resetFont();
            });
        };
    }
    static { this.ɵfac = function SongViewComponent_Factory(t) { return new (t || SongViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_ajs_service__WEBPACK_IMPORTED_MODULE_0__.AjsTimeout), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_current_song_service__WEBPACK_IMPORTED_MODULE_1__.CurrentSongService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_font_service__WEBPACK_IMPORTED_MODULE_2__.FontService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_song_list_service__WEBPACK_IMPORTED_MODULE_3__.SongListService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_loading_service__WEBPACK_IMPORTED_MODULE_4__.LoadingService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: SongViewComponent, selectors: [["song-view"]], decls: 2, vars: 2, consts: [["class", "alert alert-danger", "style", "display:inline-block;margin-top:1em;", 4, "ngIf"], ["id", "song-body", 3, "innerHtml", "ngStyle", 4, "ngIf"], [1, "alert", "alert-danger", 2, "display", "inline-block", "margin-top", "1em"], ["id", "song-body", 3, "innerHtml", "ngStyle"]], template: function SongViewComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, SongViewComponent_pre_0_Template, 2, 1, "pre", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, SongViewComponent_pre_1_Template, 1, 4, "pre", 1);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.error);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.$song);
        } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgStyle], encapsulation: 2 }); }
}
function iniHammer() {
    let hammertime;
    try {
        var songContentElem = document.getElementById("song-content");
        if (window.Hammer && songContentElem) {
            hammertime = window.Hammer.instance;
            if (hammertime) {
                hammertime.off('tap');
                hammertime.off('pinch');
            }
            hammertime = Hammer.instance = new Hammer(songContentElem, {});
            //hammertime.on( 'pinch', function( evt ) {});
            hammertime.get('tap').set({ taps: 2 });
            return hammertime;
        }
    }
    catch (error) {
        console.error(error);
    }
    return hammertime;
}
class PlaceholderSongViewComponent {
    constructor($timeout, loading) {
        $timeout(() => { loading.set(0); });
    }
    static { this.ɵfac = function PlaceholderSongViewComponent_Factory(t) { return new (t || PlaceholderSongViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_ajs_service__WEBPACK_IMPORTED_MODULE_0__.AjsTimeout), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_loading_service__WEBPACK_IMPORTED_MODULE_4__.LoadingService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: PlaceholderSongViewComponent, selectors: [["placeholder-song-view"]], decls: 3, vars: 0, consts: [[2, "text-align", "left", "padding-left", "1em"], [1, "glyphicon", "glyphicon-share-alt", 2, "transform", "rotate(230deg)"]], template: function PlaceholderSongViewComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "h3", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "b", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " Valitse laulu laululistasta");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        } }, encapsulation: 2 }); }
}


/***/ }),

/***/ 879:
/*!****************************************!*\
  !*** ./src/ts/services/ajs.service.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AjsInjector": () => (/* binding */ AjsInjector),
/* harmony export */   "AjsSce": () => (/* binding */ AjsSce),
/* harmony export */   "AjsState": () => (/* binding */ AjsState),
/* harmony export */   "AjsTemplateRequest": () => (/* binding */ AjsTemplateRequest),
/* harmony export */   "AjsTimeout": () => (/* binding */ AjsTimeout),
/* harmony export */   "ajsInjectorServiceFactory": () => (/* binding */ ajsInjectorServiceFactory),
/* harmony export */   "ajsInjectorServiceProvider": () => (/* binding */ ajsInjectorServiceProvider),
/* harmony export */   "ajsSceServiceFactory": () => (/* binding */ ajsSceServiceFactory),
/* harmony export */   "ajsSceServiceProvider": () => (/* binding */ ajsSceServiceProvider),
/* harmony export */   "ajsStateServiceFactory": () => (/* binding */ ajsStateServiceFactory),
/* harmony export */   "ajsStateServiceProvider": () => (/* binding */ ajsStateServiceProvider),
/* harmony export */   "ajsTemplateRequestServiceFactory": () => (/* binding */ ajsTemplateRequestServiceFactory),
/* harmony export */   "ajsTemplateRequestServiceProvider": () => (/* binding */ ajsTemplateRequestServiceProvider),
/* harmony export */   "ajsTimeoutServiceFactory": () => (/* binding */ ajsTimeoutServiceFactory),
/* harmony export */   "ajsTimeoutServiceProvider": () => (/* binding */ ajsTimeoutServiceProvider)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

const AjsState = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken("AjsState");
function ajsStateServiceFactory(i) {
    return i.get('$state');
}
const ajsStateServiceProvider = {
    provide: AjsState,
    useFactory: ajsStateServiceFactory,
    deps: ['$injector']
};
const AjsTimeout = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken("AjsTimeout");
function ajsTimeoutServiceFactory(i) {
    return i.get('$timeout');
}
const ajsTimeoutServiceProvider = {
    provide: AjsTimeout,
    useFactory: ajsTimeoutServiceFactory,
    deps: ['$injector']
};
const AjsInjector = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken("AjsInjector");
function ajsInjectorServiceFactory(i) {
    return i.get('$injector');
}
const ajsInjectorServiceProvider = {
    provide: AjsInjector,
    useFactory: ajsInjectorServiceFactory,
    deps: ['$injector']
};
const AjsSce = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken("AjsSce");
function ajsSceServiceFactory(i) {
    return i.get('$sce');
}
const ajsSceServiceProvider = {
    provide: AjsSce,
    useFactory: ajsSceServiceFactory,
    deps: ['$injector']
};
const AjsTemplateRequest = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken("AjsTemplateRequest");
function ajsTemplateRequestServiceFactory(i) {
    return i.get('$templateRequest');
}
const ajsTemplateRequestServiceProvider = {
    provide: AjsTemplateRequest,
    useFactory: ajsTemplateRequestServiceFactory,
    deps: ['$injector']
};


/***/ }),

/***/ 9237:
/*!*************************************************!*\
  !*** ./src/ts/services/current-song.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CurrentSongService": () => (/* binding */ CurrentSongService)
/* harmony export */ });
/* harmony import */ var _home_leonarven_projektit_vallankumouskirja_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 3918);
/* harmony import */ var _ajs_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ajs.service */ 879);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _songs_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./songs.service */ 4809);




class CurrentSongService {
  constructor($injector, $templateRequest, $sce, $state, Songs) {
    this.$injector = $injector;
    this.$state = $state;
    this.$templateRequest = $templateRequest;
    this.$sce = $sce;
    this.Songs = Songs;
  }
  static {
    this.$inject = ["$sce", "Songs"];
  }
  select(songKey) {
    this.$state.go('index.song', {
      songKey
    });
  }
  get() {
    var _this = this;
    return (0,_home_leonarven_projektit_vallankumouskirja_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return Promise.resolve().then(() => {
        let key = _this.$injector.get("$stateParams").songKey;
        if (!key) throw "Missing song_key!";
        let song = _this.Songs.index[key];
        if (!song) throw "Could not found song '" + key + "'";
        if (song.lyrics) return song;
        return _this.$templateRequest(song.$templateUrl).then(lyrics => {
          song.lyrics = lyrics;
          song.$lyrics = _this.$sce.trustAsHtml(lyrics);
          return song;
        });
      });
    })();
  }
  static {
    this.ɵfac = function CurrentSongService_Factory(t) {
      return new (t || CurrentSongService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_ajs_service__WEBPACK_IMPORTED_MODULE_1__.AjsInjector), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_ajs_service__WEBPACK_IMPORTED_MODULE_1__.AjsTemplateRequest), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_ajs_service__WEBPACK_IMPORTED_MODULE_1__.AjsSce), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_ajs_service__WEBPACK_IMPORTED_MODULE_1__.AjsState), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_songs_service__WEBPACK_IMPORTED_MODULE_2__.SongsService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
      token: CurrentSongService,
      factory: CurrentSongService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 8427:
/*!*****************************************!*\
  !*** ./src/ts/services/font.service.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FontService": () => (/* binding */ FontService)
/* harmony export */ });
/* harmony import */ var _ajs_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ajs.service */ 879);
/* harmony import */ var _classes_scope_like_events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../classes/scope-like-events */ 7829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _resize_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resize.service */ 9574);




class FontService {
    constructor($timeout, resize) {
        this.$timeout = $timeout;
        this.events = new _classes_scope_like_events__WEBPACK_IMPORTED_MODULE_1__.ScopeLikeEvents();
        const self = this;
        this.size = 10;
        this.resetFont = resetFont;
        resize.$on("resize", resetFont);
        this.events.$on("resetFont", resetFont);
        this.events.$on("toggleFont", toggleFont);
        this.events.$on("increaseFont", (evt, n) => (self.size *= (n || 1.25)));
        this.events.$on("decreaseFont", (evt, n) => (self.size *= (n || 0.8)));
        function calcLargeFont() {
            let pre = document.getElementById("song-body");
            let parent = document.getElementById("content");
            if (!parent || !parent.offsetWidth || !pre || !pre.offsetWidth)
                return 12;
            var prs = Math.max(0, (parent.offsetWidth - 10) / pre.offsetWidth);
            return self.size * prs;
        }
        function calcMiddleFont() {
            let pre = document.getElementById("song-body");
            let parent = document.getElementById("content");
            if (!parent || !parent.offsetWidth || !pre || !pre.offsetWidth)
                return 10;
            var prs = Math.max(0, parent.offsetWidth / pre.offsetWidth);
            return self.size * prs;
        }
        function toggleFont() {
            return $timeout(function () {
                let middleFont = calcMiddleFont();
                let largeFont = calcLargeFont();
                let font = self.size;
                let middleDiff = Math.abs(font - middleFont);
                let largeDiff = Math.abs(font - largeFont);
                if (largeDiff < .1) {
                    // Lähellä large-kokoa -> toggletetaan middleksi
                    font = middleFont;
                }
                else if (middleDiff < .1) {
                    // Lähellä middle-kokoa -> toggletetaan largeksi
                    font = largeFont;
                }
                else if (font < middleFont) {
                    font = middleFont;
                }
                else if (font > largeFont) {
                    font = largeFont;
                }
                else if (middleDiff > largeDiff) {
                    font = middleFont;
                }
                else {
                    font = largeFont;
                }
            }).catch((e) => {
                console.warn("Unable to customize font size", e);
            });
        }
        function resetFont() {
            return $timeout(function () {
                self.size = calcMiddleFont();
                console.log("resetFont() :: ", self.size, "em");
            }).catch((e) => {
                console.warn("Unable to customize font size", e);
            });
        }
    }
    static { this.$inject = ["$timeout", "resize"]; }
    getFont() {
        return this.size;
    }
    ;
    setFont(size) {
        return this.size = size;
    }
    decreaseFont(x = 0.8) {
        return this.setFont(this.size * x);
    }
    increaseFont(x = 1.25) {
        return this.setFont(this.size * x);
    }
    static { this.ɵfac = function FontService_Factory(t) { return new (t || FontService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_ajs_service__WEBPACK_IMPORTED_MODULE_0__.AjsTimeout), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_resize_service__WEBPACK_IMPORTED_MODULE_2__.ResizeService)); }; }
    static { this.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: FontService, factory: FontService.ɵfac, providedIn: 'root' }); }
}


/***/ }),

/***/ 7801:
/*!********************************************!*\
  !*** ./src/ts/services/loading.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoadingService": () => (/* binding */ LoadingService)
/* harmony export */ });
class LoadingService {
    constructor() {
        this.loading = true;
    }
    is() {
        return this.loading;
    }
    set(_loading) {
        let loading = !!_loading;
        console.count("loading.set(" + this.loading + "->" + loading + ")");
        if (this.loading != loading) {
            this.loading = loading;
        }
        return this.loading;
    }
}


/***/ }),

/***/ 9574:
/*!*******************************************!*\
  !*** ./src/ts/services/resize.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResizeService": () => (/* binding */ ResizeService)
/* harmony export */ });
/* harmony import */ var _ajs_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ajs.service */ 879);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


class ResizeService {
    constructor($timeout) {
        this.callbacks = {};
        this.$timeout = $timeout;
        window.addEventListener("resize", () => {
            this.$emit("resize");
        });
    }
    static { this.$inject = ["$timeout"]; }
    $on(key, callback) {
        if (!this.callbacks[key])
            this.callbacks[key] = [];
        this.callbacks[key].push(callback);
    }
    $emit(key) {
        if (this.callbacks[key]) {
            for (let callback of this.callbacks[key]) {
                try {
                    callback();
                }
                catch (error) {
                }
            }
            this.$timeout();
        }
    }
    static { this.ɵfac = function ResizeService_Factory(t) { return new (t || ResizeService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ajs_service__WEBPACK_IMPORTED_MODULE_0__.AjsTimeout)); }; }
    static { this.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ResizeService, factory: ResizeService.ɵfac, providedIn: 'root' }); }
}


/***/ }),

/***/ 8609:
/*!**********************************************!*\
  !*** ./src/ts/services/song-list.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SongListService": () => (/* binding */ SongListService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _resize_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resize.service */ 9574);


class SongListService {
    constructor(resize) {
        this.open = true;
        this.resize = resize;
    }
    static { this.$inject = ["resize"]; }
    toggleOpen() {
        return this.isOpen(!this.open);
    }
    isOpen(isOpen = null) {
        if (isOpen !== null) {
            this.setOpen(isOpen);
        }
        return this.open;
    }
    setOpen(isOpen) {
        if (this.open && isOpen)
            return;
        if (!this.open && !isOpen)
            return;
        this.open = !!isOpen;
        this.resize.$emit("resize");
    }
    close() {
        return this.isOpen(false);
    }
    static { this.ɵfac = function SongListService_Factory(t) { return new (t || SongListService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_resize_service__WEBPACK_IMPORTED_MODULE_0__.ResizeService)); }; }
    static { this.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: SongListService, factory: SongListService.ɵfac, providedIn: 'root' }); }
}


/***/ }),

/***/ 4809:
/*!******************************************!*\
  !*** ./src/ts/services/songs.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SongsService": () => (/* binding */ SongsService)
/* harmony export */ });
/* harmony import */ var _ts_classes_Song__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../ts/classes/Song */ 9157);
/* harmony import */ var _songs_index_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../songs/index.json */ 2910);


class SongsService {
    constructor() {
        this.sorted = [];
        this.$http = null; //$http;
        this.index = {};
        try {
            this.setIndex(_songs_index_json__WEBPACK_IMPORTED_MODULE_1__);
        }
        catch (e) { }
    }
    static { this.$inject = []; } // "$http" ];
    setIndex(index) {
        console.debug("SongsService.setIndex()", index);
        this.index = {};
        this.sorted = [];
        for (var key in index) {
            if (!index[key].disable) {
                this.index[key] = new _ts_classes_Song__WEBPACK_IMPORTED_MODULE_0__.Song(key, index[key]);
                this.sorted.push(this.index[key]);
            }
        }
        this.sorted.sort((a, b) => ((a.num || 0) - (b.num || 0)));
        return this.index;
    }
    init(url) {
        return this.$http({ url }).then((response) => {
            return this.setIndex(response.data);
        });
    }
}


/***/ }),

/***/ 2910:
/*!******************************!*\
  !*** ./src/songs/index.json ***!
  \******************************/
/***/ ((module) => {

module.exports = JSON.parse('{"kenen-joukoissa-seisot":{"title":"Kenen joukoissa seisot","author":null,"links":{},"num":4},"oppimisen-ylistys":{"title":"Oppimisen ylistys","author":"Bertol Brechtin runo vuodelta 1932","links":{"Elävä arkisto: Agit-Prop, 1975":"http://yle.fi/aihe/artikkeli/2007/04/30/agit-prop-oppimisen-ylistys"},"num":7},"riistajan-lait":{"title":"Riistäjän lait","author":null,"links":{},"num":8},"kalliolle-kukkulalle":{"title":"Kalliolle kukkulalle","author":null,"links":{},"num":40},"balladi-toveri-viljasesta":{"title":"Balladi toveri Viljasesta","author":null,"links":{},"num":12},"vapaa-venaja":{"title":"Vapaa Venäjä","author":null,"links":{},"num":49},"kolme-pikku-assaa":{"title":"Kolme pikku ässää","author":null,"links":{},"num":24},"suomi-myyntiin":{"title":"Suomi myyntiin","author":null,"links":{},"num":25},"kansainvalinen":{"title":"Kansainvälinen","author":null,"links":{},"num":1},"the-internationale":{"title":"The Internationale","author":null,"links":{},"num":2},"punakaartin-marssi":{"title":"Punakaartin marssi","author":null,"links":{},"num":13},"nuorison-marssi":{"title":"Nuorison marssi","author":null,"links":{},"num":3},"kisallittaret":{"title":"Kisällittäret","author":null,"links":{},"num":5},"allendelle":{"title":"Allendelle","author":null,"links":{},"num":11},"bella-ciao":{"title":"Bella Ciao","author":"By anti-fascist resistance in Italy 1943-1945!","links":{"Youtube":"https://www.youtube.com/watch?v=VS8GIqjPVHM"},"num":14},"oikeuden-jumalatar":{"title":"Oikeuden jumalatar","author":null,"links":{},"num":30},"partisaanimarssi":{"title":"Partisaanin marssi","author":null,"links":{},"num":15},"natalia":{"title":"Natalia ","author":null,"links":{},"num":6},"nuoruustango":{"title":"Nuoruustango","author":null,"links":{},"num":17,"disabled":true},"hasta-siempre-comandante":{"title":"Hasta siempre, Comandante","author":null,"links":{},"num":16},"jos-rakastat":{"title":"Jos rakastat","author":null,"links":{},"num":42},"uralin-pihlaja":{"title":"Uralin pihlaja","author":null,"links":{},"num":43},"varrella-virran":{"title":"Varrella virran","author":null,"links":{},"num":44},"mina-soitan-harmonikkaa":{"title":"Minä soitan harmonikkaa","author":null,"links":{},"num":null,"disabled":true},"mina-suojelen-sinua-kaikelta":{"title":"Minä suojelen sinua kaikelta","author":null,"links":{},"num":47},"lenin-seta-asuu-venajalla":{"title":"Lenin-setä asuu Venäjällä","author":null,"links":{},"num":21,"disabled":true},"sikajuna-brysseliin":{"title":"Sikajuna Brysseliin","author":null,"links":{},"num":23},"warshawjanka":{"title":"Warshawjanka","author":null,"links":{},"num":17},"partisaanivalssi":{"title":"Partisaanivalssi","author":null,"links":{},"num":18},"herrojen-kanssa-pellon-laidassa":{"title":"Herrojen kanssa pellon laidassa","author":null,"links":{},"num":25,"disabled":true},"laulu-siirtotyolaisesta":{"title":"Laulu siirtotyöläisestä","author":null,"links":{},"num":19},"taistojen-tiella":{"title":"Taistojen tiellä","author":null,"links":{},"num":20},"wir-sind-uberall":{"title":"Wir sind überall","author":null,"links":{},"num":28,"disabled":true},"solidarity-forever":{"title":"Solidarity forever","author":null,"links":{},"num":41},"oodi-vihervasemmistolaisuudelle":{"title":"Oodi vihervasemmistolaisuudelle","author":null,"links":{},"num":34},"syntymapaivalaulu":{"title":"Syntymäpäivälaulu","author":null,"links":{},"num":35},"vapauden-kaiho":{"title":"Vapauden kaiho","author":null,"links":{},"num":9},"se-erityinen-tyowaen-risteily-kappale":{"title":"Se Erityinen Työwäen Risteily-kappale","author":null,"links":{},"num":37},"aqua-vera":{"title":"Aqua vera","author":null,"links":{},"num":33,"disabled":true},"ranskassa-juodaan-viinia":{"title":"Ranskassa juodaan viiniä","author":null,"links":{},"num":null,"disabled":true},"vivassa-juodaan-kiljua":{"title":"ViVassa juodaan kiljua","author":null,"links":{},"num":36},"pikku-kakkosen-posti":{"title":"Pikku kakkosen posti","author":null,"links":{},"num":32},"rivakka-turkulainen-juomalaulu":{"title":"Rivakka turkulainen juomalaulu","author":null,"links":{},"num":33},"ken-ompi-fuksi":{"title":"Fuksilaulu","author":null,"links":{},"num":31},"ylos-punakapina-ja-alas-hallitus":{"title":"Ylös punakapina ja alas hallitus","author":null,"links":{},"num":26},"nuoriso-valmis-on-maistelemaan":{"title":"Nuoriso valmis on maistelemaan","author":null,"links":{},"num":27},"nalkaisen-vegaanin-taisteluhuuto":{"title":"Nälkäisen vegaanin taisteluhuuto","author":null,"links":{},"num":28},"valkoinen-cis-heteromies":{"title":"Valkoinen cis-heteromies","author":null,"links":{},"num":29},"ampukaa-komissaarit":{"title":"Ampukaa komissaarit, nuo hullut koirat","author":null,"links":{},"num":38,"disabled":true},"volga":{"title":"Volga","author":null,"links":{},"num":48},"toveri-mita-odotat":{"title":"Toveri, mitä odotat?","author":null,"links":{},"num":21},"koyhaliston-marssi":{"title":"Köyhälistön marssi","author":null,"links":{},"num":22},"working-class-hero":{"title":"Working class hero ","author":null,"links":{},"num":45},"ken-saro-wiva-on-kuollut":{"title":"Ken Saro Wiva on kuollut","author":null,"links":{},"num":46},"loldiers-anthem":{"title":"Emme suostu pelkäämään","author":"Paleface","links":{"Youtube":"https://www.youtube.com/watch?v=-0lht7PZLac"},"num":38},"haistakaa-paska-koko-valtiovalta":{"title":"haistakaa paska koko valtiovalta","author":"Irwin","num":39},"esko-kulonen":{"title":"Esko Kulonen","author":null,"links":{},"num":10},"nalkamaan-laulu":{"title":"Nälkämaan laulu","author":null,"links":{},"num":50},"kolme-pikku-miesta":{"title":"Kolme pikku miestä","num":51},"juo-kaljas-laulellen":{"title":"Juo kaljas laulellen","num":52},"helsinki-shangri-la":{"title":"Helsinki Shangri-La","num":53}}');

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map