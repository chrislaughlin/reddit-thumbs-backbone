var app = app || {};

(function() {
    'use strict';
    var Thumbs = Backbone.Collection.extend({
        model: app.Thumb,
        comparator: 'name'
    });

    app.thumbs = new Thumbs();
})();
