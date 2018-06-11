import { getNICEAccountsUrl } from "../../src/support/utils";
import { applyStepDefinitions } from "../../src/support/utils";

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

	describe("applyStepDefinitions", () => {

		it("passes given step objects to given function", ()=>{
			const myFunction = jest.fn();
			const steps = [
				{
					regex: "regex",
					options: "options",
					fn: "functionOne"
				},
				{
					regex: "regex2",
					fn: "functionTwo"
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
