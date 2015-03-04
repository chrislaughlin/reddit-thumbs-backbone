var app = app || {};
(function ($) {
    'use strict';
    app.ThumbView = Backbone.View.extend({
        tagName: 'img',
        template: '',
        events: {
            'click .thumbnail' : 'displayName'
        },
        displayName: function() {
            alert(this.model.get('name'));
        }
    })

})(jQuery);
