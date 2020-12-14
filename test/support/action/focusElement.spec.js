import focusElement from "../../../src/support/action/focusElement";

describe("focusElement", () => {
	beforeEach(() => {
		global.browser = {
			execute: jest.fn(),
		};
	});

	it("should set focus on given element", () => {
		focusElement("[href='#content-start']");

		expect(global.browser.execute).toHaveBeenCalledTimes(1);
		expect(global.browser.execute).toHaveBeenCalledWith(
			"document.querySelector(\"[href='#content-start']\").focus()"
		);
	});
});
