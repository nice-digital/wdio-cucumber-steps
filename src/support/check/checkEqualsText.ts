/**
 * Check if the given elements text is the same as the given text
 * @param  {String}   elementType   Element type (element or button)
 * @param  {String}   selector       Element selector
 * @param  {String}   falseCase     Whether to check if the content equals the
 *                                  given text or not
 * @param  {String}   expectedText  The text to validate against
 */
export async function checkEqualsText(
	elementType: "element" | "button",
	selector: string,
	falseCase: string,
	expectedText: string
): Promise<void> {
	const element = await $(selector),
		elementValueAttr = (await element.getAttribute("value")) as string | null;

	let command: "getValue" | "getText" = "getValue";

	if (elementType === "button" || elementValueAttr === null) {
		command = "getText";
	}

	let parsedExpectedText = expectedText;
	let boolFalseCase = !!falseCase;

	// Check for empty element
	if (typeof parsedExpectedText === "function") {
		parsedExpectedText = "";

		boolFalseCase = !boolFalseCase;
	}

	if (parsedExpectedText === undefined && falseCase === undefined) {
		parsedExpectedText = "";
		boolFalseCase = true;
	}

	const text = await element[command]();

	if (boolFalseCase) {
		expect(text).not.toBe(parsedExpectedText);
	} else {
		expect(text).toBe(parsedExpectedText);
	}
}
