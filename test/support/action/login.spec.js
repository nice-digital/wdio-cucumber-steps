import login from "../../../src/support/action/login";

describe("login", () => {
	beforeEach(() => {
		global.browser = {
			waitForExist: jest.fn(),
			setValue: jest.fn(),
			submitForm: jest.fn(),
		};
	});

	it("should wait for the email input to exist", () => {
		login();
		expect(global.browser.waitForExist).toBeCalledWith("input[name='Email']", 5000);
	});

	it("should set the form inputs to the supplied username and password", ()=>{
		login("username", "password");
		expect(global.browser.setValue).toHaveBeenCalledWith("input[name='Email']", process.env["username"]);
		expect(global.browser.setValue).toHaveBeenCalledWith("input[name='Password']", process.env["password"]);
	});

	it("should submit the form", ()=> {
		login();
		expect(global.browser.submitForm).toHaveBeenCalledWith("input[name='Email']");
	});

});
