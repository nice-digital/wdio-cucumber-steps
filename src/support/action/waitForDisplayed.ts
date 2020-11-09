/*! https://github.com/webdriverio/cucumber-boilerplate/blob/master/src/support/action/waitForVisible.js */
/**
 * Wait for the given element to become visible
 * @param  {String}   selector      Element selector
 * @param  {String}   falseCase Whether or not to expect a visible or hidden
 *                              state
 */
export function waitForDisplayed(selector: string, falseCase: string): void {
	const ms = 10000;
	$(selector).waitForDisplayed(ms, !!falseCase);
}
// module.exports = (elem, falseCase) => {
// 	/**
//      * Maximum number of milliseconds to wait for
//      * @type {Int}
//      */
// 	const ms = 10000;

// 	browser.waitForVisible(elem, ms, !!falseCase);
// };
