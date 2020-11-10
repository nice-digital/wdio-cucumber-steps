/**
 * Log in to nice accounts
 * @param  {string}   username The email address used to sign in to Nice Accounts
 * @param  {string}   password The password used to sign in to Nice Accounts
 */
export function login(username: string, password: string): void {
	$("body #Email").waitForDisplayed(4000);
	$("input[name='Email']").setValue(process.env[username]);
	$("input[name='Password']").setValue(process.env[password]);
	$("input[name='Email']").submit();
}
// module.exports = (username, password) => {
// 	browser.waitForVisible("body #Email", 40000);
// 	browser.setValue("input[name='Email']", process.env[username]);
// 	browser.setValue("input[name='Password']", process.env[password]);
// 	browser.submitForm("input[name='Email']");
// };
