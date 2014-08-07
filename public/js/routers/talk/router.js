/**
 * @appular talk
 */
define([
    'jquery',
    'underscore',
    'backbone'
], function ($, _, Backbone) {
    var Router = Backbone.Router.extend({
            history: {
                pushState: true,
                root: '/talk'
            },
            params: {}
        });

    return Router;
});