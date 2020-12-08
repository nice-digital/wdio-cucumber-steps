/**
 * Close all but the first tab
 * @param  {String}   obsolete Type of object to close (window or tab)
 */
export async function closeAllButFirstTab(): Promise<void> {
	const windowHandles = await browser.getWindowHandles();

	// Close all tabs but the first one
	windowHandles.reverse();

	for (const [index, handle] of windowHandles.entries()) {
		await browser.switchToWindow(handle);
		if (index < windowHandles.length - 1) {
			await browser.closeWindow();
		}
	}
}
