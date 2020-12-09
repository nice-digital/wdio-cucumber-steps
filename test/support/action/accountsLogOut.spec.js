import accountsLogout from "../../../src/support/action/accountsLogout";

describe("accountLogin", () => {
	const callOrder = [];

	beforeEach(() => {
		global.browser = {
			deleteCookie: jest.fn(() => callOrder.push("deleteCookie")),
			refresh: jest.fn(() => callOrder.push("refresh")),
		};
	});

	it("should delete 2 Accounts cookies then refresh the page", () => {
		accountsLogout();
		expect(global.browser.deleteCookie).toHaveBeenCalledTimes(2);
		expect(global.browser.deleteCookie).toHaveBeenNthCalledWith(
			1,
			"__nrpa_2.2"
		);
		expect(global.browser.deleteCookie).toHaveBeenNthCalledWith(
			2,
			"__ngat_1.2"
		);
		expect(global.browser.refresh).toHaveBeenCalledTimes(1);

		expect(callOrder).toEqual(["deleteCookie", "deleteCookie", "refresh"]);
	});
});
