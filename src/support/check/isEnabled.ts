import { expect } from "chai";

/**
 * Check if the given selector is enabled
 * @param  {String}   selector   Element selector
 * @param  {String}   falseCase Whether to check if the given selector is enabled or not
 */
export async function isEnabled(
	selector: string,
	falseCase: string
): Promise<void> {
	const element = await $(selector),
		enabled = await element.isEnabled();

	if (falseCase) {
		expect(enabled).to.not.equal(
			true,
			`Expected element "${selector}" not to be enabled`
		);
	} else {
		expect(enabled).to.equal(
			true,
			`Expected element "${selector}" to be enabled`
		);
	}
}
