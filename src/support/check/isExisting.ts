/**
 * Check if the given element exists in the current DOM
 * @param  {String}   selector  Element selector
 * @param  {String}   falseCase Whether to check if the element exists or not
 */
export async function isExisting(
	selector: string,
	falseCase: string
): Promise<void> {
	const elements = await $$(selector);

	if (falseCase) {
		expect(elements).toBeElementsArrayOfSize(0);
	} else {
		expect(elements).toBeElementsArrayOfSize({ gte: 1 });
	}
}
