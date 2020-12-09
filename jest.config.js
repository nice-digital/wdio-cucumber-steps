module.exports = {
	roots: ["<rootDir>/src/", "<rootDir>/test/"],
	moduleNameMapper: {
		"@src/(.*)": "<rootDir>/src/$1",
	},
	testMatch: ["**/?(*.)+(spec|test).ts"],
	moduleFileExtensions: ["js", "ts"],
	transform: {
		"^.+\\.(ts|tsx)$": "ts-jest",
	},
	preset: "ts-jest",
	collectCoverage: false,
	collectCoverageFrom: ["src/support/**/*.ts"],
	notify: true,
	setupFilesAfterEnv: ["./test/setup.js"],
	globals: {
		"ts-jest": {
			tsconfig: "test/tsconfig.json",
		},
	},
};
