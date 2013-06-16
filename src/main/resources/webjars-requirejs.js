/*global requirejs */

// Ensure any request for this webjar brings in jQuery.
requirejs.config({
    shim: {
        emberjs: [ 'webjars!jquery.js', 'webjars!handlebars.js' ]
    }
});
