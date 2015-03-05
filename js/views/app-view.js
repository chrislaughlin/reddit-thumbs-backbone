var app = app || {};
(function($) {
    'use strict';
    app.AppView = Backbone.View.extend({
        el: '#appView',
        events: {
            'click #submitSubReddit': 'getThumbs'
        },
        initialize: function() {
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
            app.thumbs.url = 'https://www.reddit.com/r/'+this.$subRedditInput.val().trim()+'.json';
            app.thumbs.fetch({
                success: this.addThumbs.bind(this),
                fail: this.showError.bind(this),
                data: {limit: 100}
            });
        },
        addThumbs: function() {
            app.thumbs.forEach(this.addOneThumb, this);
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
