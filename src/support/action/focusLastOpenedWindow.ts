/**
 * Focus the last opened window
 */
export async function focusLastOpenedWindow(): Promise<void> {
	const windowHandles = await browser.getWindowHandles();
	const lastWindowHandle = windowHandles.slice(-1)[0];

	await browser.switchToWindow(lastWindowHandle);
}
