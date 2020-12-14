/**
 * Accept all cookies using the NICE cookie banner.
 * We use this as the cookie banner blocks clicks.
 */
export async function acceptCookieBanner(): Promise<void> {
	// The cookie banner (and license key) load async from the CDN
	// so we need to wait for it to load
	const cookieBannerElement = await $("body #ccc");
	await cookieBannerElement.waitForDisplayed({ timeout: 2000 });

	const acceptCookiesButtonElement = await cookieBannerElement.$(
		"button.ccc-accept-button"
	);

	// If cookies have already been chosen then the accept button doesn't show
	if (await acceptCookiesButtonElement.isDisplayed()) {
		await acceptCookiesButtonElement.click();
	}
}
