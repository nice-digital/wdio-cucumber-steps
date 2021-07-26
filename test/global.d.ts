declare global {
	declare namespace NodeJS {
		// 	import { expect } from "expect";

		interface Global {
			// 		//_expect: typeof expect;
			// 		//expect: typeof expect;
			browser?: WebdriverIO.Browser;
		}
	}
}
