import { notificationDataList } from '../stores/notificationStore.js';
import { notificationDirection } from '../stores/notificationStore.js';
export function ShowNotification(title, message, direction = null) {
	let list = [];
	notificationDataList.subscribe((value) => {
		list = value;
	});
	let id = GenerateUUID();
	let order = list.length;
	list.push({
		index: order,
		id: id,
		show: false,
		title: title,
		message: message,
		direction: direction !== null ? direction : notificationDirection.bottomRight
	})
	notificationDataList.set(list);

	setTimeout(() => {
		list.forEach((item) => {
			if (item.id === id)
				item.show = true
		});
		notificationDataList.set(list);
	}, 10);

	setTimeout(() => {
		list.forEach((item) => {
			if (item.id === id)
				item.show = false
		});
		notificationDataList.set(list);
	}, 3000);

	setTimeout(() => {
		list = list.filter(item => item.id !== id)
		notificationDataList.set(list);
	}, 4000);
}


export function GenerateUUID() {
	return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'
		.replace(/[xy]/g, function (c) {
			const r = Math.random() * 16 | 0,
				v = c == 'x' ? r : (r & 0x3 | 0x8);
			return v.toString(16);
		});
}

export function ToFirstLetterUpper(value) {
	value = ReplaceNewLine(value);
	let result = [];
	value.split(' ').forEach((element) => {
		element = element.charAt(0).toUpperCase() + element.slice(1);
		result.push(element);
	});
	return result.join(' ');
}

export function SearchText(plainText, search) {
	var regex = new RegExp('\\b' + search + '\\b', "g");
	plainText = ReplaceNewLine(plainText);
	let result = plainText.replaceAll(regex, '<span name="search" style="background-color:yellow; padding:0 4px 0 4px;">' + search + '</span>');
	return result;
}

export function RemoveText(plainText, removeText) {
	var regex = new RegExp('\\b' + removeText + '\\b', "g");
	plainText = ReplaceNewLine(plainText);
	let result = plainText.replaceAll(regex, '');
	return result;
}

export function ReplaceAllText(plainText, sourceText, targetText) {
	var regex = new RegExp('\\b' + sourceText + '\\b', "g");
	plainText = ReplaceNewLine(plainText);
	let result = plainText.replaceAll(regex, '<span style="background-color:green; padding:0 4px 0 4px;">' + targetText + '</span>');
	return result;
}

function ReplaceNewLine(plainText) {
	debugger
	let resultText = "";
	for (let i = 0; i < plainText.length; i++) {
		let item = plainText[i];
		resultText += item;
		if (item == '\n') {
			resultTargetText += '<br/>';
		}
	}
	return resultText;
}

export function CompareText(sourceText, targetText) {
	let sDiffIndexCount = sourceText.length - targetText.length;

	let minLength = (sDiffIndexCount < 0) ? sourceText.length : targetText.length;

	let resultSourceText = "";
	let resultTargetText = "";
	for (let i = 0; i < minLength; i++) {
		if (sourceText[i] != targetText[i]) {
			resultSourceText += '<span style="background-color:yellow;">' + sourceText[i] + '</span>';
			resultTargetText += '<span style="background-color:yellow;">' + targetText[i] + '</span>';
		}
		else {
			resultSourceText += sourceText[i];
			resultTargetText += targetText[i];
		}

		if (sourceText[i] == '\n') {
			resultSourceText += '<br/>';
		}
		if (targetText[i] == '\n') {
			resultTargetText += '<br/>';
		}
	}

	for (let i = minLength; i < sourceText.length; i++) {
		resultSourceText += '<span style="background-color:yellow;">' + sourceText[i] + '</span>';
		if (sourceText[i] == '\n') {
			resultSourceText += '<br/>';
		}
		if (targetText[i] == '\n') {
			resultTargetText += '<br/>';
		}
	}

	for (let i = minLength; i < targetText.length; i++) {
		resultTargetText += '<span style="background-color:yellow;">' + targetText[i] + '</span>';
		if (sourceText[i] == '\n') {
			resultSourceText += '<br/>';
		}
		if (targetText[i] == '\n') {
			resultTargetText += '<br/>';
		}
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