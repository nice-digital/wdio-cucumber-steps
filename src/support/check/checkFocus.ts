/**
 * Check if the given element has the focus
 * @param  {String}   selector  Element selector
 * @param  {String}   falseCase Whether to check if the given element has focus
 *                              or not
 */
export async function checkFocus(
	selector: string,
	falseCase: string
): Promise<void> {
	const element = await $(selector);

	if (falseCase) expect(element).not.toBeFocused();
	else expect(element).toBeFocused();
}
