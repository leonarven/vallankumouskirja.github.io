import "../node_modules/hammerjs/hammer.js";

import { AppModule              } from './app.module';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

platformBrowserDynamic().bootstrapModule( AppModule ).then( platformRef => { });
