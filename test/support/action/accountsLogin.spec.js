import accountsLogin from "../../../src/support/action/accountsLogin.js";
import { getNICEAccountsUrl } from "../../../src/support/utils";
import login from "../../../src/support/action/login";
jest.mock("../../../src/support/action/login");

describe("accountLogin", () => {
	beforeEach(() => {
		global.browser = {
			url: jest.fn(),
			waitForExist: jest.fn(),
			setValue: jest.fn(),
			submitForm: jest.fn(),
			getCookie: jest.fn(() => true)
		};
	});

	it("should not call the get Nice accounts URL function if the cookie is not present", ()=> {
		accountsLogin();
		expect(global.browser.url).not.toHaveBeenCalled();
		expect(login).not.toHaveBeenCalled();
	});

	it("should call the get Nice accounts URL function if the cookie is not present", () => {
		global.browser.getCookie = jest.fn(() => null);
		accountsLogin("env", "username", "password");
		expect(global.browser.url).toHaveBeenCalled();
		expect(login).toHaveBeenCalledWith("username", "password");
	});

});
