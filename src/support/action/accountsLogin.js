/**
 * Log in to particular version of nice accounts indepentendly of TopHat
 * @param  {string}   environment The domain of accounts to use to sign to nice accounts (beta, live or test)
 * @param  {string}   username The email address used to sign in to Nice Accounts
 * @param  {string}   password The password used to sign in to Nice Accounts
 */
module.exports = (environment, username, password) => {
	// If you are already logged in
	if (browser.getCookie("__nrpa_2.2")) {
		return;
	}

	const url = ["https://" + environment + "-accounts.nice.org.uk"].join();
	browser.url(url);
	browser.waitForExist("input[name='Email']", 5000);
	browser.setValue("input[name='Email']", process.env[username]);
	browser.setValue("input[name='Password']", process.env[password]);
	browser.submitForm("input[name='Email']");
};
