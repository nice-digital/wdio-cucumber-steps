import { expect } from "chai";

/**
 * Check if the given string is in the URL path
 * @param  {String}   falseCase       Whether to check if the given string is in
 *                                    the URL path or not
 * @param  {String}   expectedUrlPart The string to check for
 */
export async function checkInURLPath(
	falseCase: string,
	expectedUrlPart: string
): Promise<void> {
	const currentUrl = await browser.getUrl();

	if (falseCase) {
		expect(currentUrl).to.not.contain(
			expectedUrlPart,
			`Expected URL "${currentUrl}" not to contain ` + `"${expectedUrlPart}"`
		);
	} else {
		expect(currentUrl).to.contain(
			expectedUrlPart,
			`Expected URL "${currentUrl}" to contain "${expectedUrlPart}"`
		);
	}
}
