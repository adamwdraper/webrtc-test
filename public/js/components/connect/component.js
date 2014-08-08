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

                this.views.remote = new Remote({
                    el: '#remote'
                }).render();

                this.listenTo(this.views.local, 'connected', connected);

                return this;
            },
            call: function () {
                this.views.local.connect();
                this.views.remote.connect();
            },
            connected: function (event) {
                if (event.candidate) {
                    this.views.remote.connection.addIceCandidate(new RTCIceCandidate(event.candidate));
                }
            }
        });

    return View;
});