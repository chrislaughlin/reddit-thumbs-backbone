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
            this.$spinner = $('.spinner');
            this.$spinner.hide();
        },
        getThumbs: function() {
            this.$grid.html('');
            this.$spinner.show();
            $.get('https://www.reddit.com/r/'+this.$subRedditInput.val().trim()+'.json?limit=100')
                .success(this.addThumbs.bind(this));
        },
        addThumbs: function(data) {
            var filteredChildren = data.data.children.filter(function(child) {
                return child.data.thumbnail != 'self' &&
                    child.data.thumbnail != 'nsfw' &&
                    child.data.thumbnail != 'default';
            });
            this.thumbs = filteredChildren.map(function(child) {
                return new app.Thumb({
                    name: child.data.title,
                    thumbnail: child.data.thumbnail
                });
            });
            this.thumbs.forEach(this.addOneThumb, this);
            this.$spinner.hide();
        },
        addOneThumb: function(thumb) {
            var view = new app.ThumbView({ model: thumb});
            this.$grid.append(view.render().el);
        }
    })
})(jQuery);
