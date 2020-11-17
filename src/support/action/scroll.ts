/*! https://github.com/webdriverio/cucumber-boilerplate/blob/master/src/support/action/scroll.js */
/**
 * Scroll the page to the given element
 * @param  {String}   selector Element selector
 */
export function scroll(selector: string): void {
	$(selector).scrollIntoView();
}
