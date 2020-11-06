module.exports = {
	root: true,
	parser: "@typescript-eslint/parser",
	extends: [
		"eslint:recommended",
		"plugin:prettier/recommended",
		"plugin:@typescript-eslint/eslint-recommended",
		"plugin:@typescript-eslint/recommended",
	],
	plugins: ["@typescript-eslint", "prettier"],
	extends: [
		"plugin:prettier/recommended",
		"plugin:@typescript-eslint/eslint-recommended",
		"plugin:@typescript-eslint/recommended",
	],
	parserOptions: {
		ecmaVersion: 2018,
		sourceType: "module",
	},
	rules: {
		// Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
		// e.g. "@typescript-eslint/explicit-function-return-type": "off",
		"@typescript-eslint/no-explicit-any": 2,
	},
	overrides: [
		{
			files: ["*.js"],
			rules: {
				"@typescript-eslint/explicit-function-return-type": "off",
				"@typescript-eslint/no-var-requires": "off",
				"@typescript-eslint/explicit-module-boundary-types": "off",
			},
		},
	],
};
