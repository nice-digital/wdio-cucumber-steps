/**
 * Check if the given URL was opened in a new window
 * @param  {String}   expectedUrl The URL to check for
 * @param  {String}   obsolete    Indicator for the type (window or tab) unused
 */
/* eslint @typescript-eslint/no-unused-vars: "off" */
export async function checkIsOpenedInNewWindow(
	expectedUrl: string
): Promise<void> {
	const windowHandles = await browser.getWindowHandles();

	expect(windowHandles).not.toHaveLength(1);

	const lastWindowHandle = windowHandles.slice(-1);

	// Make sure we focus on the last opened window handle
	await browser.switchToWindow(lastWindowHandle[0]);

	expect(browser).toHaveUrlContaining(expectedUrl);

	await browser.closeWindow();
}
