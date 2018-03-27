/*! https://github.com/webdriverio/cucumber-boilerplate/blob/master/src/support/action/pressButton.js */
/**
 * Perform a key press
 * @param  {String}   key  The key to press
 */
module.exports = (key) => {
	browser.keys(key);
};
