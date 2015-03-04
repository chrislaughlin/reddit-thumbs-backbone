var app = app || {};
(function ($) {
    'use strict';
    app.ThumbView = Backbone.View.extend({
        tagName: 'div',
        template: _.template($('#thumb-template').html()),
        events: {
            'click .thumbnail' : 'displayName'
        },
        displayName: function() {
            alert(this.model.get('name'));
        },
        render: function() {
            this.$el.html(this.template(this.model.attributes));
            return this;
        }
    })

})(jQuery);
