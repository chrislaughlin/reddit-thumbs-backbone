var app = app || {};
(function($) {
    'use strict';
    app.AppView = Backbone.View.extend({
        el: '#appView',
        events: {
            'click #submitSubReddit': 'getThumbs'
        },
        initialize: function() {
            this.thumbs = [];
            this.$grid = $('#photos');
            this.$subRedditInput = $('#subreddit');
        },
        getThumbs: function() {
            this.$grid.html('');
            $.get('https://www.reddit.com/r/'+this.$subRedditInput.val().trim()+'.json?limit=100')
                .success(this.addThumbs.bind(this));
        },
        addThumbs: function(data) {
            this.thumbs = Array.prototype.map.call(data.data.children, function(child) {
                return new app.Thumb({
                    name: child.data.title,
                    thumbnail: child.data.thumbnail
                });
            });
            this.thumbs.forEach(this.addOneThumb, this);
        },
        addOneThumb: function(thumb) {
            var view = new app.ThumbView({ model: thumb});
            this.$grid.append(view.render().el);
        }
    })
})(jQuery);
