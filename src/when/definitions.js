import acceptCookieBanner from "../support/action/acceptCookieBanner";
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
import refresh from "../support/action/refresh";
import tophatLogin from "../support/action/tophatLogIn";
import focusElement from "../support/action/focusElement";

import { When } from "../support/utils";

// Initial steps taken from https://github.com/webdriverio/cucumber-boilerplate/blob/master/src/steps/given.js
export const stepDefinitions = [
	When(
		/^I (click|doubleclick) on the (link|button|element) "([^"]*)?"$/,
		clickElement
	).withDocs("(Double)click a link, button or element"),

	When(
		/^I (add|set) "([^"]*)?" to the inputfield "([^"]*)?"$/,
		setInputField
	).withDocs("Add or set the content of an input field"),

	When(/^I clear the inputfield "([^"]*)?"$/, clearInputField).withDocs(
		"Clear an input field"
	),

	When(
		/^I drag element "([^"]*)?" to element "([^"]*)?"$/,
		dragElement
	).withDocs("Drag a element to another element"),

	When(/^I submit the form "([^"]*)?"$/, submitForm).withDocs("Submit a form"),

	When(/^I pause for (\d+)ms$/, pause).withDocs(
		"Pause for a certain number of milliseconds"
	),

	When(
		/^I set a cookie "([^"]*)?" with the content "([^"]*)?"$/,
		setCookie
	).withDocs(
		"Set the content of a cookie with the given name to the given string"
	),

	When(/^I delete the cookie "([^"]*)?"$/, deleteCookie).withDocs(
		"Delete the cookie with the given name"
	),

	When(/^I press "([^"]*)?"$/, pressButton).withDocs(
		"Press a given key. You’ll find all supported characters [here](https://w3c.github.io/webdriver/webdriver-spec.html#keyboard-actions). To do that, the value has to correspond to a key from the table."
	),

	When(
		/^I (accept|dismiss) the (alertbox|confirmbox|prompt)$/,
		handleModal
	).withDocs("Accept or dismiss a modal window"),

	When(/^I enter "([^"]*)?" into the prompt$/, setPromptText).withDocs(
		"Enter a given text into a modal prompt"
	),

	When(/^I scroll to element "([^"]*)?"$/, scroll).withDocs(
		"Scroll to a given element"
	),

	When(
		/^I close the last opened (window|tab)$/,
		closeLastOpenedWindow
	).withDocs("Close the last opened browser window/tab"),

	When(
		/^I focus the last opened (window|tab)$/,
		focusLastOpenedWindow
	).withDocs("Focus the last opened browser window/tab"),

	When(
		/^I select the (\d+)(st|nd|rd|th) option for element "([^"]*)?"$/,
		selectOptionByIndex
	).withDocs("Select a option based on its index"),

	When(
		/^I select the option with the (name|value|text) "([^"]*)?" for element "([^"]*)?"$/,
		selectOption
	).withDocs("Select a option based on its name, value or visible text"),

	When(
		/^I move to element "([^"]*)?"(?: with an offset of (\d+),(\d+))*$/,
		moveToElement
	).withDocs("Move the mouse by an (optional) offset of the specified element"),

	When(/^I refresh$/, refresh).withDocs("Refresh the current page"),

	When(
		/^I log in to Accounts via TopHat with username "([A-Z0-9_]+)" and password "([A-Z0-9_]+)"$/,
		tophatLogin
	)
		.withOptions({
			wrapperOptions: {
				retry: 3,
			},
		})
		.withDocs(
			"Use TopHat in your application to log into Nice accounts. Username and Password should be names of environment variables "
		),

	When(/^I focus on the element "([^"]+)"$/, focusElement).withDocs(
		"Move focus to the given element"
	),

	When(/^I accept all cookies$/, acceptCookieBanner).withDocs(
		"Accept all cookies using the NICE cookie banner"
	),
];

export default stepDefinitions;
