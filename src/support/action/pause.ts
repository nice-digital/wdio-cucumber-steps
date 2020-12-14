/**
 * Pause execution for a given number of milliseconds
 * @param  {String}   ms   Number of milliseconds to pause
 */
export async function pause(ms: string): Promise<void> {
	/**
	 * Number of milliseconds
	 */
	const intMs = parseInt(ms, 10);
	await browser.pause(intMs);
}
