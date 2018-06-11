import login from "./login";
/**
 * Log in to nice accounts by clicking on TopHat
 * @param  {string}   username The email address used to sign in to Nice Accounts
 * @param  {string}   password The password used to sign in to Nice Accounts
 */
module.exports = (username, password) => {
	// If you are already logged in
	if (browser.getCookie("__nrpa_2.2")) {
		return;
	}

	browser.waitForExist(".nice-tophat");
	browser.click("body #signin");
	login(username, password);
};

