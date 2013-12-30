// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.
//@codekit-append 'plugins/jquery.width_snitch.min.js';
//@codekit-append 'plugins/chosen.jquery.min.js';
//@codekit-append 'plugins/jquery.placeholder.js';
//@codekit-append 'plugins/parsley.js';

// @ codekit-append 'plugins/jquery.h5validate.js';
// @ codekit-append 'plugins/jquery.simplemodal.1.4.4.min.js';
// @ codekit-append 'plugins/jquery.slimscroll.min.js';
