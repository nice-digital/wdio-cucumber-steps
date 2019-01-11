import { Given, getNICEAccountsUrl, applyStepDefinitions } from "../../src/support/utils";

describe("utils", () => {
	describe("Given", () => {

		it("creates a step definition object", () => {
			let step = Given("rgx", "fn");

			expect(step).toMatchObject({
				pattern: "rgx",
				options: null,
				code: "fn",
				title: "",
				examples: []
			});
		});

		it("can set title", () => {
			let step = Given("rgx", "fn").withDocs("test");

			expect(step).toMatchObject({
				pattern: "rgx",
				options: null,
				code: "fn",
				title: "test",
				examples: []
			});
		});

		it("can add an example", () => {
			let step = Given("rgx", "fn").withExample("test");

			expect(step).toMatchObject({
				pattern: "rgx",
				options: null,
				code: "fn",
				title: "",
				examples: ["test"]
			});
		});

		it("can add options", () => {
			let step = Given("rgx", "fn").withOptions({ test: true });

			expect(step).toMatchObject({
				pattern: "rgx",
				options: { test: true },
				code: "fn",
				title: "",
				examples: []
			});
		});
	});

	describe("getNICEAccountsUrl", () => {

		it("should return the correct URL when the domain is live", () => {

			let URL = getNICEAccountsUrl("live");
			expect(URL).toEqual("https://accounts.nice.org.uk");
		});

		it("should return the correct URL when the domain is test", () => {

			let URL = getNICEAccountsUrl("test");
			expect(URL).toEqual("https://test-accounts.nice.org.uk");
		});

		it("should return the correct URL when the domain is beta", () => {

			let URL = getNICEAccountsUrl("beta");
			expect(URL).toEqual("https://beta-accounts.nice.org.uk");
		});

		it("should not return URL when the domain is fake", () => {

			let URL = getNICEAccountsUrl("fake");
			expect(URL).toEqual(false);
		});
	});


	describe("applyStepDefinitions", () => {

		it("passes given step objects to given function", ()=>{
			const myFunction = jest.fn();
			const steps = [
				{
					pattern: "regex",
					options: "options",
					code: "functionOne"
				},
				{
					pattern: "regex2",
					code: "functionTwo"
				}
			];

			applyStepDefinitions(myFunction, steps);
			expect(myFunction).toBeCalledWith(
				"regex", "options", "functionOne"
			);
			expect(myFunction).toBeCalledWith(
				"regex2", "functionTwo"
			);
		});

	});
});
