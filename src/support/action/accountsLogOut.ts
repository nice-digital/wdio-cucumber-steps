export async function accountsLogOut(): Promise<void> {
	await browser.deleteCookies(["__ngat_1.2", "__nrpa_2.2"]);
	await browser.refresh();
}
