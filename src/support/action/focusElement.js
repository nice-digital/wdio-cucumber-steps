/**
 * Focus on the given element
 * @param  {String}   element Element selector
 */
module.exports = (element) => {
	/**
     * Element to focus on
     * @type {String}
     */
	browser.execute(`document.querySelector("${element}").focus()`);
};