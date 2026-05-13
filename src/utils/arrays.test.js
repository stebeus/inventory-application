import { equal } from 'node:assert/strict';
import { describe, it } from 'node:test';

import { stringifyArray } from './arrays.js';

describe('stringifyArray', () => {
	it('stringifies arrays', () => {
		equal(stringifyArray([1, 2, 3]), '(1,2,3)');
	});
});
