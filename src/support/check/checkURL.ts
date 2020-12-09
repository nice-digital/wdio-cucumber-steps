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
	if (falseCase) {
		expect(browser).not.toHaveUrl(expectedUrl);
	} else {
		expect(browser).toHaveUrl(expectedUrl);
	}
}
