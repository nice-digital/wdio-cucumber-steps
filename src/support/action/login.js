/**
 * Log in to nice accounts
 * @param  {string}   username The email address used to sign in to Nice Accounts
 * @param  {string}   password The password used to sign in to Nice Accounts
 */
module.exports = (username, password) => {
	browser.waitForVisible("body #Email", 40000);
	browser.setValue("input[name='Email']", process.env[username]);
	browser.setValue("input[name='Password']", process.env[password]);
	browser.submitForm("input[name='Email']");
};

