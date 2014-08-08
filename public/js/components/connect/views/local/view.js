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
                video: true,
                audio: true
            },
            connection: null,
            stream: null,
            servers: null,
            initialize: function () {
                _.bindAll(this, 'setStream');
            },
            render: function () {

                
                return this;
            },
            start: function () {
                getUserMedia(this.constraints, this.setStream, this.streamError);
            },
            setStream: function (stream) {
                this.el.src = URL.createObjectURL(stream);
                this.stream = stream;
            },
            streamError: function (error) {
                console.log('navigator.getUserMedia error: ', error);
            }
        });

    return View;
});