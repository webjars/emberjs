/*global requirejs */

// Ensure any request for this webjar brings in jQuery.
requirejs.config({
    shim: {
        emberjs: {
            deps    : [ 'webjars!jquery.js', 'webjars!handlebars.js' ],
            exports : "Ember"
        }    
    }
});
