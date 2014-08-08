/**
 * @appular plugin
 */
define([
    'jquery',
    'underscore',
    'backbone'
], function ($, _, Backbone) {
    var View = Backbone.View.extend({
            bindings: {},
            listeners: {},
            events: {},
            connection: null,
            servers: null,
            initialize: function () {},
            render: function () {
                
                return this;
            },
            connect: function () {
                this.connection = new RTCPeerConnection(this.servers);
            }
        });

    return View;
});