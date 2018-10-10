//these tests need to be reworked!
import checkModalText from "src/support/check/checkModalText";

describe("checkModalText", () => {
	let expectToEqual;
	let expectToNotEqual;
	let expectToThrow;
	let expectToNotThrow;

	beforeEach(() => {
		global.browser = {
			alertText: jest.fn(() => "test"),
		};

		expectToEqual = jest.fn();
		expectToNotEqual = jest.fn();
		expectToThrow = jest.fn();
		expectToNotThrow = jest.fn();

		// mocking of the expect function
		global.expect = jest.fn(() => ({
			to: {
				not: {
					equal: expectToNotEqual,
					throw: expectToNotThrow,
				},
				equal: expectToEqual,
				throw: expectToThrow,
			},
		}));
	});

	it("Should test if alertText contains the given value", () => {
		checkModalText("alertbox", false, "test");

		_expect(expectToEqual).toHaveBeenCalledTimes(1);
		_expect(expectToEqual)
			.toHaveBeenCalledWith(
				"test",
				"Expected the text of alertbox to equal " +
                "\"test\", instead found \"undefined\""
			);
	});

	it("Should test if alertText does not contain the given value", () => {
		checkModalText("confirmbox", true, "test");

		_expect(expectToNotEqual).toHaveBeenCalledTimes(1);
		_expect(expectToNotEqual)
			.toHaveBeenCalledWith(
				"test",
				"Expected the text of confirmbox not to equal " +
                "\"test\""
			);
	});

	it("Should test if alertText does not contain the given value", () => {
		global.browser.alertText = null;

		//_expect(expectToThrow).toHaveBeenCalled();
		_expect(expectToEqual).not.toHaveBeenCalled();
		_expect(expectToNotEqual).not.toHaveBeenCalled();
	});
});
