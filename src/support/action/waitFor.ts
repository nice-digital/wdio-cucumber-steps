/*! https://github.com/webdriverio/cucumber-boilerplate/blob/master/src/support/action/waitFor.js */

/**
 * Wait for the given element to be enabled, enabled or exist
 * @param  {String}   selector                     Element selector
 * @param  {String}   ms                       Wait duration (optional)
 * @param  {String}   falseState               Check for opposite state
 * @param  {String}   state                    State to check for (default
 *                                             existence)
 */
export async function waitFor(
	selector: string,
	ms: string,
	falseState: string,
	state: "enabled" | "displayed" | "exist"
): Promise<void> {
	// max number of milliseconds to wait, default 3000
	const timeout = parseInt(ms, 10) || 3000;

	//Command to perform on the browser object
	let command: "waitForEnabled" | "waitForDisplayed" | "waitForExist" =
		"waitForExist";

	command =
		state === "enabled"
			? "waitForEnabled"
			: state === "displayed"
			? "waitForDisplayed"
			: "waitForExist";

	let reverse = !!falseState;
	if (typeof falseState === "undefined") {
		reverse = false;
	}

	const element = await $(selector);

	await element[command]({ timeout, reverse });
}
