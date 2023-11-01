export function GenerateUUID() {
	return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'
		.replace(/[xy]/g, function (c) {
			const r = Math.random() * 16 | 0,
				v = c == 'x' ? r : (r & 0x3 | 0x8);
			return v.toString(16);
		});
}

export function ToFirstLetterUpper(value) {
	let result = [];
	value.split(' ').forEach((element) => {
		element = element.charAt(0).toUpperCase() + element.slice(1);
		result.push(element);
	});
	return result.join(' ');
}

export function SearchText(plainText, search) {
	var regex = new RegExp('\\b' + search + '\\b', "g");
	let result = plainText.replaceAll(regex, '<span name="search" style="background-color:yellow; padding:0 4px 0 4px;">' + search + '</span>');
	return result;
}

export function RemoveText(plainText, removeText) {
	var regex = new RegExp('\\b' + removeText + '\\b', "g");
	let result = plainText.replaceAll(regex, '');
	return result;
}

export function ReplaceAllText(plainText, sourceText, targetText) {
	var regex = new RegExp('\\b' + sourceText + '\\b', "g");
	let result = plainText.replaceAll(regex, '<span style="background-color:lightgreen; padding:0 4px 0 4px;">' + targetText + '</span>');
	return result;
}

export function CompareText(sourceText, targetText) {
	let sDiffIndexCount = sourceText.length - targetText.length;

	let minLength = (sDiffIndexCount < 0) ? sourceText.length : targetText.length;

	let resultSourceText = "";
	let resultTargetText = "";
	for (let i = 0; i < minLength; i++) {
		if (sourceText[i] != targetText[i]) {
			resultSourceText += '<span style="background-color:lightyellow;">' + sourceText[i] + '</span>';
			resultTargetText += '<span style="background-color:lightyellow;">' + targetText[i] + '</span>';
		}
		else {
			resultSourceText += sourceText[i];
			resultTargetText += targetText[i];
		}
	}

	for (let i = minLength; i < sourceText.length; i++) {
		resultSourceText += sourceText[i];
	}
	for (let i = minLength; i < targetText.length; i++) {
		resultTargetText += targetText[i];
	}

	return {
		ResultSourceText: resultSourceText,
		ResultTargetText: resultTargetText
	};
}
export const TypeOfRandomString = {
	All: { Key: 0, Value: 'All Characters' },
	WithoutAsterix: { Key: 1, Value: 'Without Asterix Characters' },
	WithoutNumber: { Key: 2, Value: 'Without Number Characters' },
	UppperCase: { Key: 2, Value: 'Uppper Case Characters' },
	LowerCase: { Key: 3, Value: 'Lower Case Characters' },
	UppperCaseWithNumber: { Key: 4, Value: 'Uppper Case With Number' },
	LowerCaseWithNumber: { Key: 5, Value: 'Lower Case  With Number' }
};

const allCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!#+?*_-.&';
const withoutAsterixCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
const withoutNumberCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
const upperCaseCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerCaseCharacters = 'abcdefghijklmnopqrstuvwxyz';
const upperCaseWithNumberCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
const lowerCaseWithNumberCharacters = 'abcdefghijklmnopqrstuvwxyz0123456789';

function GetTypeOfRandomString(selectedType) {
	let selectedTypeString = "";
	switch (selectedType) {
		case TypeOfRandomString.All: selectedTypeString = allCharacters; break;
		case TypeOfRandomString.WithoutAsterix: selectedTypeString = withoutAsterixCharacters; break;
		case TypeOfRandomString.WithoutNumber: selectedTypeString = withoutNumberCharacters; break;
		case TypeOfRandomString.UppperCase: selectedTypeString = upperCaseCharacters; break;
		case TypeOfRandomString.LowerCase: selectedTypeString = lowerCaseCharacters; break;
		case TypeOfRandomString.UppperCaseWithNumber: selectedTypeString = upperCaseWithNumberCharacters; break;
		case TypeOfRandomString.LowerCaseWithNumber: selectedTypeString = lowerCaseWithNumberCharacters; break;
		default: selectedTypeString = allCharacters; break;
	}
	return selectedTypeString;
}

export function GenerateRandomString(length, typeOfRandomString = TypeOfRandomString.All) {

	let selectedTypeString = GetTypeOfRandomString(typeOfRandomString);
	let charactersLength = selectedTypeString.length;
	let counter = 0;
	let result = '';
	while (counter < length) {
		result += selectedTypeString.charAt(Math.floor(Math.random() * charactersLength));
		counter += 1;
	}
	return result;
}