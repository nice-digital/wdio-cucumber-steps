import checkForAccessibilityIssues, { getErrorMessage } from "../../../src/support/check/checkForAccessibilityIssues";
import { source as axeSource } from "axe-core";

const _expect = global.expect;

describe("checkForAccessibilityIssues", () => {
	beforeEach(() => {
		global.browser = {
			execute: jest.fn(),
			executeAsync: jest.fn(() => {
				return { value: { violations: [] } };
			}),
			getUrl: jest.fn()
		};

		global.axe = {
			run: jest.fn()
		};

		global.expect = jest.fn(() => ({
			to: {
				eql: jest.fn()
			}
		}));
	});

	it("Should inject axe-core into the browser", () => {
		checkForAccessibilityIssues();
		_expect(global.browser.execute).toHaveBeenCalledTimes(1);
		_expect(global.browser.execute).toHaveBeenCalledWith(axeSource);
	});

	it("Should call axe once", () => {
		global.browser.executeAsync = jest.fn((func) => {
			func();
			return { value: { violations: [] } };
		});
		checkForAccessibilityIssues();
		_expect(global.axe.run).toHaveBeenCalledTimes(1);
	});

	describe("Accessibility Levels", () => {

		const a11yLevelTest = (level, expected) => {
			global.browser.executeAsync = jest.fn((func, levels) => {
				func(levels);
				return { value: { violations: [] } };
			});
			checkForAccessibilityIssues(level);
			_expect(global.axe.run.mock.calls[0][0].runOnly.values).toEqual(expected);
		};

		it("Should call axe with all three levels (wcag2a, wcag2aa, best-practice)", () => {
			a11yLevelTest(undefined, ["wcag2a", "wcag2aa", "best-practice"]);
		});

		it("Should call axe with two levels (wcag2a, best-practice)", () => {
			a11yLevelTest("A", ["wcag2a", "best-practice"]);
		});

		it("Should call axe with two levels (wcag2aa, best-practice)", () => {
			a11yLevelTest("AA", ["wcag2aa", "best-practice"]);
		});
	});

	describe("Axe run callback", () => {

		const axeCallbackTest = (err, results, expected) => {
			const done = jest.fn();

			global.browser.executeAsync = jest.fn((func) => {
				func(undefined, done);
				return { value: { violations: [] } };
			});

			global.axe.run = jest.fn((options, callback) => {
				callback(err, results);
			});

			checkForAccessibilityIssues();
			_expect(done).toHaveBeenCalledTimes(1);
			_expect(done).toHaveBeenCalledWith(expected);
		};

		it("Should run axe and return error", () => {
			const err = new Error("My error message");
			axeCallbackTest(err, null, err);
		});

		it("Should run axe and return results", () => {
			const results = "Results";
			axeCallbackTest(null, results, results);
		});
	});

	describe("Violation assertions", () => {

		it("Should call expect with empty violations", () => {
			checkForAccessibilityIssues();
			_expect(expect).toHaveBeenCalledTimes(1);
			_expect(expect).toHaveBeenCalledWith([], getErrorMessage([]));
		});

		it("Should call expect with violations", () => {
			const violations =  [
				{ nodes: [ { html: "A" },  { html: "B" } ] },
				{ nodes: [ { html: "C" } ] }
			];

			global.browser.executeAsync = jest.fn(() => {
				return { value: { violations: violations} };
			});

			checkForAccessibilityIssues();
			_expect(expect).toHaveBeenCalledTimes(1);
			_expect(expect).toHaveBeenCalledWith(violations, getErrorMessage(violations));
		});
	});
});
