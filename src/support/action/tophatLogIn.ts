import { login } from "./login";
/**
 * Log in to nice accounts by clicking on TopHat
 * @param  {string}   username The email address used to sign in to Nice Accounts
 * @param  {string}   password The password used to sign in to Nice Accounts
 */
export function tophatLogin(username: string, password: string): void {
	// If you are already logged in check for the cookie
	if (browser.getCookie("__nrpa_2.2")) {
		return;
	}

	$(".nice-tophat").waitForExists();
	$("body #signin").click();
	login(username, password);
}
