import { login } from "./login";
/**
 * Log in to nice accounts by clicking on Global nav
 * @param  {string}   usernameEnvVar The email address used to sign in to Nice Accounts
 * @param  {string}   passwordEnvVar The password used to sign in to Nice Accounts
 */
export async function globalNavAccountsLogin(
	usernameEnvVar: string,
	passwordEnvVar: string
): Promise<void> {
	// You're already logged in if you have the nrpa auth cookie, so no need to do anything more
	const accountsAuthCookie = await browser.getCookies("__nrpa_2.2");
	if (accountsAuthCookie.length > 0) return;

	const headerElement = await $("header[aria-label='Site header']");
	await headerElement.waitForDisplayed();

	const mobileMenuButton = await $("#header-menu-button");

	if (await mobileMenuButton.isDisplayed()) {
		// This means we're on a smaller screen size
		await mobileMenuButton.click();
		const accountsLink = await $(
			"#header-menu a[href*='accounts.nice.org.uk/signin']"
		);
		await accountsLink.click();
	} else {
		const accountsLink = await $(
			"#header-menu-button+* a[href*='accounts.nice.org.uk/signin']"
		);
		await accountsLink.click();
	}
	login(usernameEnvVar, passwordEnvVar);
}
