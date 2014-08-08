/**
 * @appular connect
 */
define([
    'jquery',
    'underscore',
    'backbone'
], function ($, _, Backbone) {
    var Router = Backbone.Router.extend({
            history: {
                pushState: true,
                root: '/connect'
            },
            params: {}
        });

    return Router;
});