import { checkClass } from "../support/check/checkClass";
import { checkContainsAnyText } from "../support/check/checkContainsAnyText";
import { checkIsEmpty } from "../support/check/checkIsEmpty";
import { checkContainsText } from "../support/check/checkContainsText";
import { checkCookieContent } from "../support/check/checkCookieContent";
import { checkCookieExists } from "../support/check/checkCookieExists";
import { checkDimension } from "../support/check/checkDimension";
import { checkEqualsText } from "../support/check/checkEqualsText";
import { checkFocus } from "../support/check/checkFocus";
import { checkInURLPath } from "../support/check/checkInURLPath";
import { checkIsOpenedInNewWindow } from "../support/check/checkIsOpenedInNewWindow";
import { checkModal } from "../support/check/checkModal";
import { checkModalText } from "../support/check/checkModalText";
import { checkNewWindow } from "../support/check/checkNewWindow";
import { checkOffset } from "../support/check/checkOffset";
import { checkProperty } from "../support/check/checkProperty";
import { checkSelected } from "../support/check/checkSelected";
import { checkTitle } from "../support/check/checkTitle";
import { checkUrl } from "../support/check/checkURL";
import { checkUrlPath } from "../support/check/checkURLPath";
import { checkWithinViewport } from "../support/check/checkWithinViewport";
import { compareText } from "../support/check/compareText";
import { isEnabled } from "../support/check/isEnabled";
import { isExisting } from "../support/check/isExisting";
import { isDisplayed } from "../support/check/isDisplayed";
import { waitFor } from "../support/action/waitFor";
import { waitForDisplayed } from "../support/action/waitForDisplayed";
import { checkIfElementExists } from "../support/lib/checkIfElementExists";
import { checkForAccessibilityIssues } from "../support/check/checkForAccessibilityIssues";

import { Then } from "../support/utils";

// Initial steps taken from https://github.com/webdriverio/cucumber-boilerplate/blob/master/src/steps/given.js

Then(/^I expect that the title is( not)* "([^"]*)?"$/, checkTitle).withDocs(
	"Check the title of the current browser window/tab"
);

Then(
	/^I expect that element "([^"]*)?" does( not)* appear exactly "([^"]*)?" times$/,
	checkIfElementExists
).withDocs("Checks that the element is on the page a specific number of times");

Then(
	/^I expect that element "([^"]*)?" is( not)* visible$/,
	isDisplayed
).withDocs("Check if a certain element is (not) visible");

Then(
	/^I expect that element "([^"]*)?" becomes( not)* visible$/,
	waitForDisplayed
).withDocs("Check if a certain element becomes visible");

Then(
	/^I expect that element "([^"]*)?" is( not)* within the viewport$/,
	checkWithinViewport
).withDocs("Check if a certain element is within the current viewport");

Then(
	/^I expect that element "([^"]*)?" does( not)* exist$/,
	isExisting
).withDocs("Check if a certain element exists");

Then(
	/^I expect that element "([^"]*)?"( not)* contains the same text as element "([^"]*)?"$/,
	compareText
).withDocs("Compare the text of two elements");

Then(
	/^I expect that (button|element) "([^"]*)?"( not)* matches the text "([^"]*)?"$/,
	checkEqualsText
).withDocs("Check if a element or input field equals the given text");

Then(
	/^I expect that (button|element) "([^"]*)?"( not)* contains the text "([^"]*)?"$/,
	checkContainsText
).withDocs("Check if a element or input field contains the given text");

Then(
	/^I expect that (button|element) "([^"]*)?"( not)* contains any text$/,
	checkContainsAnyText
).withDocs("Check if a element or input field contains any text");

Then(
	/^I expect that (button|element) "([^"]*)?" is( not)* empty$/,
	checkIsEmpty
).withDocs("Check if a element or input field is (not) empty");

Then(/^I expect that the url is( not)* "([^"]*)?"$/, checkUrl).withDocs(
	"Check if the the URL of the current browser window/tab is (not) a certain string"
);

Then(/^I expect that the path is( not)* "([^"]*)?"$/, checkUrlPath).withDocs(
	"Check if the path of the URL of the current browser window/tab is (not) a certain string"
);

Then(
	/^I expect the url to( not)* contain "([^"]*)?"$/,
	checkInURLPath
).withDocs(
	"Check if the URL of the current browser window/tab (doesn't) contain(s) a certain string"
);

Then(
	/^I expect that the( css)* attribute "([^"]*)?" from element "([^"]*)?" is( not)* "([^"]*)?"$/,
	checkProperty
).withDocs("Check the value of a element's (css) attribute");

Then(
	/^I expect that checkbox "([^"]*)?" is( not)* checked$/,
	checkSelected
).withDocs("Check if a check-box is (not) checked");

Then(
	/^I expect that element "([^"]*)?" is( not)* selected$/,
	checkSelected
).withDocs("Check if a element is (not) selected");

Then(
	/^I expect that element "([^"]*)?" is( not)* enabled$/,
	isEnabled
).withDocs("Check if a element is (not) enabled");

Then(
	/^I expect that cookie "([^"]*)?"( not)* contains "([^"]*)?"$/,
	checkCookieContent
).withDocs("Check if a cookie with a certain name contains a certain value");

Then(
	/^I expect that cookie "([^"]*)?"( not)* exists$/,
	checkCookieExists
).withDocs("Check if a cookie with a certain name exist");

Then(
	/^I expect that element "([^"]*)?" is( not)* ([\d]+)px (broad|tall)$/,
	checkDimension
).withDocs("Check the width/height of an element");

Then(
	/^I expect that element "([^"]*)?" is( not)* positioned at ([\d]+)px on the (x|y) axis$/,
	checkOffset
).withDocs("Check the position of an element");

Then(
	/^I expect that element "([^"]*)?" (has|does not have) the class "([^"]*)?"$/,
	checkClass
).withDocs("Check if a element has a certain class");

Then(
	/^I expect a new (window|tab) has( not)* been opened$/,
	checkNewWindow
).withDocs("Check if a new window/tab has been opened");

Then(
	/^I expect the url "([^"]*)?" is opened in a new (tab|window)$/,
	checkIsOpenedInNewWindow
).withDocs("Check if a URL is opened in a new browser window/tab");

Then(
	/^I expect that element "([^"]*)?" is( not)* focused$/,
	checkFocus
).withDocs("Check if a element has the focus");

Then(
	/^I wait on element "([^"]*)?"(?: for (\d+)ms)*(?: to( not)* (be checked|be enabled|be selected|be visible|contain a text|contain a value|exist))*$/,
	{
		wrapperOptions: {
			retry: 3,
		},
	},
	waitFor
).withDocs(
	"Wait for a element to be checked, enabled, selected, visible, contain a certain value or text or to exist"
);

Then(
	/^I expect that a (alertbox|confirmbox|prompt) is( not)* opened$/,
	checkModal
).withDocs("Check that a modal is (not) opened");

Then(
	/^I expect that a (alertbox|confirmbox|prompt)( not)* contains the text "([^"]*)?"$/,
	checkModalText
).withDocs(
	'Check the text of a modal. E.g. `I expect that a alertbox contains the text "Continue?"` or `I expect that a confirmbox not contains the text "Continue?"`'
);

Then(
	/^the page should have no(?: (A|AA))? accessibility issues$/,
	checkForAccessibilityIssues
).withDocs(
	"Check each element on the page for accessibility issues. Please note this won't find all accessibility issues."
);
