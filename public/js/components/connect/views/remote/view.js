/**
 * @appular connect
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
            constraints: {
                video: true
            },
            connection: null,
            stream: null,
            initialize: function () {},
            render: function () {
                
                return this;
            },
            setStream: function (stream) {
                this.el.src = URL.createObjectURL(stream);
                this.stream = stream;
            },
            streamError: function (error) {
                console.log('navigator.getUserMedia error: ', error);
            },
            connect: function () {
                this.connection = new RTCPeerConnection();
                this.listenTo(this.connection, 'icecandidate', this.connected);
            },
            connected: function (event) {
                this.trigger('connected', event);
            }
        });

    return View;
});