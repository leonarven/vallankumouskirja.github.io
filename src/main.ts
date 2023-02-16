import "../node_modules/hammerjs/hammer.js";
import "../node_modules/angular-ui-router/release/angular-ui-router.min.js";

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';

platformBrowserDynamic().bootstrapModule( AppModule );
