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
});
