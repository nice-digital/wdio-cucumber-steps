/**
 * Accept all cookies using the NICE cookie banner.
 * We use this as the cookie banner blocks clicks.
 */
 module.exports = () => {

	browser.waitForExist("body #ccc", 2000)

	const cookieControl = $("body #ccc");
	if (cookieControl.isVisible("button.ccc-accept-button")) {
		cookieControl.$("button.ccc-accept-button").click();
	}
 };
