import { strict as assert } from 'node:assert';
// при использовании strict-режима
// проверка equal равносильна strictEqual
import { capitalize } from '../src/capitalize.js';

assert.deepEqual(capitalize('hello'),'Hello');
assert.deepEqual(capitalize(''), '');

console.log('Все тесты пройдены!');