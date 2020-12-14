/**
 * Log in to nice accounts
 * @param  {string}   usernameEnvVar The name of the environment variables with the email address used to sign in to NICE Accounts
 * @param  {string}   passwordEnvVar The name of the environment variables with the password used to sign in to NICE Accounts
 */
export async function login(
	usernameEnvVar: string,
	passwordEnvVar: string
): Promise<void> {
	const username = process.env[usernameEnvVar],
		password = process.env[passwordEnvVar],
		emailInputElement = await $("body #Email"),
		passwordInputElement = await $("body #Password"),
		signInButton = await $("button[type='submit']");

	if (!username || !password)
		throw "Username and password environments variables for NICE accounts were empty";

	await emailInputElement.waitForDisplayed({ timeout: 4000 });

	await emailInputElement.setValue(username);
	await passwordInputElement.setValue(password);
	await signInButton.click();
}
