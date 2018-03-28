/*! https://github.com/webdriverio/cucumber-boilerplate/blob/master/src/support/check/checkIsEmpty.js */
import checkContainsAnyText from "./checkContainsAnyText";

module.exports = (elementType, element, falseCase) => {
	let newFalseCase = true;

	if (typeof falseCase === "function") {
		newFalseCase = false;
	} else if (falseCase === " not") {
		newFalseCase = false;
	}

	checkContainsAnyText(elementType, element, newFalseCase);
};
