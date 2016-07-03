'use strict';

var CONSTANTS = (function() {
    return {
        FLICKR_BASE_URL: 'https://www.flickr.com/',
        FLICKR_API_URL: 'https://api.flickr.com/services/feeds/photos_public.gne?tags=potato&tagmode=all&format=json'
    };
}());

CONSTANTS.$inject = [];
module.exports = CONSTANTS;