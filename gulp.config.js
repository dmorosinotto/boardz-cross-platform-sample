'use strict';

module.exports = {
    systemJsConfig: './system.config.js',
    source: {
        folder: './src/BoardZ/',
        files: {
            injectables: [
                //'./dist/www/scripts/es6-shim.min.js',
                //'./dist/www/scripts/shims_for_IE.js',
                './dist/www/scripts/vendor.min.js',
                './dist/www/scripts/core.min.js',
                './dist/www/scripts/zone.js',
                './dist/www/scripts/Reflect.js',
                //'./dist/www/scripts/angular2.min.js',
                './dist/www/scripts/system.js',
                './dist/www/scripts/Rx.js',
                './dist/www/scripts/system.setup.js',
                './dist/www/css/vendor.min.css',
                './dist/www/css/app.css'
            ],
            electronFiles: './electron/**/*.*',
            cordovaFiles: './cordova/',
            cordova: './src/BoardZ/cordova.js',
            main: [
                './src/BoardZ/index.html'
            ],
            systemSetupScript: './src/BoardZ/system.setup.js',
            app: {
                everything: ['./src/BoardZ/app/**/*', './src/BoardZ/system.setup.js'],
                ts: [
                    './src/BoardZ/app/**/*.ts'
                ],
                html: [
                    './src/BoardZ/app/**/*.html'
                ],
                css: [

                    './src/BoardZ/css/**/*.css'
                ],
                componentCss: [
                    './src/BoardZ/app/**/*.css'
                ],
                assets: [
                    './src/BoardZ/assets/**/*.*'
                ]
            },
            vendorStylesheets: [
                './src/BoardZ/vendor/bootstrap/css/bootstrap.css',
                './src/BoardZ/vendor/admin-lte/css/AdminLTE.css',
                './src/BoardZ/vendor/admin-lte/css/skins/_all-skins.css',
                './src/BoardZ/vendor/font-awesome/css/font-awesome.css',
                './src/BoardZ/vendor/pNotify/pnotify.custom.css',
                './src/BoardZ/vendor/leaflet-js/leaflet.css'
            ],
            vendorFonts: [
                './src/BoardZ/vendor/font-awesome/fonts/*.*',
                './src/BoardZ/vendor/bootstrap/fonts/*.*'
            ],
            shim: [
                //'./node_modules/es6-shim/es6-shim.min.js',
                //'./node_modules/angular2/es6/dev/src/testing/shims_for_IE.js'
                './node_modules/core-js/client/core.min.js',
                './node_modules/zone.js/dist/zone.js',
                './node_modules/reflect-metadata/Reflect.js',
                './node_modules/systemjs/dist/system.js',
                './node_modules/rxjs/bundles/Rx.js',
            ],
            vendorJs: [
                './src/BoardZ/vendor/hammerjs/hammer.js',
                './src/BoardZ/vendor/jquery/jquery-2.1.4.js',
                './src/BoardZ/vendor/jquery/jquery.hammer.js',
                './src/BoardZ/vendor/jquery/jquery.slimscroll.js',
                './src/BoardZ/vendor/pNotify/pnotify-adapter.js',
                './src/BoardZ/vendor/pNotify/pnotify.custom.js',
                './src/BoardZ/vendor/signalr/signalr.js',
                './src/BoardZ/vendor/bootstrap/js/bootstrap.js',
                './src/BoardZ/vendor/fastclick/fastclick.js',
                './src/BoardZ/vendor/admin-lte/js/app.js',
                './src/BoardZ/vendor/leaflet-js/leaflet-src.js'],
            angular2: [
                //'./node_modules/systemjs/dist/system-polyfills.js',
                //'./node_modules/angular2/bundles/angular2-polyfills.js',
                //'./node_modules/systemjs/dist/system.src.js',
                //'./node_modules/rxjs/bundles/Rx.js',
                //'./node_modules/angular2/bundles/angular2.dev.js',
                //'./node_modules/angular2/bundles/http.dev.js',
                //'./node_modules/angular2/bundles/router.dev.js'
                './node_modules/rxjs/bundles/Rx.js',
                './node_modules/@angular/common/common.umd.js',
                './node_modules/@angular/compiler/compiler.umd.js',
                './node_modules/@angular/core/core.umd.js',
                './node_modules/@angular/http/http.umd.js',
                //'./node_modules/@angular/platform-browser/platform-browser.umd.js',
                './node_modules/@angular/platform-browser-dynamic/platform-browser-dynamic.umd.js',
                //'./node_modules/@angular/router/router.umd.js',
                './node_modules/@angular/router-deprecated/router-deprecated.umd.js'
            ],
            ng2rc1: [
                './node_modules/@angular/common/common.umd.js',
                './node_modules/@angular/compiler/compiler.umd.js',
                './node_modules/@angular/core/core.umd.js',
                './node_modules/@angular/http/http.umd.js',
                './node_modules/@angular/platform-browser/platform-browser.umd.js',
                './node_modules/@angular/platform-browser-dynamic/platform-browser-dynamic.umd.js',
                //'./node_modules/@angular/router/router.umd.js',
                './node_modules/@angular/router-deprecated/router-deprecated.umd.js'
            ]
        }
    },
    ts: {
        config: './tsconfig.json'
    },
    targets: {
        angular2MinJs: 'angular2.min.js',
        vendorMinJs: 'vendor.min.js',
        vendorMinCss: 'vendor.min.css',
        buildFolder: './dist/www',
        electronFolder: './dist/desktop',
        cordovaFolder: './dist/mobile',
        resourcesFolder: './resources/',
        hooksFolder: './cordova/hooks/',
        appFolder: 'app',
        stylesFolder: 'css',
        minified: {
            js: 'app.js',
            css: 'app.css',
            templateCache: 'ng-templates.js'
        }
    }
};
