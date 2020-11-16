/**
 * Focus on the given element
 * @param  {String}   selector Element selector
 */
export function focusElement(selector: string): void {
	/**
	 * Element to focus on
	 * @type {string}
	 */
	browser.execute(`document.querySelector("${selector}").focus()`);
}
// module.exports = (element) => {
// 	/**
//      * Element to focus on
//      * @type {String}
//      */
// 	browser.execute(`document.querySelector("${element}").focus()`);
// };
