/**
 * @module Readme replacer
 *
 * Replaces html comments in the readme with a table of regex and title
 * for each of given, when, then step definitions.
 */

import { writeFile, readFile } from "fs-extra";
import path from "path";

process.env.README = "true";

import "../src/given";
import "../src/when";
import "../src/then";

import { customSteps, StepType } from "../src/support/utils";

const readmePath: string = path.join(__dirname, "../README.md");

/**
 * Gets a regular expression that can be used to find an HTML comment for that step
 * e.g. <!-- START given -->STUFF<!-- END given -->
 *
 * @param {string} step One of given/when/then
 * @returns {RegExp} A regular expression for matching the HTML comment within the readme source
 */
const getCommentRegex = (stepType: StepType): RegExp =>
	new RegExp(
		`<!-- START ${stepType}.*-->([\\s\\S]*)<!-- END ${stepType} .*-->`,
		"gm"
	);

/**
 * Replaces pipes with their HTML entity code - markdown tables can't have pipes in the body.
 *
 * @param {string} text The text in which to look for pipes
 * @returns {string} The text with pipes escaped
 */
const escapePipes = (text: string): string => text.replace(/\|/g, "\\|");

/**
 * Gets the content for the given step, which contains all the definitions and their summaries
 *
 * @param {string} step One of given/when/then
 * @returns {string} The new markdown, with each of the step definitions
 */
const getContent = (stepType: StepType): string => {
	const stepDefinitions = customSteps.filter((s) => s.stepType === stepType);

	const tableHead = "Step | Summary\r\n----- | -------";
	const tableBody: string = stepDefinitions
		.map(
			(stepDef): string =>
				`\`${escapePipes(stepDef.pattern.toString())}\` | ${stepDef.docs}`
		)
		.join("\r\n");

	return `<!-- START ${stepType} generated comment -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN COMMAND TO UPDATE -->
${tableHead}
${tableBody}
<!-- END ${stepType} generated comment -->`;
};

/**
 * Saves the content back to the given file
 *
 * @param {string} file The path of the file
 * @param {string} readme The file contents to save
 */
const saveToFile = async (file: string, readme: string) => {
	try {
		await writeFile(file, readme);
	} catch (err: unknown) {
		console.error(`Error saving file to ${file}`);
		process.exit(1);
	}

	console.info(`Replaced ${customSteps.length} steps in ${file}`);
};

const replaceReadmeContents = async (filePath: string) => {
	let readme: string;
	try {
		readme = await readFile(filePath, "utf8");
	} catch (err: unknown) {
		console.error(`Error reading from file file to ${filePath}`);
		process.exit(1);
	}

	readme = readme.replace(getCommentRegex("given"), getContent("given"));
	readme = readme.replace(getCommentRegex("when"), getContent("when"));
	readme = readme.replace(getCommentRegex("then"), getContent("then"));

	saveToFile(filePath, readme);
};

replaceReadmeContents(readmePath);
