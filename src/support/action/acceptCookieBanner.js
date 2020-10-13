/**
 * Accept all cookies using the NICE cookie banner.
 * We use this as the cookie banner blocks clicks.
 */
module.exports = () => {
		browser.waitForExist("body #ccc", 2000);
		const isVisible = browser.isVisible("button.ccc-accept-button");
		if (isVisible) {
			browser.click("button.ccc-accept-button");
		}
	 };


