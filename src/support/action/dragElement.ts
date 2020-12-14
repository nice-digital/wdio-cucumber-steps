/**
 * Drag a element to a given destination
 * @param  {String}   sourceSelector      The selector for the source element
 * @param  {String}   destinationSelector The selector for the destination element
 */
export async function dragElement(
	sourceSelector: string,
	destinationSelector: string
): Promise<void> {
	const sourceElement = await $(sourceSelector),
		destinationElement = await $(destinationSelector);
	await sourceElement.dragAndDrop(destinationElement);
}
