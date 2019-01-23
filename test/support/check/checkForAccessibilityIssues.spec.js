import checkForAccessibilityIssues from "src/support/check/checkForAccessibilityIssues";
import { source as axeSource } from "axe-core";

describe("checkForAccessibilityIssues", () => {
	beforeEach(() => {
		global.browser = {
			execute: jest.fn(),
			executeAsync: jest.fn(() => {
				return { value: { violations: [] } };
            }),
            getUrl: jest.fn()
		};

		global.expect = jest.fn(() => ({
			to: {
				equal: jest.fn()
			}
		}));
	});

	it("Should inject axe-core into the browser", () => {
		checkForAccessibilityIssues();
        _expect(global.browser.execute).toHaveBeenCalledTimes(1);
        _expect(global.browser.execute).toHaveBeenCalledWith(axeSource);
	});
});
