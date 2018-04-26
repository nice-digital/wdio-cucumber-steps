import refresh from "src/support/action/refresh";

describe("refresh", () => {
	beforeEach(() => {
		global.browser = {
			refresh: jest.fn(),
		};
	});
	it("should call refresh on the browser object", () => {
		refresh();

		expect(global.browser.refresh).toBeCalled();
	});
});
