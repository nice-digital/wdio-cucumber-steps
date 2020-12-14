/**
 * Refreshes the current browser
 */
export async function refresh(): Promise<void> {
	await browser.refresh();
}
