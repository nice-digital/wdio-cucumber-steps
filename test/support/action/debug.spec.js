import debug from "../../../src/support/action/debug";

describe("debug", () => {
	beforeEach(() => {
		global.browser = {
			debug: jest.fn(),
		};
	});
	it("should call debug on the browser object", () => {
		debug();

		expect(global.browser.debug).toBeCalled();
	});
});
