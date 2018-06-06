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

// Initial steps taken from https://github.com/webdriverio/cucumber-boilerplate/blob/master/src/steps/given.js
const stepDefinitions = [
	{
		regex: /^I open the (url|site) "([^"]*)?"$/,
		fn: openWebsite,
		title: "Open a site in the current browser window/tab"
	},
	{
		regex: /^the element "([^"]*)?" is( not)* visible$/,
		fn: isVisible,
		title: "Check the (in)visibility of a element"
	},
	{
		regex: /^the element "([^"]*)?" is( not)* enabled$/,
		fn: isEnabled,
		title: "Check if a element is (not) enabled"
	},
	{
		regex: /^the element "([^"]*)?" is( not)* selected$/,
		fn: checkSelected,
		title: "Check if a element is (not) selected"
	},
	{
		regex: /^the checkbox "([^"]*)?" is( not)* checked$/,
		fn: checkSelected,
		title: "Check if a checkbox is (not) checked"
	},
	{
		regex: /^there is (an|no) element "([^"]*)?" on the page$/,
		fn: checkElementExists,
		title: "Check if a element (does not) exist"
	},
	{
		regex: /^the title is( not)* "([^"]*)?"$/,
		fn: checkTitle,
		title: "Check the title of the current browser window/tab"
	},
	{
		regex: /^the element "([^"]*)?" contains( not)* the same text as element "([^"]*)?"$/,
		fn: compareText,
		title: "Compare the text of two elements"
	},
	{
		regex: /^the (button|element) "([^"]*)?"( not)* matches the text "([^"]*)?"$/,
		fn: checkEqualsText,
		title: "Check if a element equals the given text"
	},
	{
		regex: /^the (button|element) "([^"]*)?"( not)* contains the text "([^"]*)?"$/,
		fn: checkContainsText,
		title: "Check if a element contains the given text"
	},
	{
		regex: /^the (button|element) "([^"]*)?"( not)* contains any text$/,
		fn: checkContainsAnyText,
		title: "Check if a element does not contain any text"
	},
	{
		regex: /^the (button|element) "([^"]*)?" is( not)* empty$/,
		fn: checkIsEmpty,
		title: "Check if a element is empty"
	},
	{
		regex: /^the page url is( not)* "([^"]*)?"$/,
		fn: checkUrl,
		title: "Check the url of the current browser window/tab"
	},
	{
		regex: /^the( css)* attribute "([^"]*)?" from element "([^"]*)?" is( not)* "([^"]*)?"$/,
		fn: checkProperty,
		title: "Check the value of a element's (css) attribute"
	},
	{
		regex: /^the cookie "([^"]*)?" contains( not)* the value "([^"]*)?"$/,
		fn: checkCookieContent,
		title: "Check the value of a cookie"
	},
	{
		regex: /^the cookie "([^"]*)?" does( not)* exist$/,
		fn: checkCookieExists,
		title: "Check the existence of a cookie"
	},
	{
		regex: /^the element "([^"]*)?" is( not)* ([\d]+)px (broad|tall)$/,
		fn: checkDimension,
		title: "Check the width/height of a element"
	},
	{
		regex: /^the element "([^"]*)?" is( not)* positioned at ([\d]+)px on the (x|y) axis$/,
		fn: checkOffset,
		title: "Check the position of a element"
	},
	{
		regex: /^I have a screen that is ([\d]+) by ([\d]+) pixels$/,
		fn: resizeScreenSize,
		title: "Set the browser size to a given size"
	},
	{
		regex: /^I have closed all but the first (window|tab)$/,
		fn: closeAllButFirstTab,
		title: "Close all but the first browser window/tab"
	},
	{
		regex: /^a (alertbox|confirmbox|prompt) is( not)* opened$/,
		fn: checkModal,
		title: "Check if a modal is opened"
	},
	{
		regex: /^I debug$/,
		fn: debug,
		title: "Add a breakpoint to stop the running browser and give you time to jump into it and check the state of your application ([WDIO Help on Debug](http://webdriver.io/api/utility/debug.html))."
	},
	{
		regex: /^I am logged in to (beta|live|test) Accounts with username "([A-Z0-9_]+)" and password "([A-Z0-9_]+)"$/,
		fn: accountsLogin,
		title: "Log into a specific version of Nice accounts independently of using TopHat. Username and Password should be names of environment variables. If this is used remember to redirect back to where you expect to be"
	},
	{
		regex: /^I am logged out of NICE accounts$/,
		fn: accountsLogOut,
		title: "Log out of NICE accounts"
	}
];

export default stepDefinitions;
