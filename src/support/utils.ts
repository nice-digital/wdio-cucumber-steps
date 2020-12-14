import {
	StepDefinitionCode,
	StepDefinitionOptions,
	defineStep,
} from "cucumber";

type CucumberPattern = string | RegExp;

export type StepType = "given" | "when" | "then";

export class CustomStepDefinition {
	docs = "";
	examples: string[] = [];

	constructor(
		readonly stepType: StepType,
		readonly pattern: CucumberPattern,
		readonly code: StepDefinitionCode,
		readonly options?: StepDefinitionOptions
	) {}

	withDocs(docs: string): CustomStepDefinition {
		this.docs = docs;
		return this;
	}

	withExample(example: string): CustomStepDefinition {
		this.examples.push(example);
		return this;
	}
}

type CucumberFunctionArgs =
	| [pattern: RegExp | string, code: StepDefinitionCode]
	| [
			pattern: RegExp | string,
			options: StepDefinitionOptions,
			code: StepDefinitionCode
	  ];

type CucumberFunction = (...args: CucumberFunctionArgs) => CustomStepDefinition;

export const customSteps: CustomStepDefinition[] = [];

const cucumberFunction = (stepType: StepType): CucumberFunction => (
	...args: CucumberFunctionArgs
): CustomStepDefinition => {
	const pattern = args[0],
		options = args.length === 3 ? args[1] : undefined,
		code = args.length === 2 ? args[1] : args[2];

	// No need to actually call cucumber when we're getting the step defs to populate the readme
	if (process.env.README !== "true") {
		// Call the original matching cucumber function
		// Ideally we'd use a spread arg but can't cos of this TS bug: https://github.com/microsoft/TypeScript/issues/28010
		if (options) {
			defineStep(pattern, options, code);
		} else {
			defineStep(pattern, code);
		}
	}

	const stepDef = new CustomStepDefinition(stepType, pattern, code, options);

	customSteps.push(stepDef);

	return stepDef;
};

export const Given: CucumberFunction = cucumberFunction("given");
export const When: CucumberFunction = cucumberFunction("when");
export const Then: CucumberFunction = cucumberFunction("then");
