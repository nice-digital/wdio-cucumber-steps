import acceptCookieBanner from "../../../src/support/action/acceptCookieBanner";

describe("acceptCookieBanner", () => {

	beforeEach(() => {
		global.browser = {
			waitForExist: jest.fn(),
			click: jest.fn(),
			isVisible: () => true,
		};
	});

	it("should wait for the cookie control panel to exist", () => {
		acceptCookieBanner();
		expect(global.browser.waitForExist).toHaveBeenCalledWith("body #ccc", 2000);
	});

	it("should click accept when the accept button is available", () => {
		acceptCookieBanner();
		expect(global.browser.click).toHaveBeenCalledWith("button.ccc-accept-button");
	})


});
