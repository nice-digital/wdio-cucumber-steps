/*! https://github.com/webdriverio/cucumber-boilerplate/blob/master/src/support/action/closeLastOpenedWindow.js */
/**
 * Close the last opened window
 */
export async function closeLastOpenedWindow(): Promise<void> {
	const windowHandles = await browser.getWindowHandles();
	const lastWindowHandle = windowHandles.slice(-1)[0];

	await browser.closeWindow();
	await browser.switchToWindow(lastWindowHandle);
}
