/*! https://github.com/webdriverio/cucumber-boilerplate/blob/master/src/support/action/clearInputField.js */
/**
 * Clear a given input field (placeholder for WDIO's clearElement)
 * @param  {String}   selector Element selector */

export function clearInputField(selector: string): void {
	$(selector).clearValue();
}
//  module.exports = (element) => {
// 	browser.clearElement(element);
// };
