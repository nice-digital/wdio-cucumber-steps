import { acceptCookieBanner } from "@src/support/action/acceptCookieBanner";

describe("acceptCookieBanner", () => {
	const waitForExist = jest.fn(),
		click = jest.fn(),
		isDisplayed = jest.fn().mockResolvedValue(true);

	beforeEach(() => {
		jest.clearAllMocks();

		global.$ = jest.fn().mockResolvedValue({
			waitForExist,
			$: jest.fn().mockResolvedValue({
				isDisplayed,
				click,
			}),
		});
	});

	it("should wait for the cookie control panel to exist", async () => {
		await acceptCookieBanner();
		expect(waitForExist).toHaveBeenCalledWith({
			timeout: expect.any(Number),
		});
	});

	it("should click accept when the accept button is available", async () => {
		await acceptCookieBanner();
		expect(click).toHaveBeenCalledTimes(1);
	});

	it("should not click accept when the accept button is hidden", async () => {
		isDisplayed.mockResolvedValueOnce(false);
		await acceptCookieBanner();
		expect(click).not.toHaveBeenCalled();
	});
});
