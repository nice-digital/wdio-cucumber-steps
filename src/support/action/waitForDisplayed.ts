/*! https://github.com/webdriverio/cucumber-boilerplate/blob/master/src/support/action/waitForVisible.js */
/**
 * Wait for the given element to become visible
 * @param  {String}   selector      Element selector
 * @param  {String}   falseCase Whether or not to expect a visible or hidden
 *                              state
 */
export async function waitForDisplayed(
	selector: string,
	falseCase: string
): Promise<void> {
	const timeout = 10000,
		reverse = !!falseCase,
		element = await $(selector);

	await element.waitForDisplayed({ timeout, reverse });
}
