var app = app || {};
(function ($) {
    'use strict';
    app.ThumbView = Backbone.View.extend({
        template: _.template($('#thumb-template').html()),
        events: {
            'click .thumbnail' : 'displayDetails'
        },
        displayDetails: function() {
            new Backbone.BootstrapModal({
                title: this.model.get('title'),
                animate: true,
                content: new app.ModalContentView({model: this.model})
            }).open();
        },
        render: function() {
            this.$el.html(this.template(this.model.attributes));
            return this;
        }
    })

})(jQuery);
