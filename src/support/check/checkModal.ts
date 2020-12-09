/**
 * Check if a modal was opened
 * @param  {String}   modalType  The type of modal that is expected (alertbox,
 *                               confirmbox or prompt)
 * @param  {String}   falseState Whether to check if the modal was opened or not
 */
export async function checkModal(
	_modalType: "alertbox" | "confirmbox" | "prompt",
	falseState: string
): Promise<void> {
	let promptText = "";

	try {
		promptText = await browser.getAlertText();

		if (falseState) {
			expect(promptText).not.toBe(null);
		}
	} catch (e) {
		if (!falseState) {
			expect(promptText).toBe(null);
		}
	}
}
