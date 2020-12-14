/*! https://github.com/webdriverio/cucumber-boilerplate/blob/master/src/support/action/setCookie.js */
/**
 * Set a given cookie to a given value. When the cookies does not exist it will
 * be created
 * @param  {String}   name    The name of the cookie
 * @param  {String}   value The value of the cookie
 */
export async function setCookie(name: string, value: string): Promise<void> {
	await browser.setCookies([{ name, value }]);
}
