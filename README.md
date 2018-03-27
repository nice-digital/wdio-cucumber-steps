# @nice-digital/wdio-cucumber-steps

> Shared step definitions for Cucumber JS BDD tests in WebdriverIO

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [Usage](#usage)
- [Development](#development)
- [Tests](#tests)
  - [Running the tests](#running-the-tests)
- [Step definitions](#step-definitions)
  - [Given steps](#given-steps)
  - [When steps](#when-steps)
  - [Then steps](#then-steps)
- [License](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Usage

First install via npm:

```sh
npm i @nice-digital/wdio-cucumber-steps --save-dev
```

Then assuming you have a *wdio.conf.js* that looks something like this:

```js
exports.config = {
    // Options missing here for brevity
    cucumberOpts: {
        compiler: ["js:babel-register"],
        require: [
            "./src/steps/index.js",
        ]
    }
};
```

Note: you'll need *babel-register*, *babel-preset-flow* and probably *babel-preset-env* too.

Then import the following into *./src/steps/index.js* (or wherever your custom step definitions) are:

```js
import "@nice-digital/wdio-cucumber-steps/given";
import "@nice-digital/wdio-cucumber-steps/when";
import "@nice-digital/wdio-cucumber-steps/then";
```

The easiest way is to fork the [NICE frontend testing base](https://github.com/nhsevidence/frontend-testing-base/) as it comes with the required dependencies.

## Development

To dev locally, it can be useful to test in context of real tests. In this case, use [npm link](https://docs.npmjs.com/cli/link) to symlink to another repo:

```sh
npm link
```

Then in your testing project:

```sh
npm link @nice-digital/wdio-cucumber-steps
```

> Don't forget to unlink! `npm unlink @nice-digital/wdio-cucumber-steps`

## Tests

### Running the tests

Run the following command to lint and run unit tests:

```sh
npm test
```

Or alternatively just run `npm run lint` or `npm run test:unit` individually. If you're devving and you've got eslint errors you need to fix, run `npm run lint:fix`.

## Step definitions

### Given steps

Given…

<!-- START given generated comment -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN COMMAND TO UPDATE -->
Regex | Summary
----- | -------
<code>/^I open the (url&#124;site) "([^"]*)?"$/</code> | Open a site in the current browser window/tab
<code>/^the element "([^"]*)?" is( not)* visible$/</code> | Check the (in)visibility of a element
<code>/^the element "([^"]*)?" is( not)* enabled$/</code> | Check if a element is (not) enabled
<code>/^the element "([^"]*)?" is( not)* selected$/</code> | Check if a element is (not) selected
<code>/^the checkbox "([^"]*)?" is( not)* checked$/</code> | Check if a checkbox is (not) checked
<code>/^there is (an&#124;no) element "([^"]*)?" on the page$/</code> | Check if a element (does not) exist
<code>/^the title is( not)* "([^"]*)?"$/</code> | Check the title of the current browser window/tab
<code>/^the element "([^"]*)?" contains( not)* the same text as element "([^"]*)?"$/</code> | Compare the text of two elements
<code>/^the (button&#124;element) "([^"]*)?"( not)* matches the text "([^"]*)?"$/</code> | Check if a element equals the given text
<code>/^the (button&#124;element) "([^"]*)?"( not)* contains the text "([^"]*)?"$/</code> | Check if a element contains the given text
<code>/^the (button&#124;element) "([^"]*)?"( not)* contains any text$/</code> | Check if a element does not contain any text
<code>/^the (button&#124;element) "([^"]*)?" is( not)* empty$/</code> | Check if a element is empty
<code>/^the page url is( not)* "([^"]*)?"$/</code> | Check the url of the current browser window/tab
<code>/^the( css)* attribute "([^"]*)?" from element "([^"]*)?" is( not)* "([^"]*)?"$/</code> | Check the value of a element's (css) attribute
<code>/^the cookie "([^"]*)?" contains( not)* the value "([^"]*)?"$/</code> | Check the value of a cookie
<code>/^the cookie "([^"]*)?" does( not)* exist$/</code> | Check the existence of a cookie
<code>/^the element "([^"]*)?" is( not)* ([\d]+)px (broad&#124;tall)$/</code> | Check the width/height of a element
<code>/^the element "([^"]*)?" is( not)* positioned at ([\d]+)px on the (x&#124;y) axis$/</code> | Check the position of a element
<code>/^I have a screen that is ([\d]+) by ([\d]+) pixels$/</code> | Set the browser size to a given size
<code>/^I have closed all but the first (window&#124;tab)$/</code> | Close all but the first browser window/tab
<code>/^a (alertbox&#124;confirmbox&#124;prompt) is( not)* opened$/</code> | Check if a modal is opened
<!-- END given generated comment -->

### When steps

When…

<!-- START when generated comment -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN COMMAND TO UPDATE -->
Regex | Summary
----- | -------
<code>/^I (click&#124;doubleclick) on the (link&#124;button&#124;element) "([^"]*)?"$/</code> | (Double)click a link, button or element
<code>/^I (add&#124;set) "([^"]*)?" to the inputfield "([^"]*)?"$/</code> | Add or set the content of an input field
<code>/^I clear the inputfield "([^"]*)?"$/</code> | Clear an input field
<code>/^I drag element "([^"]*)?" to element "([^"]*)?"$/</code> | Drag a element to another element
<code>/^I submit the form "([^"]*)?"$/</code> | Submit a form
<code>/^I pause for (\d+)ms$/</code> | Pause for a certain number of milliseconds
<code>/^I set a cookie "([^"]*)?" with the content "([^"]*)?"$/</code> | Set the content of a cookie with the given name to the given string
<code>/^I delete the cookie "([^"]*)?"$/</code> | Delete the cookie with the given name
<code>/^I press "([^"]*)?"$/</code> | Press a given key. You’ll find all supported characters [here](https://w3c.github.io/webdriver/webdriver-spec.html#keyboard-actions). To do that, the value has to correspond to a key from the table.
<code>/^I (accept&#124;dismiss) the (alertbox&#124;confirmbox&#124;prompt)$/</code> | Accept or dismiss a modal window
<code>/^I enter "([^"]*)?" into the prompt$/</code> | Enter a given text into a modal prompt
<code>/^I scroll to element "([^"]*)?"$/</code> | Scroll to a given element
<code>/^I close the last opened (window&#124;tab)$/</code> | Close the last opened browser window/tab
<code>/^I focus the last opened (window&#124;tab)$/</code> | Focus the last opened browser window/tab
<code>/^I select the (\d+)(st&#124;nd&#124;rd&#124;th) option for element "([^"]*)?"$/</code> | Select a option based on its index
<code>/^I select the option with the (name&#124;value&#124;text) "([^"]*)?" for element "([^"]*)?"$/</code> | Select a option based on its name, value or visible text
<code>/^I move to element "([^"]*)?"(?: with an offset of (\d+),(\d+))*$/</code> | Move the mouse by an (optional) offset of the specified element
<!-- END when generated comment -->

### Then steps

Then…

<!-- START then generated comment -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN COMMAND TO UPDATE -->
Regex | Summary
----- | -------
<code>/^I expect that the title is( not)* "([^"]*)?"$/</code> | Check the title of the current browser window/tab
<code>/^I expect that element "([^"]*)?" does( not)* appear exactly "([^"]*)?" times$/</code> | Checks that the element is on the page a specific number of times
<code>/^I expect that element "([^"]*)?" is( not)* visible$/</code> | Check if a certain element is (not) visible
<code>/^I expect that element "([^"]*)?" becomes( not)* visible$/</code> | Check if a certain element becomes visible
<code>/^I expect that element "([^"]*)?" is( not)* within the viewport$/</code> | Check if a certain element is within the current viewport
<code>/^I expect that element "([^"]*)?" does( not)* exist$/</code> | Check if a certain element exists
<code>/^I expect that element "([^"]*)?"( not)* contains the same text as element "([^"]*)?"$/</code> | Compare the text of two elements
<code>/^I expect that (button&#124;element) "([^"]*)?"( not)* matches the text "([^"]*)?"$/</code> | Check if a element or input field equals the given text
<code>/^I expect that (button&#124;element) "([^"]*)?"( not)* contains the text "([^"]*)?"$/</code> | Check if a element or input field contains the given text
<code>/^I expect that (button&#124;element) "([^"]*)?"( not)* contains any text$/</code> | Check if a element or input field contains any text
<code>/^I expect that (button&#124;element) "([^"]*)?" is( not)* empty$/</code> | Check if a element or input field is (not) empty
<code>/^I expect that the url is( not)* "([^"]*)?"$/</code> | Check if the the URL of the current browser window/tab is (not) a certain string
<code>/^I expect that the path is( not)* "([^"]*)?"$/</code> | Check if the path of the URL of the current browser window/tab is (not) a certain string
<code>/^I expect the url to( not)* contain "([^"]*)?"$/</code> | Check if the URL of the current browser window/tab (doesn't) contain(s) a certain string
<code>/^I expect that the( css)* attribute "([^"]*)?" from element "([^"]*)?" is( not)* "([^"]*)?"$/</code> | Check the value of a element's (css) attribute
<code>/^I expect that checkbox "([^"]*)?" is( not)* checked$/</code> | Check if a check-box is (not) checked
<code>/^I expect that element "([^"]*)?" is( not)* selected$/</code> | Check if a element is (not) selected
<code>/^I expect that element "([^"]*)?" is( not)* enabled$/</code> | Check if a element is (not) enabled
<code>/^I expect that cookie "([^"]*)?"( not)* contains "([^"]*)?"$/</code> | Check if a cookie with a certain name contains a certain value
<code>/^I expect that cookie "([^"]*)?"( not)* exists$/</code> | Check if a cookie with a certain name exist
<code>/^I expect that element "([^"]*)?" is( not)* ([\d]+)px (broad&#124;tall)$/</code> | Check the width/height of an element
<code>/^I expect that element "([^"]*)?" is( not)* positioned at ([\d]+)px on the (x&#124;y) axis$/</code> | Check the position of an element
<code>/^I expect that element "([^"]*)?" (has&#124;does not have) the class "([^"]*)?"$/</code> | Check if a element has a certain class
<code>/^I expect a new (window&#124;tab) has( not)* been opened$/</code> | Check if a new window/tab has been opened
<code>/^I expect the url "([^"]*)?" is opened in a new (tab&#124;window)$/</code> | Check if a URL is opened in a new browser window/tab
<code>/^I expect that element "([^"]*)?" is( not)* focused$/</code> | Check if a element has the focus
<code>/^I wait on element "([^"]*)?"(?: for (\d+)ms)*(?: to( not)* (be checked&#124;be enabled&#124;be selected&#124;be visible&#124;contain a text&#124;contain a value&#124;exist))*$/</code> | Wait for a element to be checked, enabled, selected, visible, contain a certain value or text or to exist
<code>/^I expect that a (alertbox&#124;confirmbox&#124;prompt) is( not)* opened$/</code> | Check that a modal is (not) opened
<code>/^I expect that a (alertbox&#124;confirmbox&#124;prompt)( not)* contains the text "([^"]*)?"$/</code> | Check the text of a modal
<!-- END then generated comment -->

## License

[MIT](LICENSE).

We've forked code from webdriverio's [cucumber-boilerplate](https://github.com/webdriverio/cucumber-boilerplate) which is also licensed under [MIT](https://github.com/webdriverio/cucumber-boilerplate/blob/master/LICENSE).
