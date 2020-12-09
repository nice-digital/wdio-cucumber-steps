/**
 * Check the text of a modal
 * @param  {String}   modalType     The type of modal that is expected
 *                                  (alertbox, confirmbox or prompt)
 * @param  {String}   falseState    Whether to check if the text matches or not
 * @param  {String}   expectedText  The text to check against
 */
export async function checkModalText(
	modalType: string,
	falseState: string,
	expectedText: string
): Promise<void> {
	try {
		const text = await browser.getAlertText();

		if (falseState) {
			expect(text).not.toBe(expectedText);
		} else {
			expect(text).toBe(expectedText);
		}
	} catch (e) {
		fail(`A ${modalType} was not opened when it should have been opened`);
	}
}
