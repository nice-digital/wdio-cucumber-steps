/*! https://github.com/webdriverio/cucumber-boilerplate/blob/master/src/support/check/checkContainsText.js */
/**
 * Check if the given elements contains text
 * @param  {String}   elementType   Element type (element or button)
 * @param  {String}   selector       Element selector
 * @param  {String}   falseCase     Whether to check if the content contains
 *                                  the given text or not
 * @param  {String}   expectedText  The text to check against
 */
export async function checkContainsText(
	elementType: "element" | "button",
	selector: string,
	falseCase: string,
	expectedText: string
): Promise<void> {
	const element = await $(selector),
		elementValueAttr = (await element.getAttribute("value")) as string | null;

	let command: "getValue" | "getText" = "getValue";

	if (
		["button", "container"].includes(elementType) ||
		elementValueAttr === null
	) {
		command = "getText";
	}

	let boolFalseCase;
	let stringExpectedText = expectedText;

	await element.waitForDisplayed();
	const text = await element[command]();

	if (typeof expectedText === "undefined") {
		stringExpectedText = falseCase;
		boolFalseCase = false;
	} else {
		boolFalseCase = falseCase === " not";
	}

	if (boolFalseCase) {
		expect(text).not.toContain(stringExpectedText);
	} else {
		expect(text).toContain(stringExpectedText);
	}
}
