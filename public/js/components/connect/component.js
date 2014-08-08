/**
 * @appular connect
 */

define([
    'jquery',
    'underscore',
    'backbone',
    './views/local/view'
], function ($, _, Backbone, Local) {
    var View = Backbone.View.extend({
            events: {
                'click #start': 'start'
            },
            initialize: function () {},
            render: function () {
                this.views.local = new Local({
                    el: '#local'
                }).render();

                return this;
            },
            start: function () {
                this.views.local.start();
            }
        });

    return View;
});