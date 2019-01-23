import { source as axeSource } from "axe-core";

/**
 * Check if the page has accessibility issues.
 */
module.exports = (level) => {
	var levels = ["wcag2a", "wcag2aa", "best-practice"];
	switch(level) {
		case "A":
			levels = ["wcag2a", "best-practice"];
			break;
		case "AA":
			levels = ["wcag2aa", "best-practice"];
			break;
		default:
			break;
	}
	// inject the script
	browser.execute(axeSource);
	// run inside browser and get results
	var results = browser.executeAsync(function(levels, done) {
		var options = {
			runOnly: {
				type: "tag",
				values: levels
			}
		};
		axe.run(options, function(err, results) { // eslint-disable-line no-undef
			if (err) done(err);
			done(results);
		});
	}, levels);

	var errors = results.value.violations.map(violation => {
		var elements = violation.nodes.map(node => node.html).join(", ");
		return `${violation.help} | ${elements}\n   (see ${violation.helpUrl})`;
	}).join("\n - ");

	expect(results.value.violations, `Found ${results.value.violations.length} accessibility errors on ${browser.getUrl()}:\n - ${errors}`).to.equal([]);

};
