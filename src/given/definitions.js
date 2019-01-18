import checkContainsAnyText from "../support/check/checkContainsAnyText";
import checkIsEmpty from "../support/check/checkIsEmpty";
import checkContainsText from "../support/check/checkContainsText";
import checkCookieContent from "../support/check/checkCookieContent";
import checkCookieExists from "../support/check/checkCookieExists";
import checkDimension from "../support/check/checkDimension";
import checkElementExists from "../support/check/checkElementExists";
import checkEqualsText from "../support/check/checkEqualsText";
import checkModal from "../support/check/checkModal";
import checkOffset from "../support/check/checkOffset";
import checkProperty from "../support/check/checkProperty";
import checkSelected from "../support/check/checkSelected";
import checkTitle from "../support/check/checkTitle";
import checkUrl from "../support/check/checkURL";
import closeAllButFirstTab from "../support/action/closeAllButFirstTab";
import compareText from "../support/check/compareText";
import isEnabled from "../support/check/isEnabled";
import isVisible from "../support/check/isVisible";
import openWebsite from "../support/action/openWebsite";
import resizeScreenSize from "../support/action/resizeScreenSize";
import debug from "../support/action/debug";
import accountsLogin from "../support/action/accountsLogin";
import accountsLogOut from "../support/action/accountsLogOut";

import { Given } from "../support/utils";

// Initial steps taken from https://github.com/webdriverio/cucumber-boilerplate/blob/master/src/steps/given.js
export const stepDefinitions = [
	Given(/^I open the (url|site) "([^"]*)?"$/, openWebsite)
		.withDocs("Open a site in the current browser window/tab"),

	Given(/^the element "([^"]*)?" is( not)* visible$/, isVisible)
		.withDocs("Check the (in)visibility of a element"),

	Given(/^the element "([^"]*)?" is( not)* enabled$/, isEnabled)
		.withDocs("Check if a element is (not) enabled"),

	Given(/^the element "([^"]*)?" is( not)* selected$/, checkSelected)
		.withDocs("Check if a element is (not) selected"),

	Given(/^the checkbox "([^"]*)?" is( not)* checked$/, checkSelected)
		.withDocs("Check if a checkbox is (not) checked"),

	Given(/^there is (an|no) element "([^"]*)?" on the page$/, checkElementExists)
		.withDocs("Check if a element (does not) exist"),

	Given(/^the title is( not)* "([^"]*)?"$/, checkTitle)
		.withDocs("Check the title of the current browser window/tab"),

	Given(/^the element "([^"]*)?" contains( not)* the same text as element "([^"]*)?"$/, compareText)
		.withDocs("Compare the text of two elements"),

	Given(/^the (button|element) "([^"]*)?"( not)* matches the text "([^"]*)?"$/, checkEqualsText)
		.withDocs("Check if a element equals the given text"),

	Given(/^the (button|element) "([^"]*)?"( not)* contains the text "([^"]*)?"$/, checkContainsText)
		.withDocs("Check if a element contains the given text"),

	Given(/^the (button|element) "([^"]*)?"( not)* contains any text$/, checkContainsAnyText)
		.withDocs("Check if a element does not contain any text"),

	Given(/^the (button|element) "([^"]*)?" is( not)* empty$/, checkIsEmpty)
		.withDocs("Check if a element is empty"),

	Given(/^the page url is( not)* "([^"]*)?"$/, checkUrl)
		.withDocs("Check the url of the current browser window/tab"),

	Given(/^the( css)* attribute "([^"]*)?" from element "([^"]*)?" is( not)* "([^"]*)?"$/, checkProperty)
		.withDocs("Check the value of a element's (css) attribute"),

	Given(/^the cookie "([^"]*)?" contains( not)* the value "([^"]*)?"$/, checkCookieContent)
		.withDocs("Check the value of a cookie"),

	Given(/^the cookie "([^"]*)?" does( not)* exist$/, checkCookieExists)
		.withDocs("Check the existence of a cookie"),

	Given(/^the element "([^"]*)?" is( not)* ([\d]+)px (broad|tall)$/, checkDimension)
		.withDocs("Check the width/height of a element"),

	Given(/^the element "([^"]*)?" is( not)* positioned at ([\d]+)px on the (x|y) axis$/, checkOffset)
		.withDocs("Check the position of a element"),

	Given(/^I have a screen that is ([\d]+) by ([\d]+) pixels$/, resizeScreenSize)
		.withDocs("Set the browser size to a given size"),

	Given(/^I have closed all but the first (window|tab)$/, closeAllButFirstTab)
		.withDocs("Close all but the first browser window/tab"),

	Given(/^a (alertbox|confirmbox|prompt) is( not)* opened$/, checkModal)
		.withDocs("Check if a modal is opened"),

	Given("I debug", debug)
		.withDocs("Add a breakpoint to stop the running browser and give you time to jump into it and check the state of your application ([WDIO Help on Debug](http://webdriver.io/api/utility/debug.html))."),

	Given(/^I am logged in to (beta|live|test) Accounts with username "([A-Z0-9_]+)" and password "([A-Z0-9_]+)"$/, accountsLogin)
		.withDocs("Log into a specific version of Nice accounts independently of using TopHat. Username and Password should be names of environment variables (eg, Given I am logged in to beta Accounts with username 'ACCOUNTS_EMAIL' and password 'ACCOUNTS_PASSWORD'). If this is used remember to redirect back to where you expect to be"),

	Given(/^I am logged out of NICE accounts$/, accountsLogOut)
		.withDocs("Log out of NICE accounts. If this is used remember to redirect back to where you expect to be")
];

export default stepDefinitions;
