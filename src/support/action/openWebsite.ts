/*! https://github.com/webdriverio/cucumber-boilerplate/blob/master/src/support/action/openWebsite.js */
/**
 * Open the given URL
 * @param  {String}   type Type of navigation (url or site)
 * @param  {String}   page The URL to navigate to
 */
export function openWebsite(type: "url" | "site", page: string): void {
	const url = type === "url" ? page : browser.options.baseurl + page;

	browser.url(url);
}
// module.exports = (type, page) => {
// 	/**
//      * The URL to navigate to
//      * @type {String}
//      */
// 	const url = (type === "url") ? page : browser.options.baseUrl + page;

// 	browser.url(url);
// };
