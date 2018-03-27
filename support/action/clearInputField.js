/*! https://github.com/webdriverio/cucumber-boilerplate/blob/master/src/support/action/clearInputField.js */
/**
 * Clear a given input field (placeholder for WDIO's clearElement)
 * @param  {String}   element Element selector
 */
module.exports = (element) => {
	browser.clearElement(element);
};
