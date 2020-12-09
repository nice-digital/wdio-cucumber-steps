# [@nice-digital/wdio-cucumber-steps](https://www.npmjs.com/package/@nice-digital/wdio-cucumber-steps)

> Shared step definitions for Cucumber JS BDD tests in WebdriverIO. Focus on writing features, not step definitions.

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [@nice-digital/wdio-cucumber-steps](#nice-digitalwdio-cucumber-steps)
  - [v1 breaking changes](#v1-breaking-changes)
  - [Usage](#usage)
    - [VS Code integration](#vs-code-integration)
  - [Development](#development)
    - [Debug](#debug)
    - [npm linking](#npm-linking)
  - [Releasing](#releasing)
  - [Tests](#tests)
    - [Running the tests](#running-the-tests)
  - [Step definitions](#step-definitions)
    - [Given steps](#given-steps)
    - [When steps](#when-steps)
    - [Then steps](#then-steps)
  - [License](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## v1 breaking changes

v0 targeted webdriverio v4. v1 targets wdio v6, so includes breaking changes. These v1 changes include:

- support files are now written in TypeScript and ship with type definitions, so you'll get TS intellisense
- all support files are now promise based, so you'll have to `await` them in your step definitions
- the support modules use named exports rather than default exports
- the support modules are TypeScript
- the `waitFor` module now only accepts `enabled`, `displayed` and `exist` as `state` (and not `checked`, `selected` etc)
- `globalnavLogin` is now `globalNavAccountsLogin`
- `submitForm` has been removed along with the corresponding `When I submit the form X` step definition
- the _src_ folder is no longer included in the published npm package, just the _lib_ folder
  - so change any `cucumberautocomplete.steps` paths inside your _.vscode/settings.json_ files to replace _src_ with _lib_

## Usage

First install via npm:

```sh
npm i @nice-digital/wdio-cucumber-steps --save-dev
```

Then assuming you have a _wdio.conf.js_ that looks something like this:

```js
exports.config = {
  // Options missing here for brevity
  cucumberOpts: {
    require: ['./src/steps/index.js'],
  },
};
```

Then import the following into _./src/steps/index.js_ (or wherever your custom step definitions) are:

```js
import '@nice-digital/wdio-cucumber-steps/lib/given';
import '@nice-digital/wdio-cucumber-steps/lib/when';
import '@nice-digital/wdio-cucumber-steps/lib/then';
```

The easiest way is to fork the [NICE frontend testing base](https://github.com/nice-digital/frontend-testing-base/) as it comes with the required dependencies. Note: make sure you clone the Webdriverio v6 version of frontend testing base (and not v4!).

### VS Code integration

We recommend the [Cucumber (Gherkin) Full Support VSCode extension](https://marketplace.visualstudio.com/items?itemName=alexkrechik.cucumberautocomplete#overview) for intellisense for step definitions.

Install the extension and configure by adding the following to _.vscode/settings.json_ in your testing application:

```diff
{
+    "cucumberautocomplete.steps": [
+        "node_modules/@nice-digital/wdio-cucumber-steps/lib/given/definitions.js",
+        "node_modules/@nice-digital/wdio-cucumber-steps/lib/when/definitions.js",
+        "node_modules/@nice-digital/wdio-cucumber-steps/lib/then/definitions.js",
+    ]
}
```

Note: in v0 these settings pointed to the src folder, but the src folder is no longer published to npm in v1.

## Development

The source files (in the _src_ directory) are written in TypeScript. This _src_ is automatically transpiled into the _lib_ folder when you [release](#releasing).

### Debug

You can use Given/Then/When/And followed by "I debug" within the feature file which stops the running browser and gives you time to jump into it and check the state of your application ([WDIO Help on Debug](http://webdriver.io/api/utility/debug.html)):

```sh
Given I debug
Then I debug
When I debug
And I debug
```

### npm linking

To dev locally, it can be useful to test these step definitions in context of real features. In this case, use [npm link](https://docs.npmjs.com/cli/link) to symlink to another folder:

```sh
npm link
```

Then in your testing project:

```sh
npm link @nice-digital/wdio-cucumber-steps
```

Once they are all linked, run the following command to recompile the files as you make changes so that they are reflected in your test project:

```sh
npm run es5ify:watch
```

> Don't forget to unlink! `npm unlink @nice-digital/wdio-cucumber-steps`

## Releasing

We use [np](https://www.npmjs.com/package/np) for releasing. Run `npm run release:patch` to release a patch version or `npm run release:minor` or `npm run release:major.` This will run tests, bump package.json version and create a git tag for you. Or run `npm run release` for more fine grained control, for example `npm run release -- prepatch --tag=alpha --preview --any-branch`.

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

| Step                                                                                                           | Summary                                                                                                                                                                                                                                                                                                                     |
| -------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `/^I open the (url\|site) "([^"]*)?"$/`                                                                        | Open a site in the current browser window/tab                                                                                                                                                                                                                                                                               |
| `/^the element "([^"]*)?" is( not)* visible$/`                                                                 | Check the (in)visibility of a element                                                                                                                                                                                                                                                                                       |
| `/^the element "([^"]*)?" is( not)* enabled$/`                                                                 | Check if a element is (not) enabled                                                                                                                                                                                                                                                                                         |
| `/^the element "([^"]*)?" is( not)* selected$/`                                                                | Check if a element is (not) selected                                                                                                                                                                                                                                                                                        |
| `/^the checkbox "([^"]*)?" is( not)* checked$/`                                                                | Check if a checkbox is (not) checked                                                                                                                                                                                                                                                                                        |
| `/^there is (an\|no) element "([^"]*)?" on the page$/`                                                         | Check if a element (does not) exist                                                                                                                                                                                                                                                                                         |
| `/^the title is( not)* "([^"]*)?"$/`                                                                           | Check the title of the current browser window/tab                                                                                                                                                                                                                                                                           |
| `/^the element "([^"]*)?" contains( not)* the same text as element "([^"]*)?"$/`                               | Compare the text of two elements                                                                                                                                                                                                                                                                                            |
| `/^the (button\|element) "([^"]*)?"( not)* matches the text "([^"]*)?"$/`                                      | Check if a element equals the given text                                                                                                                                                                                                                                                                                    |
| `/^the (button\|element) "([^"]*)?"( not)* contains the text "([^"]*)?"$/`                                     | Check if a element contains the given text                                                                                                                                                                                                                                                                                  |
| `/^the (button\|element) "([^"]*)?"( not)* contains any text$/`                                                | Check if a element does not contain any text                                                                                                                                                                                                                                                                                |
| `/^the (button\|element) "([^"]*)?" is( not)* empty$/`                                                         | Check if a element is empty                                                                                                                                                                                                                                                                                                 |
| `/^the page url is( not)* "([^"]*)?"$/`                                                                        | Check the url of the current browser window/tab                                                                                                                                                                                                                                                                             |
| `/^the( css)* attribute "([^"]*)?" from element "([^"]*)?" is( not)* "([^"]*)?"$/`                             | Check the value of a element's (css) attribute                                                                                                                                                                                                                                                                              |
| `/^the cookie "([^"]*)?" contains( not)* the value "([^"]*)?"$/`                                               | Check the value of a cookie                                                                                                                                                                                                                                                                                                 |
| `/^the cookie "([^"]*)?" does( not)* exist$/`                                                                  | Check the existence of a cookie                                                                                                                                                                                                                                                                                             |
| `/^the element "([^"]*)?" is( not)* ([\d]+)px (broad\|tall)$/`                                                 | Check the width/height of a element                                                                                                                                                                                                                                                                                         |
| `/^the element "([^"]*)?" is( not)* positioned at ([\d]+)px on the (x\|y) axis$/`                              | Check the position of a element                                                                                                                                                                                                                                                                                             |
| `/^I have a screen that is ([\d]+) by ([\d]+) pixels$/`                                                        | Set the browser size to a given size                                                                                                                                                                                                                                                                                        |
| `/^I have closed all but the first (window\|tab)$/`                                                            | Close all but the first browser window/tab                                                                                                                                                                                                                                                                                  |
| `/^a (alertbox\|confirmbox\|prompt) is( not)* opened$/`                                                        | Check if a modal is opened                                                                                                                                                                                                                                                                                                  |
| `I debug`                                                                                                      | Add a breakpoint to stop the running browser and give you time to jump into it and check the state of your application ([WDIO Help on Debug](http://webdriver.io/api/utility/debug.html)).                                                                                                                                  |
| `/^I am logged in to (beta\|live\|test) Accounts with username "([A-z0-9_@.]+)" and password "([A-z0-9_]+)"$/` | Log into a specific version of Nice accounts independently of using TopHat. Username and Password should be names of environment variables (eg, Given I am logged in to beta Accounts with username 'ACCOUNTS_EMAIL' and password 'ACCOUNTS_PASSWORD'). If this is used remember to redirect back to where you expect to be |
| `/^I am logged out of NICE accounts$/`                                                                         | Log out of NICE accounts. If this is used remember to redirect back to where you expect to be                                                                                                                                                                                                                               |

<!-- END given generated comment -->

### When steps

When…

<!-- START when generated comment -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN COMMAND TO UPDATE -->

| Step                                                                                           | Summary                                                                                                                                                                                                |
| ---------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `/^I (click\|doubleclick) on the (link\|button\|element) "([^"]*)?"$/`                         | (Double)click a link, button or element                                                                                                                                                                |
| `/^I (add\|set) "([^"]*)?" to the inputfield "([^"]*)?"$/`                                     | Add or set the content of an input field                                                                                                                                                               |
| `/^I clear the inputfield "([^"]*)?"$/`                                                        | Clear an input field                                                                                                                                                                                   |
| `/^I drag element "([^"]*)?" to element "([^"]*)?"$/`                                          | Drag a element to another element                                                                                                                                                                      |
| `/^I submit the form "([^"]*)?"$/`                                                             | Submit a form                                                                                                                                                                                          |
| `/^I pause for (\d+)ms$/`                                                                      | Pause for a certain number of milliseconds                                                                                                                                                             |
| `/^I set a cookie "([^"]*)?" with the content "([^"]*)?"$/`                                    | Set the content of a cookie with the given name to the given string                                                                                                                                    |
| `/^I delete the cookie "([^"]*)?"$/`                                                           | Delete the cookie with the given name                                                                                                                                                                  |
| `/^I press "([^"]*)?"$/`                                                                       | Press a given key. You’ll find all supported characters [here](https://w3c.github.io/webdriver/webdriver-spec.html#keyboard-actions). To do that, the value has to correspond to a key from the table. |
| `/^I (accept\|dismiss) the (alertbox\|confirmbox\|prompt)$/`                                   | Accept or dismiss a modal window                                                                                                                                                                       |
| `/^I enter "([^"]*)?" into the prompt$/`                                                       | Enter a given text into a modal prompt                                                                                                                                                                 |
| `/^I scroll to element "([^"]*)?"$/`                                                           | Scroll to a given element                                                                                                                                                                              |
| `/^I close the last opened (window\|tab)$/`                                                    | Close the last opened browser window/tab                                                                                                                                                               |
| `/^I focus the last opened (window\|tab)$/`                                                    | Focus the last opened browser window/tab                                                                                                                                                               |
| `/^I select the (\d+)(st\|nd\|rd\|th) option for element "([^"]*)?"$/`                         | Select a option based on its index                                                                                                                                                                     |
| `/^I select the option with the (name\|value\|text) "([^"]*)?" for element "([^"]*)?"$/`       | Select a option based on its name, value or visible text                                                                                                                                               |
| `/^I move to element "([^"]*)?"(?: with an offset of (\d+),(\d+))*$/`                          | Move the mouse by an (optional) offset of the specified element                                                                                                                                        |
| `/^I refresh$/`                                                                                | Refresh the current page                                                                                                                                                                               |
| `/^I log in to Accounts via TopHat with username "([A-Z0-9_]+)" and password "([A-Z0-9_]+)"$/` | Use TopHat in your application to log into Nice accounts. Username and Password should be names of environment variables                                                                               |
| `/^I focus on the element "([^"]+)"$/`                                                         | Move focus to the given element                                                                                                                                                                        |
| `/^I accept all cookies$/`                                                                     | Accept all cookies using the NICE cookie banner                                                                                                                                                        |

<!-- END when generated comment -->

### Then steps

Then…

<!-- START then generated comment -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN COMMAND TO UPDATE -->

| Step                                                                                                                                                         | Summary                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `/^I expect that the title is( not)* "([^"]*)?"$/`                                                                                                           | Check the title of the current browser window/tab                                                                                                          |
| `/^I expect that element "([^"]*)?" does( not)* appear exactly "([^"]*)?" times$/`                                                                           | Checks that the element is on the page a specific number of times                                                                                          |
| `/^I expect that element "([^"]*)?" is( not)* visible$/`                                                                                                     | Check if a certain element is (not) visible                                                                                                                |
| `/^I expect that element "([^"]*)?" becomes( not)* visible$/`                                                                                                | Check if a certain element becomes visible                                                                                                                 |
| `/^I expect that element "([^"]*)?" is( not)* within the viewport$/`                                                                                         | Check if a certain element is within the current viewport                                                                                                  |
| `/^I expect that element "([^"]*)?" does( not)* exist$/`                                                                                                     | Check if a certain element exists                                                                                                                          |
| `/^I expect that element "([^"]*)?"( not)* contains the same text as element "([^"]*)?"$/`                                                                   | Compare the text of two elements                                                                                                                           |
| `/^I expect that (button\|element) "([^"]*)?"( not)* matches the text "([^"]*)?"$/`                                                                          | Check if a element or input field equals the given text                                                                                                    |
| `/^I expect that (button\|element) "([^"]*)?"( not)* contains the text "([^"]*)?"$/`                                                                         | Check if a element or input field contains the given text                                                                                                  |
| `/^I expect that (button\|element) "([^"]*)?"( not)* contains any text$/`                                                                                    | Check if a element or input field contains any text                                                                                                        |
| `/^I expect that (button\|element) "([^"]*)?" is( not)* empty$/`                                                                                             | Check if a element or input field is (not) empty                                                                                                           |
| `/^I expect that the url is( not)* "([^"]*)?"$/`                                                                                                             | Check if the the URL of the current browser window/tab is (not) a certain string                                                                           |
| `/^I expect that the path is( not)* "([^"]*)?"$/`                                                                                                            | Check if the path of the URL of the current browser window/tab is (not) a certain string                                                                   |
| `/^I expect the url to( not)* contain "([^"]*)?"$/`                                                                                                          | Check if the URL of the current browser window/tab (doesn't) contain(s) a certain string                                                                   |
| `/^I expect that the( css)* attribute "([^"]*)?" from element "([^"]*)?" is( not)* "([^"]*)?"$/`                                                             | Check the value of a element's (css) attribute                                                                                                             |
| `/^I expect that checkbox "([^"]*)?" is( not)* checked$/`                                                                                                    | Check if a check-box is (not) checked                                                                                                                      |
| `/^I expect that element "([^"]*)?" is( not)* selected$/`                                                                                                    | Check if a element is (not) selected                                                                                                                       |
| `/^I expect that element "([^"]*)?" is( not)* enabled$/`                                                                                                     | Check if a element is (not) enabled                                                                                                                        |
| `/^I expect that cookie "([^"]*)?"( not)* contains "([^"]*)?"$/`                                                                                             | Check if a cookie with a certain name contains a certain value                                                                                             |
| `/^I expect that cookie "([^"]*)?"( not)* exists$/`                                                                                                          | Check if a cookie with a certain name exist                                                                                                                |
| `/^I expect that element "([^"]*)?" is( not)* ([\d]+)px (broad\|tall)$/`                                                                                     | Check the width/height of an element                                                                                                                       |
| `/^I expect that element "([^"]*)?" is( not)* positioned at ([\d]+)px on the (x\|y) axis$/`                                                                  | Check the position of an element                                                                                                                           |
| `/^I expect that element "([^"]*)?" (has\|does not have) the class "([^"]*)?"$/`                                                                             | Check if a element has a certain class                                                                                                                     |
| `/^I expect a new (window\|tab) has( not)* been opened$/`                                                                                                    | Check if a new window/tab has been opened                                                                                                                  |
| `/^I expect the url "([^"]*)?" is opened in a new (tab\|window)$/`                                                                                           | Check if a URL is opened in a new browser window/tab                                                                                                       |
| `/^I expect that element "([^"]*)?" is( not)* focused$/`                                                                                                     | Check if a element has the focus                                                                                                                           |
| `/^I wait on element "([^"]*)?"(?: for (\d+)ms)*(?: to( not)* (be checked\|be enabled\|be selected\|be visible\|contain a text\|contain a value\|exist))*$/` | Wait for a element to be checked, enabled, selected, visible, contain a certain value or text or to exist                                                  |
| `/^I expect that a (alertbox\|confirmbox\|prompt) is( not)* opened$/`                                                                                        | Check that a modal is (not) opened                                                                                                                         |
| `/^I expect that a (alertbox\|confirmbox\|prompt)( not)* contains the text "([^"]*)?"$/`                                                                     | Check the text of a modal. E.g. `I expect that a alertbox contains the text "Continue?"` or `I expect that a confirmbox not contains the text "Continue?"` |
| `/^the page should have no(?: (A\|AA))? accessibility issues$/`                                                                                              | Check each element on the page for accessibility issues. Please note this won't find all accessibility issues.                                             |

<!-- END then generated comment -->

## License

[MIT](LICENSE).

We've forked code from webdriverio's [cucumber-boilerplate](https://github.com/webdriverio/cucumber-boilerplate) which is also licensed under [MIT](https://github.com/webdriverio/cucumber-boilerplate/blob/master/LICENSE).
