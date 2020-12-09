/**
 * Check if the given elements text is the same as the given text
 * @param  {String}   elementType   Element type (element or button)
 * @param  {String}   selector       Element selector
 * @param  {String}   falseCase     Whether to check if the content equals the
 *                                  given text or not
 * @param  {String}   expectedText  The text to validate against
 */
export async function checkEqualsText(
	elementType: string,
	selector: string,
	falseCase: string,
	expectedText: string
): Promise<void> {
	const element = await $(selector);

	let command: "getValue" | "getText" = "getValue";

	if (elementType === "button" || element.getAttribute("value") === null) {
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
		expect(parsedExpectedText).not.toBe(text);
	} else {
		expect(parsedExpectedText).toBe(text);
	}
}
