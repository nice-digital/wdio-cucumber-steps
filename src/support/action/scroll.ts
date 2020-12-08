/*! https://github.com/webdriverio/cucumber-boilerplate/blob/master/src/support/action/scroll.js */
/**
 * Scroll the page to the given element
 * @param  {String}   selector Element selector
 */
export async function scroll(selector: string): Promise<void> {
	const element = await $(selector);
	await element.scrollIntoView();
}
