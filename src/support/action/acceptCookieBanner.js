// To dismiss cookie banner, as it blocks clicks

module.exports = (text) => {

	browser.pause(2000);

	const cookieControl = $("body #ccc");
		if (cookieControl.isVisible("button=Accept all cookies")) {
		cookieControl.$("button=Accept all cookies").click();
	}
		else (browser.refresh())

};
