export async function debug(): Promise<void> {
	await browser.debug();
}
