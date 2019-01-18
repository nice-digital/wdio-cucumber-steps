/**
 * @module Readme replacer
 *
 * Replaces html comments in the readme with a table of regex and title
 * for each of given, when, then step definitions.
 */

const fs = require("fs"),
	path = require("path");

import givenStepDefinitions from "../src/given/definitions";
import whenStepDefinitions from "../src/when/definitions";
import thenStepDefinitions from "../src/then/definitions";

// @flow
type StepDefType = {
	pattern: RegExp,
	title: string
  };

const stepDefinitionsMap = {
	given: givenStepDefinitions,
	when: whenStepDefinitions,
	then: thenStepDefinitions,
};

const readmePath: string = path.join(__dirname, "../README.md");

/**
 * Gets a regular expression that can be used to find an HTML comment for that step
 * e.g. <!-- START given -->STUFF<!-- END given -->
 *
 * @param {string} step One of given/when/then
 * @returns {RegExp} A regular expression for matching the HTML comment within the readme source
 */
const getCommentRegex = (step: string): RegExp =>
	new RegExp(`<!-- START ${ step }.*-->([\\s\\S]*)<!-- END ${ step } .*-->`, "gm");

/**
 * Replaces pipes with their HTML entity code - markdown tables can't have pipes in the body.
 *
 * @param {string} text The text in which to look for pipes
 * @returns {string} The text with pipes escaped
 */
const escapePipes: string = (text: string): string => text.replace(/\|/g, "\\|");

/**
 * Gets the content for the given step, which contains all the definitions and their summaries
 *
 * @param {string} step One of given/when/then
 * @returns {string} The new markdown, with each of the step definitions
 */
const getContent = (step: string): string => {
	const stepDefinitions: Array = stepDefinitionsMap[step];

	const tableHead: string = "Step | Summary\r\n----- | -------";
	const tableBody: string = stepDefinitions
		.map((stepDef: StepDefType): string => `\`${ escapePipes(stepDef.pattern.toString()) }\` | ${ stepDef.title }`)
		.join("\r\n");

	return `<!-- START ${ step } generated comment -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN COMMAND TO UPDATE -->
${ tableHead }
${ tableBody }
<!-- END ${ step } generated comment -->`;
};

/**
 * Handles reading the readme file contents. Replaces the html comment
 * placeholders for each of given when then with the relevant step
 * definitions.
 *
 * @param {Error} err Error, if any
 * @param {string} readme The contents of the file
 */
const handleReadFile = (err, readme: string) => {
	if(err) throw err;

	readme = readme.replace(getCommentRegex("given"), getContent("given"));
	readme = readme.replace(getCommentRegex("when"), getContent("when"));
	readme = readme.replace(getCommentRegex("then"), getContent("then"));

	saveToFile(readmePath, readme);
};

/**
 * Saves the content back to the given file
 *
 * @param {string} file The path of the file
 * @param {string} readme The file contents to save
 */
const saveToFile = (file: string, readme: string) => {
	fs.writeFile(file, readme, (err) => {
		if (err) throw err;
		console.info(`Replaced ${ givenStepDefinitions.length } 'given', ${ whenStepDefinitions.length } 'when' and ${ thenStepDefinitions.length } 'then' in ${ file }`);
	});
};

fs.readFile(readmePath, "utf8", handleReadFile);
