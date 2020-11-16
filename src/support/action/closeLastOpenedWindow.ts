/*! https://github.com/webdriverio/cucumber-boilerplate/blob/master/src/support/action/closeLastOpenedWindow.js */
/**
 * Close the last opened window
 * @param  {String}   obsolete Type of object to close (window or tab)
 */
/* eslint-disable no-unused-vars */
export function closeLastOpenedWindow(obsolete: string): void {
	const lastWindowHandle = browser.getWindowHandles().slice(-1)[0];

	browser.closeWindow();
	browser.switchToWindow(lastWindowHandle);
}
