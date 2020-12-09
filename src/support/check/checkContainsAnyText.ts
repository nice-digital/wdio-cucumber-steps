/**
 * Check if the given elements contains text
 * @param  {String}   elementType   Element type (element or button)
 * @param  {String}   selector       Element selector
 * @param  {String}   falseCase     Whether to check if the content contains
 *                                  text or not
 */
export async function checkContainsAnyText(
	elementType: string,
	selector: string,
	falseCase?: string | boolean
): Promise<void> {
	const element = await $(selector);

	let command: "getValue" | "getText" = "getValue";

	if (elementType === "button" || element.getAttribute("value") === null) {
		command = "getText";
	}

	let boolFalseCase;
	const text = await element[command]();

	if (typeof falseCase === "undefined") {
		boolFalseCase = false;
	} else {
		boolFalseCase = !!falseCase;
	}

	if (boolFalseCase) {
		expect(text).toEqual("");
	} else {
		expect(text).not.toEqual("");
	}
}
