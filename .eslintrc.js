module.exports = {
	root: true,
	plugins: ["@typescript-eslint", "prettier"],
	extends: ["eslint:recommended", "plugin:prettier/recommended"],
	env: {
		node: true,
	},
	globals: {
		$: "readonly",
		$$: "readonly",
		browser: "readonly",
	},
	parserOptions: {
		ecmaVersion: 2019,
		sourceType: "module",
	},
	overrides: [
		{
			files: ["./test/**/*.js"],
			env: {
				jest: true,
			},
		},
		{
			files: ["*.js"],
			rules: {
				"@typescript-eslint/explicit-function-return-type": "off",
				"@typescript-eslint/no-var-requires": "off",
				"@typescript-eslint/explicit-module-boundary-types": "off",
			},
		},
		{
			files: [`**/*.ts`],
			parser: `@typescript-eslint/parser`,
			parserOptions: {
				project: [
					`./tsconfig.json`,
					`./src/tsconfig.json`,
					`./test/tsconfig.json`,
				],
			},
			extends: [
				"eslint:recommended",
				"plugin:prettier/recommended",
				"plugin:@typescript-eslint/eslint-recommended",
				"plugin:@typescript-eslint/recommended",
				`prettier/@typescript-eslint`,
			],
			rules: {
				// Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
				// e.g. "@typescript-eslint/explicit-function-return-type": "off",
				"@typescript-eslint/no-explicit-any": 2,
				"@typescript-eslint/no-misused-promises": 1,
			},
		},
	],
};
