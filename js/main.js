		require.config({
			paths: {
				underscore: '../bower_components/underscore/underscore',
				backbone: '../bower_components/backbone/backbone',
				"backbone.babysitter": "..//bower_components/backbone.babysitter/lib/backbone.babysitter",
				"backbone.wreqr": "..//bower_components/backbone.wreqr/lib/backbone.wreqr",
				marionette: '../bower_components/backbone.marionette/lib/core/amd/backbone.marionette',
				jquery: '../bower_components/jquery/jquery',
				localStorage: '../bower_components/backbone.localStorage/backbone.localStorage',
				tpl: 'lib/tpl'
			},

			shim: {
				underscore: {
					exports: '_'
				},

				backbone: {
					exports: 'Backbone',
					deps: ['jquery', 'underscore']
				},

				marionette: {
					deps: ['backbone'],
					exports: 'Backbone.Marionette'
				}
			},

			deps: ['jquery', 'underscore']
		});

		require([
			'app',
			'backbone',
			'routers/index',
			'controllers/index'
		], function (app, Backbone, Router, Controller) {
			'use strict';

			app.start();

			new Router({ controller: Controller });

			Backbone.history.start();
		});
