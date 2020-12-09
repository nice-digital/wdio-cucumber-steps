/*! https://github.com/webdriverio/cucumber-boilerplate/blob/master/src/support/check/checkClass.js */
/**
 * Check if the given element has the given class
 * @param  {String}   selector              Element selector
 * @param  {String}   falseCase         Whether to check for the
 * 																			class to exist
 *                                      or not ('has', 'does not have')
 * @param  {String}   expectedClassName The class name to check
 */
export async function checkClass(
	selector: string,
	falseCase: string,
	expectedClassName: string
): Promise<void> {
	const element = await $(selector);

	if (falseCase === "does not have") {
		expect(element).not.toHaveElementClass(expectedClassName, {
			message: `Element ${selector} should not have the class ${expectedClassName}`,
		});
	} else {
		expect(element).toHaveElementClass(expectedClassName, {
			message: `Element ${selector} should have the class ${expectedClassName}`,
		});
	}
}
