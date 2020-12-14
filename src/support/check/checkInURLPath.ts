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
	if (falseCase) {
		expect(browser).not.toHaveUrlContaining(expectedUrlPart);
	} else {
		expect(browser).toHaveUrlContaining(expectedUrlPart);
	}
}
