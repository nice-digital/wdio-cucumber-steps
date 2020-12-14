/**
 * Check the given property of the given element
 * @param  {String}   isCSS         Whether to check for a CSS property or an attribute
 * @param  {String}   attrName      The name of the attribute to check
 * @param  {String}   selector      Element selector
 * @param  {String}   falseCase     Whether to check if the value of the
 *                                  attribute matches or not
 * @param  {String}   expectedValue The value to match against
 */
export async function checkProperty(
	isCSS: string,
	attrName: string,
	selector: string,
	falseCase: string,
	expectedValue: string
): Promise<void> {
	const element = await $(selector),
		command = isCSS ? "getCSSProperty" : "getAttribute",
		attributeValue = await element[command](attrName);

	const value =
		typeof expectedValue === "number"
			? parseFloat(expectedValue)
			: expectedValue;

	// // when getting something with a color or font-weight WebdriverIO returns an
	// // object but we want to assert against a string
	// if (/(color|font-weight)/.exec(attrName)) {
	// 	attributeValue = (attributeValue as WebdriverIO.CSSProperty).value;
	// }
	if (falseCase) {
		expect(attributeValue).not.toEqual(value);
	} else {
		expect(attributeValue).toEqual(value);
	}
}
