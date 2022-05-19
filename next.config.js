/* eslint-disable no-param-reassign */
const path = require('path');

const withCSS = require('@zeit/next-css');
const withSass = require('@zeit/next-sass');

const settings = {
  cssModules: false,
  publicRuntimeConfig: {
    DOMAIN: process.env.DOMAIN,
    API_URL: process.env.API_URL,
    STATIC_URL: process.env.STATIC_URL,
    API_URL_WS: process.env.API_URL_WS,
  },
  webpack(config) {
    config.resolve.alias.components = path.join(__dirname, 'components');
    config.resolve.alias.services = path.join(__dirname, 'services');

    config.module.rules.push({
      test: /\.svg$/,
      loader: 'svg-inline-loader',
    });

    return config;
  },
};

if (process.env.NODE_ENV === 'development') {
  settings.publicRuntimeConfig.DOMAIN = 'http://test.orpheusradio.ru';
  settings.publicRuntimeConfig.API_URL = 'http://api.test.orpheusradio.ru';
  settings.publicRuntimeConfig.API_URL_WS = 'ws://api.test.orpheusradio.ru';
  settings.publicRuntimeConfig.STATIC_URL = 'http://static.orpheusradio.ru';
}

module.exports = withCSS(withSass(settings));
