var app = app || {};
(function() {
    'use strict';
    app.Thumb = Backbone.Model.extend({
        defaults: {
            title: '',
            author: '',
            score: 0,
            permalink: '',
            num_comments: 0,
            thumbnail: ''
        }
    })
})();


