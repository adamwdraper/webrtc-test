/**
 * @appular camera
 */
define([
    'jquery',
    'underscore',
    'backbone'
], function ($, _, Backbone) {
    var Router = Backbone.Router.extend({
            history: {
                pushState: true,
                root: '/camera'
            },
            params: {}
        });

    return Router;
});