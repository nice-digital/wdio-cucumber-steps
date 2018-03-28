/*! https://github.com/webdriverio/cucumber-boilerplate/blob/master/src/support/action/pause.js */
/**
 * Pause execution for a given number of milliseconds
 * @param  {String}   ms   Number of milliseconds to pause
 */
module.exports = (ms) => {
	/**
     * Number of milliseconds
     * @type {Int}
     */
	const intMs = parseInt(ms, 10);

	browser.pause(intMs);
};
