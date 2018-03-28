/*! https://github.com/webdriverio/cucumber-boilerplate/blob/master/src/support/action/deleteCookie.js */
/**
 * Delete a cookie
 * @param  {String}   name The name of the cookie to delete
 */
module.exports = (name) => {
	browser.deleteCookie(name);
};
