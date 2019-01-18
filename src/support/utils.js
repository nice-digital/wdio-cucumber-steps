// @flow

type StepDefType = {
	pattern: string | RegExp,
	options: ?{},
	code: (...args: any) => void,
	title: string,
	examples: string[],
	withDocs: (string) => StepDefType,
	withExample: (string) => StepDefType,
  };

const cucumberFunction = (pattern: string | RegExp, code): StepDefType => ({
	pattern: pattern,
	options: null,
	code: code,
	examples: [],
	title: "",
	withOptions: function(options) {
		this.options = options;
		return this;
	},
	withDocs: function(title: string): StepDefType {
		this.title = title;
		return this;
	},
	withExample: function(example: string): StepDefType {
		this.examples.push(example);
		return this;
	}
});

const Given: StepDefType = cucumberFunction;
const When: StepDefType = cucumberFunction;
const Then: StepDefType = cucumberFunction;

/**
 * Applies the given list of step definitions to the given cucumber function
 * @param {Given|When|Then} fn The function to apply (one of Given/When/Then)
 * @param {Array<StepDefType>} steps The array of step objects
 */
const applyStepDefinitions = (fn, steps) => {
	steps.forEach(step => {
		if(step.options) {
			fn(step.pattern, step.options, step.code);
		} else {
			fn(step.pattern, step.code);
		}
	});
};

/**
 * Returns the homepage of the NICE Accounts instance for the given environment
 * @param {String} environment The name of the accounts environment (beta, live or test)
 */
const getNICEAccountsUrl = (environment: string): string | false => {
	function isValidEnvironment(env) {
		return (env === "live") || (env === "beta") || (env === "test");
	}

	if (isValidEnvironment(environment)) {
		const accountsHostPrefix: string = environment === "live" ? "" : `${environment}-`;
		return `https://${accountsHostPrefix}accounts.nice.org.uk`;
	}
	return false;
};

export {
	Given,
	When,
	Then,
	applyStepDefinitions,
	getNICEAccountsUrl
};
