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
