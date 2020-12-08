/*! https://github.com/webdriverio/cucumber-boilerplate/blob/master/src/support/action/setPromptText.js */
import { assert } from "chai";
/**
 * Set the text of the current prompt
 * @param  {String}   modalText The text to set to the prompt
 */
export async function setPromptText(modalText: string): Promise<void> {
	try {
		await browser.sendAlertText(modalText);
	} catch (e) {
		assert(e, "A prompt was not open when it should have been open");
	}
}
