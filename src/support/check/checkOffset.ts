/**
 * Check the offset of the given element
 * @param  {String}   selector          Element selector
 * @param  {String}   falseCase         Whether to check if the offset matches or not
 * @param  {String}   expectedPosition  The position to check against
 * @param  {String}   axis              The axis to check on (x or y)
 */
export async function checkOffset(
	selector: string,
	falseCase: string,
	expectedPosition: string,
	axis: "x" | "y"
): Promise<void> {
	const element = await $(selector);
	const location = await element.getLocation(axis);
	const intExpectedPosition = parseFloat(expectedPosition);

	if (falseCase) {
		expect(location).not.toEqual(intExpectedPosition);
	} else {
		expect(location).toEqual(intExpectedPosition);
	}
}
