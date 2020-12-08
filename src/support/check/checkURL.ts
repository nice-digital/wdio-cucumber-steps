import { expect } from "chai";

/**
 * Check the URL of the given browser window
 * @param  {String}   falseCase   Whether to check if the URL matches the
 *                                expected value or not
 * @param  {String}   expectedUrl The expected URL to check against
 */
export async function checkUrl(
	falseCase: string,
	expectedUrl: string
): Promise<void> {
	const currentUrl = await browser.getUrl();

	if (falseCase) {
		expect(currentUrl).to.not.equal(
			expectedUrl,
			`expected url not to be "${currentUrl}"`
		);
	} else {
		expect(currentUrl).to.equal(
			expectedUrl,
			`expected url to be "${expectedUrl}" but found "${currentUrl}"`
		);
	}
}
