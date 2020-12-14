/*! https://github.com/webdriverio/cucumber-boilerplate/blob/master/src/support/action/clearInputField.js */
/**
 * Clear a given input field (placeholder for WDIO's clearElement)
 * @param  {String}   selector Element selector */

export async function clearInputField(selector: string): Promise<void> {
	const element = await $(selector);
	await element.clearValue();
}
