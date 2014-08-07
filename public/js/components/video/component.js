/**
 * @appular video
 */

define([
    'jquery',
    'underscore',
    'backbone'
], function ($, _, Backbone) {
    var View = Backbone.View.extend({
            constraints: {
                video: true
            },
            events: {},
            initialize: function () {
                _.bindAll(this, 'displayVideo', 'displayError');
            },
            render: function () {
                this.getUserMedia();

                return this;
            },
            getUserMedia: function () {
                navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

                navigator.getUserMedia(this.constraints, this.displayVideo, this.displayError);
            },
            displayVideo: function (localMediaStream) {
                window.stream = localMediaStream; // stream available to console
                this.el.src = window.URL.createObjectURL(localMediaStream);
                this.el.play();
            },
            displayError: function (error) {
                console.log('navigator.getUserMedia error: ', error);
            }
        });

    return View;
});