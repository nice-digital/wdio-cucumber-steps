import { login } from "./login";
/**
 * Log in to nice accounts by clicking on Global nav
 * @param  {string}   username The email address used to sign in to Nice Accounts
 * @param  {string}   password The password used to sign in to Nice Accounts
 */
export function globalnavLogin(username: string, password: string): void {
	if (browser.getCookie("__nrpa_2.2")) {
		return;
	}

	$("header[aria-label='Site header']").waitForExist();
	const headerMenuShown = $("#header-menu-button").isDisplayed();
	if (headerMenuShown) {
		$("#header-menu-button").click();
		$("#header-menu a[href*='accounts.nice.org.uk/signin']").click();
	} else {
		$("#header-menu-button+* a[href*='accounts.nice.org.uk/signin']").click();
	}
	login(username, password);
}
// module.exports = (username, password) => {
// 	// If you are already logged in
// 	if (browser.getCookie("__nrpa_2.2")) {
// 		return;
// 	}

// 	browser.waitForExist("header[aria-label='Site header']");
// 	var headerMenuShown = browser.isVisible("#header-menu-button");
// 	if (headerMenuShown) {
// 		browser.click("#header-menu-button");
// 		browser.click("#header-menu a[href*='accounts.nice.org.uk/signin']");
// 	} else {
// 		browser.click(
// 			"#header-menu-button+* a[href*='accounts.nice.org.uk/signin']"
// 		);
// 	}
// 	login(username, password);
// };
