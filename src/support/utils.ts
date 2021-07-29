import { defineStep, IWorld } from "@cucumber/cucumber";
import {
	DefineStepPattern,
	IDefineStepOptions,
	TestStepFunction,
} from "@cucumber/cucumber/lib/support_code_library_builder/types";
import { UnionToIntersection } from "type-fest";

//type DefineStepPattern = Parameters<typeof defineStep>[0];
//type IDefineStepOptions = Parameters<typeof defineStep>[1];
//type TestStepFunction = Parameters<typeof defineStep>[2];

export type StepType = "given" | "when" | "then";

export class CustomStepDefinition {
	docs = "";
	examples: string[] = [];

	constructor(
		readonly stepType: StepType,
		readonly pattern: DefineStepPattern,
		readonly code: TestStepFunction<IWorld>,
		readonly options?: IDefineStepOptions
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

type DefineStepArgs =
	| [pattern: DefineStepPattern, code: TestStepFunction<IWorld>]
	| [
			pattern: DefineStepPattern,
			options: IDefineStepOptions,
			code: TestStepFunction<IWorld>
	  ];

type CucumberFunction = (...args: DefineStepArgs) => CustomStepDefinition;

export const customSteps: CustomStepDefinition[] = [];

const cucumberFunction =
	(stepType: StepType): CucumberFunction =>
	(...args) => {
		const pattern = args[0],
			options = args.length === 3 ? args[1] : undefined,
			code = args.length === 2 ? args[1] : args[2];

		// No need to actually call cucumber when we're getting the step defs to populate the readme
		if (process.env.README !== "true")
			// eslint-disable-next-line prefer-spread
			defineStep.apply(null, args as UnionToIntersection<DefineStepArgs>);

		const stepDef = new CustomStepDefinition(stepType, pattern, code, options);

		return customSteps.push(stepDef), stepDef;
	};

export const Given = cucumberFunction("given");
export const When = cucumberFunction("when");
export const Then = cucumberFunction("then");
