import closeAllButFirstTab from "../../../src/support/action/closeAllButFirstTab";

describe("closeAllButFirstTab", () => {
	beforeEach(() => {
		global.browser = {
			windowHandles: jest.fn(() => ({
				value: ["one", "two", "three"],
			})),
			switchTab: jest.fn(() => ({
				// eslint-disable-next-line @typescript-eslint/no-empty-function
				close() {},
			})),
		};
	});

	it("should call closeAllButFirstTab on the browser", () => {
		closeAllButFirstTab("");

		expect(global.browser.windowHandles).toHaveBeenCalledTimes(1);

		expect(global.browser.switchTab).toHaveBeenCalledTimes(2);
	});
});
