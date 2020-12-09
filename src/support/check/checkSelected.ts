/**
 * Check the selected state of the given element
 * @param  {String}   selector   Element selector
 * @param  {String}   falseCase Whether to check if the element is elected or not
 */
export async function checkSelected(
	selector: string,
	falseCase: string
): Promise<void> {
	const element = await $(selector);

	if (falseCase) {
		expect(element).not.toBeSelected();
	} else {
		expect(element).toBeSelected();
	}
}
