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
        },
        getThumbs: function() {
            alert(this.$subRedditInput.val());
        }
    })
})(jQuery);
