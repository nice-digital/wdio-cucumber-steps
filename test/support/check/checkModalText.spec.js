//these tests need to be reworked!
import checkModalText from "../../../src/support/check/checkModalText";

const _expect = global.expect;

describe("checkModalText", () => {
	let expectToEqual;
	let expectToNotEqual;
	let expectToThrow;

	beforeEach(() => {
		global.browser = {
			alertText: jest.fn(() => "actual modal text"),
		};

		expectToEqual = jest.fn();
		expectToNotEqual = jest.fn();
		expectToThrow = jest.fn();

		// mocking of the expect function
		global.expect = jest.fn((arg) => {
			if (typeof arg === "function") {
				try {
					arg();
				} catch (e) {
					expectToThrow(e);
				}
			}
			return {
				to: {
					not: {
						equal: expectToNotEqual,
						throw: jest.fn(),
					},
					equal: expectToEqual,
					throw: expectToThrow,
				},
			};
		});
	});

	it("Should test if alertText contains the given value", () => {
		const txt = browser.alertText();
		checkModalText("alertbox", false, txt);

		_expect(expectToEqual).toHaveBeenCalledTimes(1);
		_expect(expectToEqual).toHaveBeenCalledWith(
			"actual modal text",
			`Expected the text of alertbox to equal "${txt}", instead found "${txt}"`
		);
	});

	it("Should test if alertText does not contain the given value", () => {
		checkModalText("confirmbox", true, "test");

		_expect(expectToNotEqual).toHaveBeenCalledTimes(1);
		_expect(expectToNotEqual).toHaveBeenCalledWith(
			"test",
			"Expected the text of confirmbox not to equal " + '"test"'
		);
	});
});
