import { login } from "./login";
import { isLoggedIn } from "../lib/nice-accounts";
/**
 * Log in to nice accounts by clicking on TopHat
 * @param  {string}   usernameEnvVar The email address used to sign in to Nice Accounts
 * @param  {string}   passwordEnvVar The password used to sign in to Nice Accounts
 */
export async function tophatLogin(
	usernameEnvVar: string,
	passwordEnvVar: string
): Promise<void> {
	if (await isLoggedIn()) return;

	const topHatElement = await $(".nice-tophat");

	// TopHat load via JS so won't always exist on page load
	await topHatElement.waitForExist();

	const signInElement = await $("body #signin");
	await signInElement.click();

	login(usernameEnvVar, passwordEnvVar);
}
