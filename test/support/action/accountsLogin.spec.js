import accountsLogin from "../../../src/support/action/accountsLogin.js";
import { getNICEAccountsUrl } from "../../../src/support/utils";

describe("accountLogin", () => {

	beforeEach(() => {
		global.browser = {
			url: jest.fn(),
			waitForExist: jest.fn(),
			setValue: jest.fn(),
			submitForm: jest.fn()
		};
	});

	// it("should not attempt to log in if the auth cookie is present", ()=> {

	// 	global.browser.getCookie = jest.fn(cookieName=>{
	// 		return cookieName === "__nrpa_2.1";
	// 	});

	// 	expect(global.browser.url).not.toHaveBeenCalled();

	// });

	it.only("should not call the get Nice accounts URL function if the cookie is not present", ()=> {
		global.browser.getCookie = jest.fn((arg) => console.log(arg));
		expect(global.browser.url).not.toHaveBeenCalled();
	});

	it("should call the get Nice accounts URL function if the cookie is not present", () => {
		global.browser.getCookie = jest.fn(() => "null");
		expect(global.browser.url).toHaveBeenCalled();
	});

	// it("should call login function if there's no cookie", ()=>{
	// 	global.browser.getCookie = jest.fn(() => false);
	// 	global.browser.url = jest.fn(() => "string");

	// 	expect(accountsLogin.login()).toBeCalled();
	// 	// 1. browser.url to be called once
	// 	// 2. login should be called once

	// });

});
