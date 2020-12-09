
/**
 * Check if the given element exists in the DOM one or more times
 * @param  {String}  selector  Element selector
 * @param  {Boolean} falseCase Check if the element (does not) exists
 * @param  {Number}  exactly  Check if the element exists exactly this number
 *                            of times
 */
export async function checkIfElementExists(
	selector: string,
	falseCase?: boolean,
	exactly?: number
): Promise<void> {
	const elements = await $$(selector);

	if (falseCase === true) {
		expect(elements).toBeElementsArrayOfSize(0)
	} else if (exactly) {
		expect(elements).toBeElementsArrayOfSize(exactly)
	} else {
		expect(elements).toBeElementsArrayOfSize({ gte: 1 });
	}
}
