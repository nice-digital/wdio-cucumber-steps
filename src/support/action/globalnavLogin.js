import login from "./login";
/**
 * Log in to nice accounts by clicking on Global nav
 * @param  {string}   username The email address used to sign in to Nice Accounts
 * @param  {string}   password The password used to sign in to Nice Accounts
 */
module.exports = (username, password) => {
	// If you are already logged in
	if (browser.getCookie("__nrpa_2.2")) {
		return;
	}

	var headerMenuShown = browser.isVisible("#header-menu-button");
	if (headerMenuShown) {
		browser.waitForExist("header[aria-label='Site header']");
		browser.click("#header-menu-button");
		browser.click("#header-menu a[href*='accounts.nice.org.uk/signin']");
	} else {
		browser.click("#header-menu-button+* a[href*='accounts.nice.org.uk/signin']");
	}	
	login(username, password);
};

