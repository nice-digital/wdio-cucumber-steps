/* eslint-disable no-var, no-unused-vars, no-underscore-dangle */

// Create the WebdriverIO browser object
//global.browser = {};

// Make a proxy of the global Jest expect function so we can test the global
// expect-webdriverio version
global._expect = global.expect;
