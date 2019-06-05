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
			isVisible: 
		};
	});

	it("should do nothing if already signed in", () => {
		global.browser.getCookie = jest.fn(() => true);

		globalnavLogIn();

		expect(global.browser.waitForExist).not.toHaveBeenCalled();
		expect(global.browser.click).not.toHaveBeenCalled();

		expect(login).not.toHaveBeenCalled();
	});

	it("waits for globalnav to exist before clicking login", () => {
		globalnavLogIn();

		expect(global.browser.waitForExist).toHaveBeenCalledTimes(1);
		expect(global.browser.waitForExist).toHaveBeenCalledWith(".nice-tophat");

		expect(global.browser.click).toHaveBeenCalledTimes(1);
		expect(global.browser.click).toHaveBeenCalledWith("body #signin");
		expect(callOrder).toEqual(["getCookie", "waitForExist", "click"]);
	});

	// it("logins in to Accounts with username and password", () => {
	// 	tophatLogIn("JoeBloggs", "pwd1");

	// 	expect(login).toHaveBeenCalledTimes(1);
	// 	expect(login).toHaveBeenCalledWith("JoeBloggs", "pwd1");
	// });

});