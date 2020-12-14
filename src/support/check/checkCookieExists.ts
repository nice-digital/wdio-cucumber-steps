/**
 * Check if a cookie with the given name exists
 * @param  {String}   name      The name of the cookie
 * @param  {String}   falseCase Whether or not to check if the cookie exists or not
 */
export async function checkCookieExists(
	name: string,
	falseCase: string
): Promise<void> {
	const cookies = await browser.getCookies([name]);

	if (falseCase) {
		expect(cookies).toHaveLength(0);
	} else {
		expect(cookies).not.toHaveLength(0);
	}
}
