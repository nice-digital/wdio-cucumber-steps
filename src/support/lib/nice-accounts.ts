export type AccountsEnvironment = "live" | "beta" | "test";

export const isValidNICEAccountsEnvironment = (
	env: AccountsEnvironment
): boolean => env === "live" || env === "beta" || env === "test";

/**
 * Returns the homepage of the NICE Accounts instance for the given environment
 * @param environment The name of the accounts environment (beta, live or test)
 */
export const getNICEAccountsUrl = (
	environment: AccountsEnvironment
): string | false => {
	if (isValidNICEAccountsEnvironment(environment)) {
		const accountsHostPrefix = environment === "live" ? "" : `${environment}-`;
		return `https://${accountsHostPrefix}accounts.nice.org.uk`;
	}
	return false;
};

export const isLoggedIn = async (): Promise<boolean> => {
	// You're already logged in if you have the nrpa auth cookie, so no need to do anything more
	const accountsAuthCookie = await browser.getCookies("__nrpa_2.2");
	return accountsAuthCookie.length > 0;
};
