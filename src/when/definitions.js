import clearInputField from "../support/action/clearInputField";
import clickElement from "../support/action/clickElement";
import closeLastOpenedWindow from "../support/action/closeLastOpenedWindow";
import deleteCookie from "../support/action/deleteCookie";
import dragElement from "../support/action/dragElement";
import focusLastOpenedWindow from "../support/action/focusLastOpenedWindow";
import handleModal from "../support/action/handleModal";
import moveToElement from "../support/action/moveToElement";
import pause from "../support/action/pause";
import pressButton from "../support/action/pressButton";
import scroll from "../support/action/scroll";
import selectOption from "../support/action/selectOption";
import selectOptionByIndex from "../support/action/selectOptionByIndex";
import setCookie from "../support/action/setCookie";
import setInputField from "../support/action/setInputField";
import setPromptText from "../support/action/setPromptText";
import submitForm from "../support/action/submitForm";
import debugWhen from "../support/action/debugWhen";

// Initial steps taken from https://github.com/webdriverio/cucumber-boilerplate/blob/master/src/steps/when.js
const stepDefinitions = [
	{
		regex: /^I (click|doubleclick) on the (link|button|element) "([^"]*)?"$/,
		fn: clickElement,
		title: "(Double)click a link, button or element"
	},
	{
		regex: /^I (add|set) "([^"]*)?" to the inputfield "([^"]*)?"$/,
		fn: setInputField,
		title: "Add or set the content of an input field"
	},
	{
		regex: /^I clear the inputfield "([^"]*)?"$/,
		fn: clearInputField,
		title: "Clear an input field"
	},
	{
		regex: /^I drag element "([^"]*)?" to element "([^"]*)?"$/,
		fn: dragElement,
		title: "Drag a element to another element"
	},
	{
		regex: /^I submit the form "([^"]*)?"$/,
		fn: submitForm,
		title: "Submit a form"
	},
	{
		regex: /^I pause for (\d+)ms$/,
		fn: pause,
		title: "Pause for a certain number of milliseconds"
	},
	{
		regex: /^I set a cookie "([^"]*)?" with the content "([^"]*)?"$/,
		fn: setCookie,
		title: "Set the content of a cookie with the given name to the given string"
	},
	{
		regex: /^I delete the cookie "([^"]*)?"$/,
		fn: deleteCookie,
		title: "Delete the cookie with the given name"
	},
	{
		regex: /^I press "([^"]*)?"$/,
		fn: pressButton,
		title: "Press a given key. You’ll find all supported characters [here](https://w3c.github.io/webdriver/webdriver-spec.html#keyboard-actions). To do that, the value has to correspond to a key from the table."
	},
	{
		regex: /^I (accept|dismiss) the (alertbox|confirmbox|prompt)$/,
		fn: handleModal,
		title: "Accept or dismiss a modal window"
	},
	{
		regex: /^I enter "([^"]*)?" into the prompt$/,
		fn: setPromptText,
		title: "Enter a given text into a modal prompt"
	},
	{
		regex: /^I scroll to element "([^"]*)?"$/,
		fn: scroll,
		title: "Scroll to a given element"
	},
	{
		regex: /^I close the last opened (window|tab)$/,
		fn: closeLastOpenedWindow,
		title: "Close the last opened browser window/tab"
	},
	{
		regex: /^I focus the last opened (window|tab)$/,
		fn: focusLastOpenedWindow,
		title: "Focus the last opened browser window/tab"
	},
	{
		regex: /^I select the (\d+)(st|nd|rd|th) option for element "([^"]*)?"$/,
		fn: selectOptionByIndex,
		title: "Select a option based on its index"
	},
	{
		regex: /^I select the option with the (name|value|text) "([^"]*)?" for element "([^"]*)?"$/,
		fn: selectOption,
		title: "Select a option based on its name, value or visible text"
	},
	{
		regex: /^I move to element "([^"]*)?"(?: with an offset of (\d+),(\d+))*$/,
		fn: moveToElement,
		title: "Move the mouse by an (optional) offset of the specified element"
	},
	/* {
		regex: /^debug$/,
		fn: debugWhen,
		title: "Add a breakpoint to a feature file"
	} */
];

export default stepDefinitions;
