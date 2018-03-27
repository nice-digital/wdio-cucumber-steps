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
`/^I open the (url&#124;site) "([^"]*)?"$/` | Open a site in the current browser window/tab
`/^the element "([^"]*)?" is( not)* visible$/` | Check the (in)visibility of a element
`/^the element "([^"]*)?" is( not)* enabled$/` | Check if a element is (not) enabled
`/^the element "([^"]*)?" is( not)* selected$/` | Check if a element is (not) selected
`/^the checkbox "([^"]*)?" is( not)* checked$/` | Check if a checkbox is (not) checked
`/^there is (an&#124;no) element "([^"]*)?" on the page$/` | Check if a element (does not) exist
`/^the title is( not)* "([^"]*)?"$/` | Check the title of the current browser window/tab
`/^the element "([^"]*)?" contains( not)* the same text as element "([^"]*)?"$/` | Compare the text of two elements
`/^the (button&#124;element) "([^"]*)?"( not)* matches the text "([^"]*)?"$/` | Check if a element equals the given text
`/^the (button&#124;element) "([^"]*)?"( not)* contains the text "([^"]*)?"$/` | Check if a element contains the given text
`/^the (button&#124;element) "([^"]*)?"( not)* contains any text$/` | Check if a element does not contain any text
`/^the (button&#124;element) "([^"]*)?" is( not)* empty$/` | Check if a element is empty
`/^the page url is( not)* "([^"]*)?"$/` | Check the url of the current browser window/tab
`/^the( css)* attribute "([^"]*)?" from element "([^"]*)?" is( not)* "([^"]*)?"$/` | Check the value of a element's (css) attribute
`/^the cookie "([^"]*)?" contains( not)* the value "([^"]*)?"$/` | Check the value of a cookie
`/^the cookie "([^"]*)?" does( not)* exist$/` | Check the existence of a cookie
`/^the element "([^"]*)?" is( not)* ([\d]+)px (broad&#124;tall)$/` | Check the width/height of a element
`/^the element "([^"]*)?" is( not)* positioned at ([\d]+)px on the (x&#124;y) axis$/` | Check the position of a element
`/^I have a screen that is ([\d]+) by ([\d]+) pixels$/` | Set the browser size to a given size
`/^I have closed all but the first (window&#124;tab)$/` | Close all but the first browser window/tab
`/^a (alertbox&#124;confirmbox&#124;prompt) is( not)* opened$/` | Check if a modal is opened
<!-- END given generated comment -->

### When steps

When…

<!-- START when generated comment -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN COMMAND TO UPDATE -->
Regex | Summary
----- | -------
`/^I (click&#124;doubleclick) on the (link&#124;button&#124;element) "([^"]*)?"$/` | (Double)click a link, button or element
`/^I (add&#124;set) "([^"]*)?" to the inputfield "([^"]*)?"$/` | Add or set the content of an input field
`/^I clear the inputfield "([^"]*)?"$/` | Clear an input field
`/^I drag element "([^"]*)?" to element "([^"]*)?"$/` | Drag a element to another element
`/^I submit the form "([^"]*)?"$/` | Submit a form
`/^I pause for (\d+)ms$/` | Pause for a certain number of milliseconds
`/^I set a cookie "([^"]*)?" with the content "([^"]*)?"$/` | Set the content of a cookie with the given name to the given string
`/^I delete the cookie "([^"]*)?"$/` | Delete the cookie with the given name
`/^I press "([^"]*)?"$/` | Press a given key. You’ll find all supported characters [here](https://w3c.github.io/webdriver/webdriver-spec.html#keyboard-actions). To do that, the value has to correspond to a key from the table.
`/^I (accept&#124;dismiss) the (alertbox&#124;confirmbox&#124;prompt)$/` | Accept or dismiss a modal window
`/^I enter "([^"]*)?" into the prompt$/` | Enter a given text into a modal prompt
`/^I scroll to element "([^"]*)?"$/` | Scroll to a given element
`/^I close the last opened (window&#124;tab)$/` | Close the last opened browser window/tab
`/^I focus the last opened (window&#124;tab)$/` | Focus the last opened browser window/tab
`/^I select the (\d+)(st&#124;nd&#124;rd&#124;th) option for element "([^"]*)?"$/` | Select a option based on its index
`/^I select the option with the (name&#124;value&#124;text) "([^"]*)?" for element "([^"]*)?"$/` | Select a option based on its name, value or visible text
`/^I move to element "([^"]*)?"(?: with an offset of (\d+),(\d+))*$/` | Move the mouse by an (optional) offset of the specified element
<!-- END when generated comment -->

### Then steps

Then…

<!-- START then generated comment -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN COMMAND TO UPDATE -->
Regex | Summary
----- | -------
`/^I expect that the title is( not)* "([^"]*)?"$/` | Check the title of the current browser window/tab
`/^I expect that element "([^"]*)?" does( not)* appear exactly "([^"]*)?" times$/` | Checks that the element is on the page a specific number of times
`/^I expect that element "([^"]*)?" is( not)* visible$/` | Check if a certain element is (not) visible
`/^I expect that element "([^"]*)?" becomes( not)* visible$/` | Check if a certain element becomes visible
`/^I expect that element "([^"]*)?" is( not)* within the viewport$/` | Check if a certain element is within the current viewport
`/^I expect that element "([^"]*)?" does( not)* exist$/` | Check if a certain element exists
`/^I expect that element "([^"]*)?"( not)* contains the same text as element "([^"]*)?"$/` | Compare the text of two elements
`/^I expect that (button&#124;element) "([^"]*)?"( not)* matches the text "([^"]*)?"$/` | Check if a element or input field equals the given text
`/^I expect that (button&#124;element) "([^"]*)?"( not)* contains the text "([^"]*)?"$/` | Check if a element or input field contains the given text
`/^I expect that (button&#124;element) "([^"]*)?"( not)* contains any text$/` | Check if a element or input field contains any text
`/^I expect that (button&#124;element) "([^"]*)?" is( not)* empty$/` | Check if a element or input field is (not) empty
`/^I expect that the url is( not)* "([^"]*)?"$/` | Check if the the URL of the current browser window/tab is (not) a certain string
`/^I expect that the path is( not)* "([^"]*)?"$/` | Check if the path of the URL of the current browser window/tab is (not) a certain string
`/^I expect the url to( not)* contain "([^"]*)?"$/` | Check if the URL of the current browser window/tab (doesn't) contain(s) a certain string
`/^I expect that the( css)* attribute "([^"]*)?" from element "([^"]*)?" is( not)* "([^"]*)?"$/` | Check the value of a element's (css) attribute
`/^I expect that checkbox "([^"]*)?" is( not)* checked$/` | Check if a check-box is (not) checked
`/^I expect that element "([^"]*)?" is( not)* selected$/` | Check if a element is (not) selected
`/^I expect that element "([^"]*)?" is( not)* enabled$/` | Check if a element is (not) enabled
`/^I expect that cookie "([^"]*)?"( not)* contains "([^"]*)?"$/` | Check if a cookie with a certain name contains a certain value
`/^I expect that cookie "([^"]*)?"( not)* exists$/` | Check if a cookie with a certain name exist
`/^I expect that element "([^"]*)?" is( not)* ([\d]+)px (broad&#124;tall)$/` | Check the width/height of an element
`/^I expect that element "([^"]*)?" is( not)* positioned at ([\d]+)px on the (x&#124;y) axis$/` | Check the position of an element
`/^I expect that element "([^"]*)?" (has&#124;does not have) the class "([^"]*)?"$/` | Check if a element has a certain class
`/^I expect a new (window&#124;tab) has( not)* been opened$/` | Check if a new window/tab has been opened
`/^I expect the url "([^"]*)?" is opened in a new (tab&#124;window)$/` | Check if a URL is opened in a new browser window/tab
`/^I expect that element "([^"]*)?" is( not)* focused$/` | Check if a element has the focus
`/^I wait on element "([^"]*)?"(?: for (\d+)ms)*(?: to( not)* (be checked&#124;be enabled&#124;be selected&#124;be visible&#124;contain a text&#124;contain a value&#124;exist))*$/` | Wait for a element to be checked, enabled, selected, visible, contain a certain value or text or to exist
`/^I expect that a (alertbox&#124;confirmbox&#124;prompt) is( not)* opened$/` | Check that a modal is (not) opened
`/^I expect that a (alertbox&#124;confirmbox&#124;prompt)( not)* contains the text "([^"]*)?"$/` | Check the text of a modal
<!-- END then generated comment -->

## License

[MIT](LICENSE).

We've forked code from webdriverio's [cucumber-boilerplate](https://github.com/webdriverio/cucumber-boilerplate) which is also licensed under [MIT](https://github.com/webdriverio/cucumber-boilerplate/blob/master/LICENSE).
