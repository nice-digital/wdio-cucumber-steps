/*! https://github.com/webdriverio/cucumber-boilerplate/blob/master/src/support/action/selectOptionByIndex.js */
/**
 * Select a option from a select element by it's index
 * @param  {String}   index      The index of the option
 * @param  {String}   obsolete   The ordinal indicator of the index (unused)
 * @param  {String}   selector Element selector
 *
 * @todo  merge with selectOption
 */
export async function selectOptionByIndex(
	index: string,
	_obsolete: string,
	selector: string
): Promise<void> {
	const optionIndex = parseInt(index, 10),
		element = await $(selector);
	await element.selectByIndex(optionIndex);
}
