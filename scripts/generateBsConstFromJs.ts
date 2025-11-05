import fs from 'fs';
import path from 'path';

const rootDir: string = path.join(__dirname, '..');
const sourcePath: string = path.join(rootDir, 'assetsJs');
const destinationPath: string = 'src/assets/generated';

// Safely load theme.js if it exists
const themeFilePath = path.join(sourcePath, 'theme.js');
let themesData: Record<string, any> | null = null;
if (fs.existsSync(themeFilePath)) {
	const getThemes = require(themeFilePath);
	themesData = getThemes();
} else {
	console.log(`Note: ${themeFilePath} does not exist, skipping theme generation.`);
}

// Safely load translation.js if it exists
const translationFilePath = path.join(sourcePath, 'translation.js');
let translationData: Record<string, any> | null = null;
if (fs.existsSync(translationFilePath)) {
	const getTranslation = require(translationFilePath);
	translationData = getTranslation();
} else {
	console.log(`Note: ${translationFilePath} does not exist, skipping translation generation.`);
}

// Only generate files if data is available
if (themesData) {
	writeJsToBSFile(themesData, destinationPath, 'bsTheme', themeFilePath);
}

if (translationData) {
	writeJsToJSONFile(translationData, destinationPath, 'translation', translationFilePath);
}

/**
 * Writes a language-keyed object to separate JSON files per language.
 * Each file will be named like: {lang}.{fileName}.json (e.g., en.translation.json)
 *
 * @param data - The language-keyed data object (e.g., { en: {...}, hu: {...} })
 * @param destination - Target folder path
 * @param fileName - Logical name to use in the output file names
 */
function writeJsToJSONFile(
	data: Record<string, unknown>,
	destination: string,
	fileName: string,
	sourceFile: string
): void {
	if (!fs.existsSync(destination)) {
		fs.mkdirSync(destination, { recursive: true });
	}

	for (const [lang, content] of Object.entries(data)) {
		const jsonContent = JSON.stringify(content, null, 2);
		const destPath = path.join(rootDir, destination, `${lang}.${fileName}.json`);

		try {
			fs.writeFileSync(destPath, jsonContent, 'utf8');
			console.log(`Generated: ${destPath}`);
			console.log(`Source:    ${sourceFile}`);
			console.log('');
		} catch (err) {
			console.log(`An error occurred while writing file for language "${lang}".`);
			console.log(err);
			console.log('');
		}
	}
}

/**
 * Converts a JS object to BrightScript code (enums, namespaces, or associative arrays) and writes it to a .bs file.
 * @param data - The data to convert
 * @param destination - Output folder path
 * @param fileName - Output file name (without extension)
 */
function writeJsToBSFile(
	data: Record<string, unknown>,
	destination: string,
	fileName: string,
	sourceFile: string
): void {
	const destPath = path.join(rootDir, destination, `${fileName}.bs`);

	function getType(value: unknown): string {
		if (Array.isArray(value)) return 'array';
		if (value !== null && typeof value === 'object') return 'object';
		return typeof value;
	}

	function buildAssociativeArray(obj: Record<string, any>, indent: string): string {
		let result = '{\n';
		const entries = Object.entries(obj);

		for (const [k, v] of entries) {
			const lineIndent = indent + '\t';
			const t = getType(v);
			let valueStr: string;

			if (t === 'object') {
				valueStr = buildAssociativeArray(v, lineIndent);
			} else if (t === 'array') {
				valueStr = JSON.stringify(v);
			} else if (t === 'string') {
				valueStr = `"${v}"`;
			} else if (t === 'number' || t === 'boolean') {
				valueStr = `${v}`;
			} else if (v === null) {
				valueStr = 'invalid';
			} else {
				valueStr = `${v}`;
			}

			result += `${lineIndent}${k}: ${valueStr}\n`;
		}

		result += `${indent}}`;
		return result;
	}

	function convert(
		obj: Record<string, any>,
		indent: string = '',
		parentName: string = ''
	): string {
		const entries = Object.entries(obj);
		if (entries.length === 0) {
			return parentName ? `${indent}namespace ${parentName}\n${indent}end namespace\n` : '';
		}

		const childTypes = entries.map(([_, val]) => getType(val));
		const firstType = childTypes[0];
		const allSameType = childTypes.every((t) => t === firstType);
		const isEnum = allSameType && firstType !== 'object';

		let result = '';
		if (parentName) {
			result += isEnum
				? `${indent}enum ${parentName}\n`
				: `${indent}namespace ${parentName}\n`;
		}

		const innerIndent = parentName ? indent + '\t' : indent;
		let hasFloat = false;

		if (isEnum && firstType === 'number') {
			for (const val of Object.values(obj)) {
				if (!Number.isInteger(val)) {
					hasFloat = true;
					break;
				}
			}
		}

		for (const [key, value] of entries) {
			const valueType = getType(value);

			if (key.endsWith('_aa') && valueType === 'object' && !Array.isArray(value)) {
				const aaStr = buildAssociativeArray(value as Record<string, unknown>, innerIndent);
				result += `${innerIndent}const ${key} = ${aaStr}\n`;
				continue;
			}

			if (valueType === 'object') {
				result += convert(value as Record<string, any>, innerIndent, key);
			} else if (isEnum) {
				if (valueType === 'string') {
					result += `${innerIndent}${key} = "${value}"\n`;
				} else if (valueType === 'array') {
					result += `${innerIndent}${key} = ${JSON.stringify(value)}\n`;
				} else if (valueType === 'number') {
					result += `${innerIndent}${key} = ${
						hasFloat && Number.isInteger(value as number)
							? (value as number).toFixed(1)
							: value
					}\n`;
				} else if (value === null) {
					result += `${innerIndent}${key} = invalid\n`;
				} else {
					result += `${innerIndent}${key} = ${value}\n`;
				}
			} else {
				if (valueType === 'string') {
					result += `${innerIndent}const ${key} = "${value}"\n`;
				} else if (valueType === 'array') {
					result += `${innerIndent}const ${key} = ${JSON.stringify(value)}\n`;
				} else if (valueType === 'number' || valueType === 'boolean') {
					result += `${innerIndent}const ${key} = ${value}\n`;
				} else if (value === null) {
					result += `${innerIndent}const ${key} = invalid\n`;
				} else {
					result += `${innerIndent}const ${key} = ${value}\n`;
				}
			}
		}

		if (parentName) {
			result += isEnum
				? `${indent}end enum\n`
				: `${indent}end namespace\n`;
		}

		return result;
	}

	const convertedContent = convert(data);
	const brsWrappedContent = `namespace UI

${convertedContent}end namespace

`;

	try {
		fs.writeFileSync(destPath, brsWrappedContent, 'utf8');
		console.log(`Generated: ${destPath}`);
		console.log(`Source:    ${sourceFile}`);
		console.log('');
	} catch (err) {
		console.log('An error occurred while writing the JSON object to the file.');
		console.log(err);
		console.log('');
	}
}
