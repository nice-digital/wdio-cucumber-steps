/*! https://github.com/webdriverio/cucumber-boilerplate/blob/master/src/support/action/setInputField.js */
import { checkIfElementExists } from "../lib/checkIfElementExists";

/**
 * Set the value of the given input field to a new value or add a value to the
 * current element value
 * @param  {String}   method  The method to use (add or set)
 * @param  {String}   value   The value to set the element to
 * @param  {String}   selector Element selector
 */
export async function setInputField(
	method: "add" | "set",
	value: string,
	selector: string
): Promise<void> {
	await checkIfElementExists(selector, false, 1);

	const command = method === "add" ? "addValue" : "setValue",
		element = await $(selector);

	element[command](value || " ");
}
