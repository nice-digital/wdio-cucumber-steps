import {
	source as axeSource,
	Result,
	run,
	AxeResults,
	RunOptions,
} from "axe-core";

declare global {
	interface Window {
		axe: {
			run: typeof run;
		};
	}
}

// interface AxeWindow {
// 	axe: {
// 		run: typeof run;
// 	};
// }

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

	// Some truly horrible casting here because of this bug: https://github.com/webdriverio/webdriverio/issues/6206
	const results = (await browser.executeAsync(
		(function checkForAccessibilityIssues(
			levels: string[],
			done: (results: AxeResults | Error) => void
		) {
			const options: RunOptions = {
				runOnly: {
					type: "tag",
					values: levels,
				},
			};
			((window as unknown) as { axe: { run: typeof run } }).axe.run(
				options,
				function (err: Error, results: AxeResults) {
					if (err) done(err);
					else done(results);
				}
			);
		} as unknown) as () => void,
		levels
	)) as AxeResults | Error;

	// const results = (await browser.executeAsync(
	// 	`function checkForAccessibilityIssues (levels, done) {
	// 		var options = {
	// 			runOnly: {
	// 				type: "tag",
	// 				values: levels,
	// 			},
	// 		};
	// 		axe.run(options, function (err, results) {
	// 			if (err) done(err);
	// 			else done(results);
	// 		});
	// 	}`,
	// 	levels
	// )) as AxeResults | Error;

	if (results instanceof Error) throw results;

	if (results.violations.length > 0) {
		const message = getErrorMessage(results.violations);
		fail(message);
	}

	expect(results.violations).toHaveLength(0);
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
