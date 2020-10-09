/*! https://github.com/webdriverio/cucumber-boilerplate/blob/master/src/support/action/acceptCookieBanner.js */
/**
 * Accept the settings from the cookie banner
 * @param  {String}   element Element selector
 */

 // To dismiss cookie banner, as it blocks clicks

 module.exports = (text) => {

	browser.waitForExist('#global-nav-header', 2000)

	const cookieControl = $("body #ccc");
	if (cookieControl.isVisible("button.ccc-accept-button")) {
	cookieControl.$("button.ccc-accept-button").click();

	}
 };
