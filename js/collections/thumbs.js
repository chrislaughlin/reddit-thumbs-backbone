var app = app || {};

(function() {
    'use strict';
    var Thumbs = Backbone.Collection.extend({
        model: app.Thumb,
        url: '',
        comparator: 'name',
        parse: function(data) {
            var filteredChildren = data.data.children.filter(function(child) {
                return child.data.thumbnail != 'self' &&
                    child.data.thumbnail != 'nsfw' &&
                    child.data.thumbnail != 'default';
            });
            return  filteredChildren.map(function(child) {
                return {
                    title: child.data.title,
                    author: child.data.author,
                    score: child.data.score,
                    permalink: 'http://reddit.com/' + child.data.permalink,
                    num_comments: child.data.num_comments,
                    thumbnail: child.data.thumbnail
                };
            });
        }
    });

    app.thumbs = new Thumbs();
})();
