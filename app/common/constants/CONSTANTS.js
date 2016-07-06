'use strict';

var CONSTANTS = (function() {
    return {
        FLICKR_BASE_URL: 'https://www.flickr.com/',
        FLICKR_API_URL: 'https://api.flickr.com/services/feeds/photos_public.gne?tags=potato&tagmode=all&format=json',
        FORMAT_DATE_DEFAULT: 'MMM yyyy \'at\' hh:mm'
    };
}());

CONSTANTS.$inject = [];
module.exports = CONSTANTS;