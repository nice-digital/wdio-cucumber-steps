/**
 * Delete a cookie
 * @param  {String}   name The name of the cookie to delete
 */
export async function deleteCookie(name: string): Promise<void> {
	await browser.deleteCookie(name);
}
