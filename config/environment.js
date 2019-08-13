'use strict';

module.exports = function (environment) {
  let ENV = {
    modulePrefix: 'resource-monitor',
    podModulePrefix: 'resource-monitor/src',
    environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    ENV.Host = "http://123.56.179.133";
    ENV.Port = 9201;
    ENV.Version= 'v1.0';
    ENV.DB = 'DL';
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    ENV.Host = "http://123.56.179.133";
    ENV.Port = 9201;
    ENV.Version= 'v1.0';
    ENV.DB = 'DL';
    // here you can enable a production-specific feature
  }

  return ENV;
};
