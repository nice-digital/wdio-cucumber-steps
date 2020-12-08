/**
 * Focus on the given element
 * @param  {String}   selector Element selector
 */
export async function focusElement(selector: string): Promise<void> {
	await browser.execute(`document.querySelector("${selector}").focus()`);
}
