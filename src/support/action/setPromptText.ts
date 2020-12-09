/*! https://github.com/webdriverio/cucumber-boilerplate/blob/master/src/support/action/setPromptText.js */
/**
 * Set the text of the current prompt
 * @param  {String}   modalText The text to set to the prompt
 */
export async function setPromptText(modalText: string): Promise<void> {
	try {
		await browser.sendAlertText(modalText);
	} catch (e) {
		fail("A prompt was not open when it should have been open " + e);
	}
}
