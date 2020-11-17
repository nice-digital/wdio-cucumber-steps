/*! https://github.com/webdriverio/cucumber-boilerplate/blob/master/src/support/action/submitForm.js */
/**
 * Submit the given form
 * @param  {String}   form Form element selector
 */
export function submitForm(form: string): void {
	browser.submitForm(form);
}
