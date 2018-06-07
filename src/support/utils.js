// @flow

/**
 * Applies the given list of step definitions to the given cucumber function
 * @param {Given|When|Then} fn The function to apply (one of Given/When/Then)
 * @param {Array<Step>} steps The array of step objects
 */
const applyStepDefinitions = (fn, steps) => {
	steps.forEach(step => {
		if(step.options) {
			fn(step.regex, step.options, step.fn);
		} else {
			fn(step.regex, step.fn);
		}
	});
};

/**
 * Returns the homepage of the NICE Accounts instance for the given environment
 * @param {String} environment The name of the accounts environment (beta, live or test)
 */
const getNICEAccountsUrl = (environment: string): string => {
	const accountsHostPrefix: string = environment === "live" ? "" : `${environment}-`;
	return `https://${accountsHostPrefix}accounts.nice.org.uk`;
};

export {
	applyStepDefinitions,
	getNICEAccountsUrl
};
