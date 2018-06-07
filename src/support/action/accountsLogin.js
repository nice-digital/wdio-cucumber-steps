import login from "./login";
import { getNICEAccountsUrl } from "./../utils";
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

	browser.url(getNICEAccountsUrl(environment));
	login(username, password);
};
