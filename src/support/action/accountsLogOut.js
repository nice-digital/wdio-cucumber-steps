module.exports = () => {
	browser.deleteCookie("__nrpa_2.2");
	browser.deleteCookie("__ngat_1.2");
	browser.refresh();
};
