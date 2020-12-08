/**
 * Move to the given element with an optional offset on a X and Y position
 * @param  {String}   selector  Element selector
 * @param  {String}   x        X coordinate to move to
 * @param  {String}   y        Y coordinate to move to
 */
export async function moveTo(
	selector: string,
	x: string,
	y: string
): Promise<void> {
	const xOffset = parseInt(x, 10) || undefined;
	const yOffset = parseInt(y, 10) || undefined;

	const element = await $(selector);

	await element.moveTo({ xOffset, yOffset });
}
