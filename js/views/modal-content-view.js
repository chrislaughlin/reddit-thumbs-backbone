var app = app || {};
(function($) {
    'use strict';
    app.ModalContentView = Backbone.View.extend({
        template: _.template($('#model-content-template').html()),
        render: function() {
            this.$el.html(this.template(this.model.attributes));
            return this;
        }
    });

})(jQuery);
