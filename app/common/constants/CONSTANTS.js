'use strict';

var CONSTANTS = (function() {
    return {
        FLICKR_API_URL: 'https://api.flickr.com/services/feeds/photos_public.gne?tags=london&tagmode=all&format=json&jsoncallback=JSON_CALLBACK'
    };
}());

CONSTANTS.$inject = [];
module.exports = CONSTANTS;