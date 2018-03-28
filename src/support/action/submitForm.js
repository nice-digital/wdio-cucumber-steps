/*! https://github.com/webdriverio/cucumber-boilerplate/blob/master/src/support/action/submitForm.js */
/**
 * Submit the given form
 * @param  {String}   form Form element selector
 */
module.exports = (form) => {
	browser.submitForm(form);
};
