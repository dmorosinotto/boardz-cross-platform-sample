// require all 3rd party libs
import 'jquery';
import 'bootstrap/js/bootstrap';
import 'admin-lte/js/app';
import 'hammerjs/hammer';
import 'jquery/jquery.hammer';
import 'jquery/jquery.slimscroll';
import 'pNotify/pnotify-adapter';
import 'signalr/signalr';
import 'leaflet/leaflet';
import 'fastclick/fastclick';


import {bootstrap} from '@angular/platform-browser-dynamic';
import {ComponentRef, provide, enableProdMode} from '@angular/core';
import {ROUTER_PROVIDERS} from '@angular/router-deprecated';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import {HTTP_PROVIDERS} from '@angular/http';

import {BoardzAppComponent} from './app';
import {TokenService} from './services/tokenService';
import {appInjector} from './services/appInjector';
import {LogService} from './services/logService';
import 'rxjs/Rx';

enableProdMode();

bootstrap(BoardzAppComponent, [
    HTTP_PROVIDERS,
    ROUTER_PROVIDERS,
    provide(LocationStrategy, { useClass: HashLocationStrategy }),
    provide(LogService, { useClass: LogService }),
    TokenService,
]).then((appRef: ComponentRef<any>) => {
    // Store a reference to the injector workaround for Dependency Injection in Router lifecycle hook
    appInjector(appRef.injector);
});
