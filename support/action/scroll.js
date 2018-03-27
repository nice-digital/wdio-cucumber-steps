/*! https://github.com/webdriverio/cucumber-boilerplate/blob/master/src/support/action/scroll.js */
/**
 * Scroll the page to the given element
 * @param  {String}   selector Element selector
 */
module.exports = (selector) => {
	browser.scroll(selector);
};
