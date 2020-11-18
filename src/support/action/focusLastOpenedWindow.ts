/**
 * Focus the last opened window
 * @param  {String}   obsolete Type of object to focus to (window or tab)
 */
/* eslint-disable no-unused-vars */
export function focusLastOpenedWindow(obsolete: string): void {
	const lastWindowHandle = browser.getWindowHandles().slice(-1)[0];

	browser.switchToWindow(lastWindowHandle);
}