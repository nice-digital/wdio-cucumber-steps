/**
 * Check the content of a cookie against a given value
 * @param  {String}   name          The name of the cookie
 * @param  {String}   falseCase     Whether or not to check if the value matches or not
 * @param  {String}   expectedValue The value to check against
 */
export async function checkCookieContent(
	name: string,
	falseCase: string,
	expectedValue: string
): Promise<void> {
	const cookie = await browser.getNamedCookie(name);

	if (falseCase) {
		expect(cookie).not.toHaveValue(expectedValue, {
			message: `expected cookie "${name}" not to have value "${expectedValue}"`,
		});
	} else {
		expect(cookie).toHaveValue(expectedValue, {
			message: `expected cookie "${name}" to have value "${expectedValue}"`,
		});
	}
}
