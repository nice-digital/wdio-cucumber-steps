import {
	source as axeSource,
	Result,
	RunOptions,
	run,
	AxeResults,
} from "axe-core";
import { expect } from "chai";

interface AxeWindow extends Window {
	axe: {
		run: typeof run;
	};
}

/**
 * Check if the page has accessibility issues.
 */
export async function checkForAccessibilityIssues(
	level: "A" | "AA"
): Promise<void> {
	let levels = ["wcag2a", "wcag2aa", "best-practice"];
	switch (level) {
		case "A":
			levels = ["wcag2a", "best-practice"];
			break;
		case "AA":
		default:
			break;
	}
	// inject the axe script source
	await browser.execute(axeSource);
	// run inside browser and get results
	const results: AxeResults | Error = (await browser.executeAsync(
		// Two horrible comments until https://github.com/webdriverio/webdriverio/issues/6206 is released
		/* eslint-disable @typescript-eslint/ban-ts-comment */
		// @ts-ignore: explicit-function-return-type
		function (levels, done): void {
			const options: RunOptions = {
				runOnly: {
					type: "tag",
					values: levels,
				},
			};
			const axeWindow = (window as unknown) as AxeWindow;
			axeWindow.axe.run(options, function (err, results) {
				// eslint-disable-line no-undef
				if (err) done(err);
				else done(results);
			});
		},
		levels
	)) as AxeResults | Error;

	if (results instanceof Error) throw results;

	expect(results.violations, getErrorMessage(results.violations)).to.eql([]);
}

export const getErrorMessage = (violations: Result[]): string => {
	const errors = violations
		.map((violation) => {
			const elements = violation.nodes.map((node) => node.html).join(", ");
			return `${violation.help} | ${elements}\n   (see ${violation.helpUrl})`;
		})
		.join("\n - ");

	return `Found ${
		violations.length
	} accessibility errors on ${browser.getUrl()}:\n - ${errors}`;
};
