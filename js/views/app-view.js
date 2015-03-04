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
            this.$errorMessage = $('.errorMessage');

            this.$spinner.hide();
            this.$errorMessage.hide();
        },
        getThumbs: function() {
            this.$grid.html('');
            this.$spinner.show();
            this.$errorMessage.hide();
            $.get('https://www.reddit.com/r/'+this.$subRedditInput.val().trim()+'.json?limit=100')
                .success(this.addThumbs.bind(this)).fail(this.showError.bind(this));
        },
        addThumbs: function(data) {
            var filteredChildren = data.data.children.filter(function(child) {
                return child.data.thumbnail != 'self' &&
                    child.data.thumbnail != 'nsfw' &&
                    child.data.thumbnail != 'default';
            });
            this.thumbs = filteredChildren.map(function(child) {
                return new app.Thumb({
                    title: child.data.title,
                    author: child.data.author,
                    score: child.data.score,
                    permalink: 'http://reddit.com/' + child.data.permalink,
                    num_comments: child.data.num_comments,
                    thumbnail: child.data.thumbnail
                });
            });
            this.thumbs.forEach(this.addOneThumb, this);
            this.$spinner.hide();
        },
        addOneThumb: function(thumb) {
            var view = new app.ThumbView({ model: thumb});
            this.$grid.append(view.render().el);
        },
        showError: function() {
            this.$spinner.hide();
            this.$errorMessage.show();
        }
    })
})(jQuery);
