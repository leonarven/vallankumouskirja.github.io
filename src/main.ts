import "../node_modules/hammerjs/hammer.js";

import { NgZone                 } from '@angular/core';
import { UIRouter, UrlService   } from '@uirouter/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule          } from './app.module';

platformBrowserDynamic().bootstrapModule( AppModule ).then( platformRef => {

	/*const urlService: UrlService = platformRef.injector.get( UIRouter ).urlService;

	function startUIRouter() {
		urlService.listen();
		urlService.sync();
	}

	platformRef.injector.get<NgZone>( NgZone ).run( startUIRouter );*/

});
