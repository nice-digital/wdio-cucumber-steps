import { getNICEAccountsUrl } from "../../src/support/utils";

describe("getNICEAccountsUrl", () => {

	it("should return a URL with an appropriate domain", () => {

		let URL = getNICEAccountsUrl("live");
		expect(URL).toEqual("https://accounts.nice.org.uk");

		URL = getNICEAccountsUrl("environment");
		expect(URL).toEqual("https://environment-accounts.nice.org.uk");
	});
});
