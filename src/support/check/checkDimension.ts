/**
 * Check the dimensions of the given element
 * @param  {String}   selector     Element selector
 * @param  {String}   falseCase    Whether to check if the dimensions match or not
 * @param  {String}   expectedSize Expected size
 * @param  {String}   dimension    Dimension to check (broad or tall)
 */
export async function checkDimension(
	selector: string,
	falseCase: string,
	expectedSize: string,
	dimension: "broad" | "tall"
): Promise<void> {
	const element = await $(selector),
		elementSize = await element.getSize(),
		originalSize =
			dimension === "broad" ? elementSize.width : elementSize.height,
		intExpectedSize = parseInt(expectedSize, 10);

	if (falseCase) {
		expect(originalSize).not.toBe(intExpectedSize);
	} else {
		expect(originalSize).toBe(intExpectedSize);
	}
}
