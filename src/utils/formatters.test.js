import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

describe('formatToKebabCase', () => {
	it('parses inputs to strings', () => {
		const string = formatToKebabCase(null);
		assert.equal(string, 'null');
	});

	it('removes non-alphanumeric characters', () => {
		const string = formatToKebabCase('Hello, world!');
		assert.equal(string, 'hello-world');
	});

	it('kebab cases strings', () => {
		const string = formatToKebabCase('John Do_e-123 ');
		assert.equal(string, 'john-doe-123');
	});
});
