import { login } from "./login";
import { getNICEAccountsUrl, AccountsEnvironment } from "../lib/nice-accounts";

/**
 * Log in to particular version of nice accounts indepentendly of TopHat
 * @param environment The domain of accounts to use to sign to nice accounts (beta, live or test)
 * @param usernameEnvVar The name of the environment variable with the email address used to sign in to Nice Accounts
 * @param passwordEnvVar The name of the environment variable with the password used to sign in to Nice Accounts
 */
export async function accountsLogin(
	environment: AccountsEnvironment,
	usernameEnvVar: string,
	passwordEnvVar: string
): Promise<void> {
	// You're already logged in if you have the nrpa auth cookie, so no need to do anything more
	const accountsAuthCookie = await browser.getCookies("__nrpa_2.2");
	if (accountsAuthCookie.length > 0) return;

	const accountsUrl = getNICEAccountsUrl(environment);

	if (accountsUrl) {
		browser.url(accountsUrl);
		login(usernameEnvVar, passwordEnvVar);
	} else throw "Invalid NICE Accounts URL/environment";
}
