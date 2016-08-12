import {hyphen2camel} from '../../../main/ES/helpers';

describe('hyphen2camel', () => {
	const hyphenTest = 'hyphen-case';
	const camelTest = 'hyphenCase';

	it('Converts hyphen-case to camelCase', () => {
		expect(hyphen2camel(hyphenTest)).toBe(camelTest);
	});

	it('Leaves camelCase as camelCase', () => {
		expect(hyphen2camel(camelTest)).toBe(camelTest);
	});
});
