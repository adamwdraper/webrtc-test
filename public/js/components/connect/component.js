/**
 * @appular connect
 */

define([
    'jquery',
    'underscore',
    'backbone',
    './views/local/view',
    './views/remote/view'
], function ($, _, Backbone, Local, Remote) {
    var View = Backbone.View.extend({
            events: {
                'click #call': 'call'
            },
            initialize: function () {},
            render: function () {
                this.views.local = new Local({
                    el: '#local'
                }).render();
                this.listenTo(this.views.local, 'connected', this.localConnected);

                this.views.remote = new Remote({
                    el: '#remote'
                }).render();
                this.listenTo(this.views.remote, 'connected', this.remoteConnected);

                return this;
            },
            call: function () {
                this.views.local.connect();
                this.views.remote.connect();
            },
            localConnected: function (event) {
                if (event.candidate) {
                    this.views.remote.connection.addIceCandidate(new RTCIceCandidate(event.candidate));
                }
            },
            remoteConnected: function (event) {
                if (event.candidate) {
                    this.views.local.connection.addIceCandidate(new RTCIceCandidate(event.candidate));
                }
            }
        });

    return View;
});