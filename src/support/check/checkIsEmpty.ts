import { checkContainsAnyText } from "./checkContainsAnyText";

export async function checkIsEmpty(
	elementType: string,
	element: string,
	falseCase: string
): Promise<void> {
	let newFalseCase = true;

	if (typeof falseCase === "function") {
		newFalseCase = false;
	} else if (falseCase === " not") {
		newFalseCase = false;
	}

	await checkContainsAnyText(elementType, element, newFalseCase);
}
