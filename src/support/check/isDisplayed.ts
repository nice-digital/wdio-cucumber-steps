/**
 * Check if the given element is (not) visible
 * @param  {String}   selector   Element selector
 * @param  {String}   falseCase Check for a visible or a hidden element
 */
export async function isDisplayed(
	selector: string,
	falseCase: string
): Promise<void> {
	const element = await $(selector);

	if (falseCase) {
		expect(element).not.toBeDisplayed();
	} else {
		expect(element).toBeDisplayed();
	}
}
