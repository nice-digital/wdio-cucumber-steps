import globalnavLogIn from "../../../src/support/action/globalnavLogIn";
import loginModule from "../../../src/support/action/login";

jest.mock("../../../src/support/action/login");

describe("globalnavLogin", () => {

	var callOrder = [];
	let login;

	beforeEach(() => {
		callOrder = [];

		login = jest.fn();
		loginModule.mockImplementation(login);

		global.browser = {
			getCookie: jest.fn(() => {
				callOrder.push("getCookie");
				return false;
			}),
			waitForExist: jest.fn(() => {
				callOrder.push("waitForExist");
			}),
			click: jest.fn(() => {
				callOrder.push("click");
			})
		};
	});

	it("should do nothing if already signed in", () => {
		global.browser.getCookie = jest.fn(() => true);

		globalnavLogIn();

		expect(global.browser.waitForExist).not.toHaveBeenCalled();
		expect(global.browser.click).not.toHaveBeenCalled();

		expect(login).not.toHaveBeenCalled();
	});

	it("waits for globalnav to exist before clicking login when the window is big so menu icon is not shown", () => {
		global.browser.isVisible = () => false;
		globalnavLogIn();

		
		expect(global.browser.click).toHaveBeenCalledTimes(1);
		expect(global.browser.click).toHaveBeenCalledWith("#header-menu-button+* a[href*='accounts.nice.org.uk/signin']");
		expect(callOrder).toEqual(["getCookie", "waitForExist","click"]);
	});

	it("waits for globalnav to exist before clicking login when the window is small so menu item is shown", () => {
		global.browser.isVisible = () => true;
		globalnavLogIn();

		expect(global.browser.waitForExist).toHaveBeenCalledTimes(1);
		expect(global.browser.waitForExist).toHaveBeenCalledWith("header[aria-label='Site header']");

		expect(global.browser.click).toHaveBeenCalledTimes(2);
		expect(global.browser.click).toHaveBeenCalledWith("#header-menu-button");
		expect(global.browser.click).toHaveBeenCalledWith("#header-menu a[href*='accounts.nice.org.uk/signin']");		
		expect(callOrder).toEqual(["getCookie", "waitForExist", "click", "click"]);
	});

	it("logins in to Accounts with username and password", () => {
		global.browser.isVisible = () => true;

		globalnavLogIn("JoeBloggs", "pwd1");

		expect(login).toHaveBeenCalledTimes(1);
		expect(login).toHaveBeenCalledWith("JoeBloggs", "pwd1");
	});

});