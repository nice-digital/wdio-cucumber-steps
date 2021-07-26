module.exports = {
	roots: ["<rootDir>/../src/", "<rootDir>"],
	rootDir: "./",
	moduleNameMapper: {
		"@src/(.*)": "<rootDir>/../src/$1",
	},
	testMatch: ["**/?(*.)+(spec|test).ts"],
	moduleFileExtensions: ["js", "ts"],
	transform: {
		"^.+\\.(j|t)s$": "ts-jest",
	},
	preset: "ts-jest",
	collectCoverage: false,
	collectCoverageFrom: ["src/support/**/*.ts"],
	notify: true,
	testEnvironment: "node",
	setupFilesAfterEnv: ["./jest.setup.js"],
	globals: {
		"ts-jest": {
			tsConfig: "./tsconfig.json",
			isolatedModules: true,
		},
	},
};
