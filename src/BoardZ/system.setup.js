/**
 * System configuration for Angular 2 samples
 * Adjust as necessary for your application needs.
 *
(function(global) {
  // map tells the System loader where to look for things
  var map = {
    'app':                        'app', // 'dist',
    '@angular':                   'node_modules/@angular',
    'rxjs':                       'node_modules/rxjs'
    ,   'jquery': 'scripts/bundles/jquery-2.1.4.js',
        'bootstrap/js/bootstrap': 'scripts/bundles/bootstrap.js',
        'admin-lte/js/app': 'scripts/bundles/app.js',
        'jquery/jquery.hammer': 'scripts/bundles/jquery.hammer.js',
        'hammerjs': 'scripts/bundles/hammer.js',
        'hammerjs/hammer': 'scripts/bundles/hammer.js',
        'jquery/jquery.slimscroll': 'scripts/bundles/jquery.slimscroll.js',
        'pnotify': 'scripts/bundles/pnotify.custom.js',
        'pNotify/pnotify-adapter': 'scripts/bundles/pnotify-adapter.js',
        'signalr/signalr': 'scripts/bundles/signalr.js',
        'leaflet/leaflet': 'scripts/bundles/leaflet-src.js',
        'fastclick/fastclick': 'scripts/bundles/fastclick.js'
  };
  // packages tells the System loader how to load when no filename and/or no extension
  var packages = {
    //'app':                        { main: 'main.js',  defaultExtension: 'js' },
    app: {
            format: 'register',
            defaultExtension: 'js'
        },
    'rxjs':                       { defaultExtension: 'js' },
    'angular2-in-memory-web-api': { main: 'index.js', defaultExtension: 'js' },
  };
  var ngPackageNames = [
    'common',
    'compiler',
    'core',
    'http',
    'platform-browser',
    'platform-browser-dynamic',
    'router',
    'router-deprecated',
    'upgrade',
  ];
  // Individual files (~300 requests):
  function packIndex(pkgName) {
    packages['@angular/'+pkgName] = { main: 'index.js', defaultExtension: 'js' };
  }
  // Bundled (~40 requests):
  function packUmd(pkgName) {
    packages['@angular/'+pkgName] = { main: pkgName + '.umd.js', defaultExtension: 'js' };
  };
  // Most environments should use UMD; some (Karma) need the individual index files
  var setPackageConfig = System.packageWithIndex ? packIndex : packUmd;
  // Add package entries for angular packages
  ngPackageNames.forEach(setPackageConfig);
  var config = {
    map: map,
    packages: packages
  }
  System.config(config);
})(this);
*/



System.config({
    packages: {
      'app': 								 { main: 'main.js', defaultExtension: 'js' },
        /*app: {
            format: 'register',
            defaultExtension: 'js'
        }*/
		
/*    	'@angular/common':                   { main: 'common.umd.js', defaultExtension: 'js' },
    	'@angular/compiler':                 { main: 'compiler.umd.js', defaultExtension: 'js' },
    	'@angular/core':                     { main: 'core.umd.js', defaultExtension: 'js' },
    	'@angular/http':                     { main: 'http.umd.js', defaultExtension: 'js' },
    	'@angular/platform-browser':         { main: 'platform-browser.umd.js', defaultExtension: 'js' },
    	'@angular/platform-browser-dynamic': { main: 'platform-browser-dynamic.umd.js', defaultExtension: 'js' },
    	'@angular/router':                   { main: 'router.umd.js', defaultExtension: 'js' },
		  '@angular/router-deprecated':		     { main: 'router-deprecated.umd.js', defaultExtension: 'js' },
    	'rxjs':                              { defaultExtension: 'js' }, */
    },
    map: {
        'jquery': 'scripts/bundles/jquery-2.1.4.js',
        'bootstrap/js/bootstrap': 'scripts/bundles/bootstrap.js',
        'admin-lte/js/app': 'scripts/bundles/app.js',
        'jquery/jquery.hammer': 'scripts/bundles/jquery.hammer.js',
        'hammerjs': 'scripts/bundles/hammer.js',
        'hammerjs/hammer': 'scripts/bundles/hammer.js',
        'jquery/jquery.slimscroll': 'scripts/bundles/jquery.slimscroll.js',
        'pnotify': 'scripts/bundles/pnotify.custom.js',
        'pNotify/pnotify-adapter': 'scripts/bundles/pnotify-adapter.js',
        'signalr/signalr': 'scripts/bundles/signalr.js',
        'leaflet/leaflet': 'scripts/bundles/leaflet-src.js',
        'fastclick/fastclick': 'scripts/bundles/fastclick.js',
        
        'app': 'app',
		    //'@angular': 'scripts/ng2rc1',
		    //'rxjs': 'scripts/ng2rc1'
        '@angular/common':                  'scripts/ng2rc1/common.umd.js',    
    	'@angular/compiler':                  'scripts/ng2rc1/compiler.umd.js', 
    	'@angular/core':                      'scripts/ng2rc1/core.umd.js', 
    	'@angular/http':                      'scripts/ng2rc1/http.umd.js', 
    	'@angular/platform-browser':          'scripts/ng2rc1/platform-browser.umd.js', 
    	'@angular/platform-browser-dynamic':  'scripts/ng2rc1/platform-browser-dynamic.umd.js', 
    	'@angular/router':                    'scripts/ng2rc1/router.umd.js', 
		  '@angular/router-deprecated':		      'scripts/ng2rc1/router-deprecated.umd.js',

    }
});


System.import('app/main')
    .then(null, console.error.bind(console));
