'use strict';
var assert = require('assert');
var objType = require('./');

it('Should return array', function () {
	assert.strictEqual(objType(['foo', 'bar']), 'array');
	assert.strictEqual(objType([{foo: 'bar'}]), 'array');
	assert.strictEqual(objType([]), 'array');
	assert.strictEqual(objType(new Array()), 'array');
});

it('Should return object', function () {
	assert.strictEqual(objType({foo: 'bar'}), 'object');
	assert.strictEqual(objType({}), 'object');
	assert.strictEqual(objType(new Object()), 'object');
	assert.strictEqual(objType(Object.create(null)), 'object');
});

it('Should return null', function () {
	assert.strictEqual(objType(null), 'null');
});

it('Should return regexp', function () {
	assert.strictEqual(objType(/foo/), 'regexp');
});

it('Should return date', function () {
	assert.strictEqual(objType(new Date()), 'date');
});

it('Should return error', function () {
	assert.strictEqual(objType(new Error()), 'error');
});
