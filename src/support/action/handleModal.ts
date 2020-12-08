/*! https://github.com/webdriverio/cucumber-boilerplate/blob/master/src/support/action/handleModal.js */
/**
 * Handle a modal
 * @param  {String}   action    Action to perform on the modal (accept, dismiss)
 * @param  {String}   modalType Type of modal (alertbox, confirmbox, prompt)
 */
export async function handleModal(
	action: "accept" | "dismiss",
	modalType: "alertbox" | "confirmbox" | "prompt"
): Promise<void> {
	let command: "acceptAlert" | "dismissAlert" =
		action == "accept" ? "acceptAlert" : "dismissAlert";

	// Alert boxes can't be dismissed, this causes Chrome to crash during tests
	if (modalType === "alertbox") {
		command = "acceptAlert";
	}

	await browser[command]();
}
