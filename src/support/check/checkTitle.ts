/**
 * Check the title of the current browser window
 * @param  {Type}     falseCase     Whether to check if the title matches the
 *                                  expected value or not
 * @param  {Type}     expectedTitle The expected title
 */
export async function checkTitle(
	falseCase: string,
	expectedTitle: string
): Promise<void> {
	if (falseCase) {
		expect(browser).not.toHaveTitle(expectedTitle);
	} else {
		expect(browser).toHaveTitle(expectedTitle);
	}
}
