/**
 * Perform a key press
 * @param  {String}   key  The key to press
 */
export async function pressButton(key: string): Promise<void> {
	browser.keys(key);
}
