/**
 * Check if the given selector is enabled
 * @param  {String}   selector   Element selector
 * @param  {String}   falseCase Whether to check if the given selector is enabled or not
 */
export async function isEnabled(
	selector: string,
	falseCase: string
): Promise<void> {
	const element = await $(selector);

	if (falseCase) {
		expect(element).not.toBeEnabled();
	} else {
		expect(element).toBeEnabled();
	}
}
