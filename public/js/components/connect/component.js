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
            events: {},
            initialize: function () {},
            render: function () {
                this.views.local = new Local({
                    el: '#local'
                }).render();

                return this;
            }
        });

    return View;
});