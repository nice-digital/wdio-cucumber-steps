# [@nice-digital/wdio-cucumber-steps](https://www.npmjs.com/package/@nice-digital/wdio-cucumber-steps)

> Shared step definitions for Cucumber JS BDD tests in WebdriverIO. Focus on writing features, not step definitions.

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Which version do I need?](#which-version-do-i-need)
  - [v1 breaking changes](#v1-breaking-changes)
  - [v2 breaking changes](#v2-breaking-changes)
  - [v3 breaking changes](#v3-breaking-changes)
- [:warning: Important note](#warning-important-note)
- [Usage](#usage)
  - [:rocket: Quick start](#rocket-quick-start)
  - [:turtle: Slow start](#turtle-slow-start)
  - [Support functions](#support-functions)
  - [VS Code integration](#vs-code-integration)
- [Development](#development)
  - [Typechecking](#typechecking)
  - [TypeScript watch mode](#typescript-watch-mode)
  - [Linting](#linting)
  - [Browser debugging](#browser-debugging)
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

## Which version do I need?

Use the following version of wdio-cucumber-steps depending on your WDIO version:

| wdio-cucumber-steps version | WDIO version | Notes                                                                                         |
| --------------------------- | ------------ | --------------------------------------------------------------------------------------------- |
| v0                          | v4           |                                                                                               |
| v1                          | v6           | Major rewrite: TypeScript, promise-based, named exports and expect rather than chai. Node 12. |
| v2                          | v7           | Cucumber is now @cucumber/cucumber. Node 14.                                                  |

Further details on the breaking changes are listed below.

### v1 breaking changes

v0 targeted webdriverio v4. v1 targets wdio v6, so includes breaking changes. These v1 changes include:

- support files are now written in TypeScript and ship with type definitions, so you'll get TS intellisense
- all support files are now promise based, so you'll have to `await` them in your step definitions
- the support modules use named exports rather than default exports
- the support modules are written in TypeScript
- the `waitFor` module now only accepts `enabled`, `displayed` and `exist` as `state` (and not `checked`, `selected` etc)
- `globalnavLogin` is now `globalNavAccountsLogin`
- `submitForm` has been removed along with the corresponding `When I submit the form X` step definition
- the _src_ folder is no longer included in the published npm package, just the _lib_ folder
  - so change any `cucumberautocomplete.steps` paths inside your _.vscode/settings.json_ files to replace _src_ with _lib_
- `chai` has been removed in favour of `expect` and `expect-webdriverio`.

### v2 breaking changes

Version 2 targets WebDriverIO v7 and cucumber v7. Cucumber is now published on npm under @cucumber/cucumber.

We're also now targeting Node 14+.

## :warning: Important note

This library allows you to _focus on writing features, not step definitions_. This is great for getting up and running quickly. It allows you to pull in the shared step definitions and start writing feature files.

But **beware**.

The down side of this is that feature files can quickly become implementation-focussed rather than behavioural. From the [cucumber docs](https://cucumber.io/docs/bdd/better-gherkin/#describe-behaviour):

> Your scenarios should describe the intended behaviour of the system, not the implementation. In other words, it should describe _what_, not _how_.

This means it's easy to write scenarios like `When I click the button "#signin"` where `When I login` is probably better. Writing behavioural scenarios usually means writing more custom step definitions. Consider importing the _lib/support_ actions/check modules into custom step definitions in preference to using the built in step definitions directly.

### v3 breaking changes

Version 3 targets WebDriverIO v8 and Node 18+.

The only breaking change for us that we've noticed is the difference in the `scrollIntoView` function that has some changes in implementation.  These can be seen here [version 8](https://github.com/webdriverio/webdriverio/blob/v8.1.3/packages/webdriverio/src/commands/element/scrollIntoView.ts) and [version 7](https://github.com/webdriverio/webdriverio/blob/v7.20.9/packages/webdriverio/src/commands/element/scrollIntoView.ts).


## Usage

### :rocket: Quick start

Fork the [NICE frontend testing base](https://github.com/nice-digital/frontend-testing-base/) as it comes with the required dependencies. This is the best approach for new testing projects. Make sure you clone the Webdriverio v7 version of frontend testing base (and not v4 or v6!).

Or to install wdio-cucumber-steps into an existing testing project, follow the slow start guide:

### :turtle: Slow start

Install Node 18 LTS. Then install _@nice-digital/wdio-cucumber-steps_ via npm, along with required dependencies:

```sh
npm i @nice-digital/wdio-cucumber-steps@1 expect expect-webdriverio --save-dev
```

Then add _node_modules/@nice-digital/wdio-cucumber-steps/lib_ into `cucumberOpts.requre` in _wdio.conf.js_:

```diff
exports.config = {
	...
  cucumberOpts: {
    require: [
			'./src/steps/index.js',
+			'./node_modules/@nice-digital/wdio-cucumber-steps/lib/index.js'
		],
  },
};
```

This tells cucumber to automatically require this module when the test runner runs, which in turn loads all the custom step definitions. Alternatively you can `import '@nice-digital/wdio-cucumber-steps/lib/given';` inside a JavaScript module.

You can now start adding any [steps](#step-definitions) to your feature files. But you'll probably want to write custom step definitions and import support functions directly:

### Support functions

It's good practice to keep scenarios behaviour-focussed rather than implementation-focussed. This usually means writing more custom step definitions to keep feature files clean, light and behavioural. Use the wdio-cucumber-steps support functions directly within custom step definitions to help with this. Import support functions like this:

```js
import { openWebsite } from '@nice-digital/wdio-cucumber-steps/lib/support/action/openWebsite';
```

> Note: these support functions were default exports in v0 and are now named exports in v1

### VS Code integration

Install the [Cucumber (Gherkin) Full Support VSCode extension](https://marketplace.visualstudio.com/items?itemName=alexkrechik.cucumberautocomplete#overview) for intellisense for step definitions in your testing project.

Install the extension and configure by adding the following to _.vscode/settings.json_ in your testing project:

```diff
{
+    "cucumberautocomplete.steps": [
+        "node_modules/@nice-digital/wdio-cucumber-steps/lib/given/definitions.js",
+        "node_modules/@nice-digital/wdio-cucumber-steps/lib/when/definitions.js",
+        "node_modules/@nice-digital/wdio-cucumber-steps/lib/then/definitions.js",
+    ]
}
```

> Note: in v0 these settings pointed to the _src_ folder, but the _src_ folder is no longer included in the npm package in v1.

## Development

### Typechecking

The source files (in the _src_ directory) are written in TypeScript. This _src_ is automatically compile into the _lib_ folder when you [release](#releasing). Or run `npm run ts:build` to manually compile TypeScript into the _lib_ folder. There's also a command to use watch mode (see [TypeScript watch mode](#typescript-watch-mode) below).

Using TypeScript gives us static type checking, via:

- CLI commands
- VSCode IDE for local development
- CLI and VSCode for testing projects that import wdio-cucumber steps.

The _lib_ folder that's included in the npm package contains JavaScript, type definitions (.d.ts files) and source maps (.map files).

### TypeScript watch mode

Run `npm run ts:watch` to build the _src_ TypeScript files in watch mode. This compiles the _src_ folder into _lib_ but also watches for file changes to re-compile. There's also a task configured in VSCode if you prefer to not use the command line: choose _Tasks: Run Task_ then _TypeScript watch_ from the command palette (Ctrl + Shift + P).

Watch mode is useful when you're linking this wdio-cucumber-steps project into a testing project for local development, see the [npm linking](#npm-linking) section.

### Linting

We have both ESLint and Prettier configured, with corresponding npm commands. Run `npm run lint` to run both commands, or alternatively run `npm run prettier` or `npm run lint:ts` individually. These commands run automatically as part of the [release](#releasing) process.

VSCode is configured to format files on save, so you shouldn't get fixable linting errors saved into files. But if you do, run `npm run prettier:fix` and `npm run lint:fix` to fix any fixable linting errors.

### Browser debugging

Note: don't confuse debugging using browser dev tools and VSCode debugging of step definitions!

Use `Given`, `Then`, `When` or `And` followed by `I debug` within a feature file to pause the browser to allow debugging with dev tools:

```sh
Given I debug
Then I debug
When I debug
And I debug
```

This stops the running browser and gives you time to inspect the browser using dev tools. See [the WebdriverIO debug docs](https://webdriver.io/docs/api/browser/debug.html) for more information. Note: as per the docs:

> If you run the WDIO testrunner make sure you increase the timeout property of the test framework you are using (e.g. Mocha or Jasmine) in order to prevent test termination due to a test timeout. Also avoid executing the command with multiple capabilities running at the same time.

Our [frontend-testing-base](https://github.com/nice-digital/frontend-testing-base) project use cucumber, so the timeout property is `cucumberOpts.timeout` inside _wdio.conf.js_.

#### Debugging in VSCode

I found this [video](https://webdriver.io/docs/debugging/) a good introduction to debugging in vscode.

### npm linking

To develop wdio-cucumber-steps locally, you need to test these step definitions in context of real features (as well as writing unit tests). This means using the steps within a real webdriverio project like [frontend-testing-base](https://github.com/nice-digital/frontend-testing-base). Do this using [npm link](https://docs.npmjs.com/cli/link) to avoid having to push up to npm each time. `npm link` uses a symlink under the hood to link the node module to this repo on the file system.

First run this command in the @nice-digital\wdio-cucumber-steps folder:

```sh
npm link
```

Then in your testing project (e.g. frontend-testing-base), run:

```sh
npm link @nice-digital/wdio-cucumber-steps
```

Testing projects load step definitions and support modules from the _lib_ folder. This _lib_ is excluded from git and is where the TypeScript source files in _src_ files are compiled to. This means you need to re-compile the TypeScript files if you make any changes to the _src_ folder. This is best done via watch mode, see the [TypeScript watch mode](#typescript-watch-mode) section for how to do this.

> Don't forget to unlink when you're finished! `npm unlink @nice-digital/wdio-cucumber-steps`

## Releasing

We use [np](https://www.npmjs.com/package/np) for releasing. Run `npm run release:patch` to release a patch version or `npm run release:minor` or `npm run release:major.` This will run tests, bump package.json version and create a git tag for you. Or run `npm run release` for more fine grained control, for example `npm run release -- prepatch --tag=alpha --preview --any-branch`.

## Tests

We have unit tests written in Jest that test each of the support files in the _src_ folder.

### Running the tests

VSCode is set up with debug launch configurations for running the tests. Run _Jest tests - all files_ from the VSCode debug window to run all the tests. Or open a test file and run _Jest tests - current file_ to run _just_ the currently opened file. Thes VSCode launch configurations are recommended as they allow breakpoint debugging of tests directly inside the VSCode IDE.

There are also commands to run the tests manually in a terminal. Run all unit tests with:

```sh
npm run test:unit
```

Or alternatively run `npm test` to lint (Prettier and ESLint), typecheck and run the unit tests - this is useful as a 'full' test, for example before pushing to git.

Run a single test by passing a filename after the [npm custom argument double dash](https://docs.npmjs.com/cli/v6/commands/npm-run-script#description). For example, running `npm run test:unit -- cookie` would run all the test files containing _cookie_ in the name include _acceptCookieBanner_, _setCookie_ etc.

## Step definitions

### Given steps

Given…

<!-- START given generated comment -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN COMMAND TO UPDATE -->
Step | Summary
----- | -------
`/^I open the (url\|site) "([^"]*)?"$/` | Open a site in the current browser window/tab
`/^the element "([^"]*)?" is( not)* visible$/` | Check the (in)visibility of a element
`/^the element "([^"]*)?" is( not)* enabled$/` | Check if a element is (not) enabled
`/^the element "([^"]*)?" is( not)* selected$/` | Check if a element is (not) selected
`/^the checkbox "([^"]*)?" is( not)* checked$/` | Check if a checkbox is (not) checked
`/^there is (an\|no) element "([^"]*)?" on the page$/` | Check if a element (does not) exist
`/^the title is( not)* "([^"]*)?"$/` | Check the title of the current browser window/tab
`/^the element "([^"]*)?" contains( not)* the same text as element "([^"]*)?"$/` | Compare the text of two elements
`/^the (button\|element) "([^"]*)?"( not)* matches the text "([^"]*)?"$/` | Check if a element equals the given text
`/^the (button\|element) "([^"]*)?"( not)* contains the text "([^"]*)?"$/` | Check if a element contains the given text
`/^the (button\|element) "([^"]*)?"( not)* contains any text$/` | Check if a element does not contain any text
`/^the (button\|element) "([^"]*)?" is( not)* empty$/` | Check if a element is empty
`/^the page url is( not)* "([^"]*)?"$/` | Check the url of the current browser window/tab
`/^the( css)* attribute "([^"]*)?" from element "([^"]*)?" is( not)* "([^"]*)?"$/` | Check the value of a element's (css) attribute
`/^the cookie "([^"]*)?" contains( not)* the value "([^"]*)?"$/` | Check the value of a cookie
`/^the cookie "([^"]*)?" does( not)* exist$/` | Check the existence of a cookie
`/^the element "([^"]*)?" is( not)* ([\d]+)px (broad\|tall)$/` | Check the width/height of a element
`/^the element "([^"]*)?" is( not)* positioned at ([\d]+)px on the (x\|y) axis$/` | Check the position of a element
`/^I have a screen that is ([\d]+) by ([\d]+) pixels$/` | Set the browser size to a given size
`/^I have closed all but the first (window\|tab)$/` | Close all but the first browser window/tab
`/^a (alertbox\|confirmbox\|prompt) is( not)* opened$/` | Check if a modal is opened
`I debug` | Add a breakpoint to stop the running browser and give you time to jump into it and check the state of your application ([WDIO Help on Debug](http://webdriver.io/api/utility/debug.html)).
`/^I am logged in to (beta\|live\|test) Accounts with username "([A-z0-9_@.]+)" and password "([A-z0-9_]+)"$/` | Log into a specific version of Nice accounts independently of using TopHat. Username and Password should be names of environment variables (eg, Given I am logged in to beta Accounts with username 'ACCOUNTS_EMAIL' and password 'ACCOUNTS_PASSWORD'). If this is used remember to redirect back to where you expect to be
`/^I am logged out of NICE accounts$/` | Log out of NICE accounts. If this is used remember to redirect back to where you expect to be
<!-- END given generated comment -->

### When steps

When…

<!-- START when generated comment -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN COMMAND TO UPDATE -->
Step | Summary
----- | -------
`/^I (click\|doubleclick) on the (link\|button\|element) "([^"]*)?"$/` | (Double)click a link, button or element
`/^I (add\|set) "([^"]*)?" to the inputfield "([^"]*)?"$/` | Add or set the content of an input field
`/^I clear the inputfield "([^"]*)?"$/` | Clear an input field
`/^I drag element "([^"]*)?" to element "([^"]*)?"$/` | Drag a element to another element
`/^I pause for (\d+)ms$/` | Pause for a certain number of milliseconds
`/^I set a cookie "([^"]*)?" with the content "([^"]*)?"$/` | Set the content of a cookie with the given name to the given string
`/^I delete the cookie "([^"]*)?"$/` | Delete the cookie with the given name
`/^I press "([^"]*)?"$/` | Press a given key. You’ll find all supported characters [here](https://w3c.github.io/webdriver/webdriver-spec.html#keyboard-actions). To do that, the value has to correspond to a key from the table.
`/^I (accept\|dismiss) the (alertbox\|confirmbox\|prompt)$/` | Accept or dismiss a modal window
`/^I enter "([^"]*)?" into the prompt$/` | Enter a given text into a modal prompt
`/^I scroll to element "([^"]*)?"$/` | Scroll to a given element
`/^I close the last opened (window\|tab)$/` | Close the last opened browser window/tab
`/^I focus the last opened (window\|tab)$/` | Focus the last opened browser window/tab
`/^I select the (\d+)(st\|nd\|rd\|th) option for element "([^"]*)?"$/` | Select a option based on its index
`/^I select the option with the (name\|value\|text) "([^"]*)?" for element "([^"]*)?"$/` | Select a option based on its name, value or visible text
`/^I move to element "([^"]*)?"(?: with an offset of (\d+),(\d+))*$/` | Move the mouse by an (optional) offset of the specified element
`/^I refresh$/` | Refresh the current page
`/^I log in to Accounts via TopHat with username "([A-Z0-9_]+)" and password "([A-Z0-9_]+)"$/` | Use TopHat in your application to log into Nice accounts. Username and Password should be names of environment variables 
`/^I focus on the element "([^"]+)"$/` | Move focus to the given element
`/^I accept all cookies$/` | Accept all cookies using the NICE cookie banner
<!-- END when generated comment -->

### Then steps

Then…

<!-- START then generated comment -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN COMMAND TO UPDATE -->
Step | Summary
----- | -------
`/^I expect that the title is( not)* "([^"]*)?"$/` | Check the title of the current browser window/tab
`/^I expect that element "([^"]*)?" does( not)* appear exactly "([^"]*)?" times$/` | Checks that the element is on the page a specific number of times
`/^I expect that element "([^"]*)?" is( not)* visible$/` | Check if a certain element is (not) visible
`/^I expect that element "([^"]*)?" becomes( not)* visible$/` | Check if a certain element becomes visible
`/^I expect that element "([^"]*)?" is( not)* within the viewport$/` | Check if a certain element is within the current viewport
`/^I expect that element "([^"]*)?" does( not)* exist$/` | Check if a certain element exists
`/^I expect that element "([^"]*)?"( not)* contains the same text as element "([^"]*)?"$/` | Compare the text of two elements
`/^I expect that (button\|element) "([^"]*)?"( not)* matches the text "([^"]*)?"$/` | Check if a element or input field equals the given text
`/^I expect that (button\|element) "([^"]*)?"( not)* contains the text "([^"]*)?"$/` | Check if a element or input field contains the given text
`/^I expect that (button\|element) "([^"]*)?"( not)* contains any text$/` | Check if a element or input field contains any text
`/^I expect that (button\|element) "([^"]*)?" is( not)* empty$/` | Check if a element or input field is (not) empty
`/^I expect that the url is( not)* "([^"]*)?"$/` | Check if the the URL of the current browser window/tab is (not) a certain string
`/^I expect that the path is( not)* "([^"]*)?"$/` | Check if the path of the URL of the current browser window/tab is (not) a certain string
`/^I expect the url to( not)* contain "([^"]*)?"$/` | Check if the URL of the current browser window/tab (doesn't) contain(s) a certain string
`/^I expect that the( css)* attribute "([^"]*)?" from element "([^"]*)?" is( not)* "([^"]*)?"$/` | Check the value of a element's (css) attribute
`/^I expect that checkbox "([^"]*)?" is( not)* checked$/` | Check if a check-box is (not) checked
`/^I expect that element "([^"]*)?" is( not)* selected$/` | Check if a element is (not) selected
`/^I expect that element "([^"]*)?" is( not)* enabled$/` | Check if a element is (not) enabled
`/^I expect that cookie "([^"]*)?"( not)* contains "([^"]*)?"$/` | Check if a cookie with a certain name contains a certain value
`/^I expect that cookie "([^"]*)?"( not)* exists$/` | Check if a cookie with a certain name exist
`/^I expect that element "([^"]*)?" is( not)* ([\d]+)px (broad\|tall)$/` | Check the width/height of an element
`/^I expect that element "([^"]*)?" is( not)* positioned at ([\d]+)px on the (x\|y) axis$/` | Check the position of an element
`/^I expect that element "([^"]*)?" (has\|does not have) the class "([^"]*)?"$/` | Check if a element has a certain class
`/^I expect a new (window\|tab) has( not)* been opened$/` | Check if a new window/tab has been opened
`/^I expect the url "([^"]*)?" is opened in a new (tab\|window)$/` | Check if a URL is opened in a new browser window/tab
`/^I expect that element "([^"]*)?" is( not)* focused$/` | Check if a element has the focus
`/^I wait on element "([^"]*)?"(?: for (\d+)ms)*(?: to( not)* (be checked\|be enabled\|be selected\|be visible\|contain a text\|contain a value\|exist))*$/` | Wait for a element to be checked, enabled, selected, visible, contain a certain value or text or to exist
`/^I expect that a (alertbox\|confirmbox\|prompt) is( not)* opened$/` | Check that a modal is (not) opened
`/^I expect that a (alertbox\|confirmbox\|prompt)( not)* contains the text "([^"]*)?"$/` | Check the text of a modal. E.g. `I expect that a alertbox contains the text "Continue?"` or `I expect that a confirmbox not contains the text "Continue?"`
`/^the page should have no(?: (A\|AA))? accessibility issues$/` | Check each element on the page for accessibility issues. Please note this won't find all accessibility issues.
<!-- END then generated comment -->

## License

[MIT](LICENSE).

We've forked code from webdriverio's [cucumber-boilerplate](https://github.com/webdriverio/cucumber-boilerplate) which is also licensed under [MIT](https://github.com/webdriverio/cucumber-boilerplate/blob/master/LICENSE).
