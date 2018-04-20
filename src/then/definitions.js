import checkClass from "../support/check/checkClass";
import checkContainsAnyText from "../support/check/checkContainsAnyText";
import checkIsEmpty from "../support/check/checkIsEmpty";
import checkContainsText from "../support/check/checkContainsText";
import checkCookieContent from "../support/check/checkCookieContent";
import checkCookieExists from "../support/check/checkCookieExists";
import checkDimension from "../support/check/checkDimension";
import checkEqualsText from "../support/check/checkEqualsText";
import checkFocus from "../support/check/checkFocus";
import checkInURLPath from "../support/check/checkInURLPath";
import checkIsOpenedInNewWindow from "../support/check/checkIsOpenedInNewWindow";
import checkModal from "../support/check/checkModal";
import checkModalText from "../support/check/checkModalText";
import checkNewWindow from "../support/check/checkNewWindow";
import checkOffset from "../support/check/checkOffset";
import checkProperty from "../support/check/checkProperty";
import checkSelected from "../support/check/checkSelected";
import checkTitle from "../support/check/checkTitle";
import checkURL from "../support/check/checkURL";
import checkURLPath from "../support/check/checkURLPath";
import checkWithinViewport from "../support/check/checkWithinViewport";
import compareText from "../support/check/compareText";
import isEnabled from "../support/check/isEnabled";
import isExisting from "../support/check/isExisting";
import isVisible from "../support/check/isVisible";
import waitFor from "../support/action/waitFor";
import waitForVisible from "../support/action/waitForVisible";
import checkIfElementExists from "../support/lib/checkIfElementExists";
import debugThen from "../support/action/debugThen";

// Initial steps taken from https://github.com/webdriverio/cucumber-boilerplate/blob/master/src/steps/then.js
const stepDefinitions = [
	{
		regex: /^I expect that the title is( not)* "([^"]*)?"$/,
		fn: checkTitle,
		title: "Check the title of the current browser window/tab"
	},
	{
		regex: /^I expect that element "([^"]*)?" does( not)* appear exactly "([^"]*)?" times$/,
		fn: checkIfElementExists,
		title: "Checks that the element is on the page a specific number of times"
	},
	{
		regex: /^I expect that element "([^"]*)?" is( not)* visible$/,
		fn: isVisible,
		title: "Check if a certain element is (not) visible"
	},
	{
		regex: /^I expect that element "([^"]*)?" becomes( not)* visible$/,
		fn: waitForVisible,
		title: "Check if a certain element becomes visible"
	},
	{
		regex: /^I expect that element "([^"]*)?" is( not)* within the viewport$/,
		fn: checkWithinViewport,
		title: "Check if a certain element is within the current viewport"
	},
	{
		regex: /^I expect that element "([^"]*)?" does( not)* exist$/,
		fn: isExisting,
		title: "Check if a certain element exists"
	},
	{
		regex: /^I expect that element "([^"]*)?"( not)* contains the same text as element "([^"]*)?"$/,
		fn: compareText,
		title: "Compare the text of two elements"
	},
	{
		regex: /^I expect that (button|element) "([^"]*)?"( not)* matches the text "([^"]*)?"$/,
		fn: checkEqualsText,
		title: "Check if a element or input field equals the given text"
	},
	{
		regex: /^I expect that (button|element) "([^"]*)?"( not)* contains the text "([^"]*)?"$/,
		fn: checkContainsText,
		title: "Check if a element or input field contains the given text"
	},
	{
		regex: /^I expect that (button|element) "([^"]*)?"( not)* contains any text$/,
		fn: checkContainsAnyText,
		title: "Check if a element or input field contains any text"
	},
	{
		regex: /^I expect that (button|element) "([^"]*)?" is( not)* empty$/,
		fn: checkIsEmpty,
		title: "Check if a element or input field is (not) empty"
	},
	{
		regex: /^I expect that the url is( not)* "([^"]*)?"$/,
		fn: checkURL,
		title: "Check if the the URL of the current browser window/tab is (not) a certain string"
	},
	{
		regex: /^I expect that the path is( not)* "([^"]*)?"$/,
		fn: checkURLPath,
		title: "Check if the path of the URL of the current browser window/tab is (not) a certain string"
	},
	{
		regex: /^I expect the url to( not)* contain "([^"]*)?"$/,
		fn: checkInURLPath,
		title: "Check if the URL of the current browser window/tab (doesn't) contain(s) a certain string"
	},
	{
		regex: /^I expect that the( css)* attribute "([^"]*)?" from element "([^"]*)?" is( not)* "([^"]*)?"$/,
		fn: checkProperty,
		title: "Check the value of a element's (css) attribute"
	},
	{
		regex: /^I expect that checkbox "([^"]*)?" is( not)* checked$/,
		fn: checkSelected,
		title: "Check if a check-box is (not) checked"
	},
	{
		regex: /^I expect that element "([^"]*)?" is( not)* selected$/,
		fn: checkSelected,
		title: "Check if a element is (not) selected"
	},
	{
		regex: /^I expect that element "([^"]*)?" is( not)* enabled$/,
		fn: isEnabled,
		title: "Check if a element is (not) enabled"
	},
	{
		regex: /^I expect that cookie "([^"]*)?"( not)* contains "([^"]*)?"$/,
		fn: checkCookieContent,
		title: "Check if a cookie with a certain name contains a certain value"
	},
	{
		regex: /^I expect that cookie "([^"]*)?"( not)* exists$/,
		fn: checkCookieExists,
		title: "Check if a cookie with a certain name exist"
	},
	{
		regex: /^I expect that element "([^"]*)?" is( not)* ([\d]+)px (broad|tall)$/,
		fn: checkDimension,
		title: "Check the width/height of an element"
	},
	{
		regex: /^I expect that element "([^"]*)?" is( not)* positioned at ([\d]+)px on the (x|y) axis$/,
		fn: checkOffset,
		title: "Check the position of an element"
	},
	{
		regex: /^I expect that element "([^"]*)?" (has|does not have) the class "([^"]*)?"$/,
		fn: checkClass,
		title: "Check if a element has a certain class"
	},
	{
		regex: /^I expect a new (window|tab) has( not)* been opened$/,
		fn: checkNewWindow,
		title: "Check if a new window/tab has been opened"
	},
	{
		regex: /^I expect the url "([^"]*)?" is opened in a new (tab|window)$/,
		fn: checkIsOpenedInNewWindow,
		title: "Check if a URL is opened in a new browser window/tab"
	},
	{
		regex: /^I expect that element "([^"]*)?" is( not)* focused$/,
		fn: checkFocus,
		title: "Check if a element has the focus"
	},
	{
		regex: /^I wait on element "([^"]*)?"(?: for (\d+)ms)*(?: to( not)* (be checked|be enabled|be selected|be visible|contain a text|contain a value|exist))*$/,
		options: {
			wrapperOptions: {
				retry: 3,
			}
		},
		fn: waitFor,
		title: "Wait for a element to be checked, enabled, selected, visible, contain a certain value or text or to exist"
	},
	{
		regex: /^I expect that a (alertbox|confirmbox|prompt) is( not)* opened$/,
		fn: checkModal,
		title: "Check that a modal is (not) opened"
	},
	{
		regex: /^I expect that a (alertbox|confirmbox|prompt)( not)* contains the text "([^"]*)?"$/,
		fn: checkModalText,
		title: "Check the text of a modal"
	},
/* 	{
		regex: /^debug$/,
		fn: debugThen,
		title: "Add a breakpoint to a feature file"
	} */
];

export default stepDefinitions;
