/*! https://github.com/webdriverio/cucumber-boilerplate/blob/master/src/support/action/selectOption.js */
/**
 * Select an option of a select element
 * @param  {String}   selectionType  Type of method to select by (name, value or
 *                                   text)
 * @param  {String}   selectionValue Value to select by
 * @param  {String}   selector     Element selector
 */
export async function selectOption(
	selectionType: "name" | "value" | "text",
	selectionValue: string,
	selector: string
): Promise<void> {
	const element = await $(selector);

	if (selectionType === "text") {
		await element.selectByVisibleText(selectionValue);
		return;
	}

	if (selectionType !== "name" && selectionType !== "value") {
		throw new Error(`Unknown selection type "${selectionType}"`);
	}

	await element.selectByAttribute(selectionType, selectionValue);
}
