/**
 * Check if the given element is visible inside the current viewport
 * @param  {String}   selector   Element selector
 * @param  {String}   falseCase Whether to check if the element is visible
 *                              within the current viewport or not
 */
export async function checkWithinViewport(
	selector: string,
	falseCase: string
): Promise<void> {
	const element = await $(selector);

	if (falseCase) {
		expect(element).not.toBeDisplayedInViewport();
	} else {
		expect(element).toBeDisplayedInViewport();
	}
}
