/*! https://github.com/webdriverio/cucumber-boilerplate/blob/master/src/support/action/clickElement.js */
import { checkIfElementExists } from "../lib/checkIfElementExists";

/**
 * Perform an click action on the given element
 * @param action  The action to perform (click or doubleClick)
 * @param type    Type of the element (link or selector)
 * @param selector Element selector
 */
export async function clickElement(
	action: "click" | "doubleClick",
	type: string,
	selector: string
): Promise<void> {
	const actualSelector = type === "link" ? `=${selector}` : selector,
		method = action === "click" ? "click" : "doubleClick";

	await checkIfElementExists(actualSelector);

	const element = await $(actualSelector);
	await element[method]();
}
