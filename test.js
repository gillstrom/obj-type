import test from 'ava';
import m from './';

test('Should return array', t => {
	t.is(m(['foo', 'bar']), 'array');
	t.is(m([{foo: 'bar'}]), 'array');
	t.is(m([]), 'array');
	t.is(m(new Array()), 'array');
});

test('Should return object', t => {
	const obj = new Object();

	t.is(m({foo: 'bar'}), 'object');
	t.is(m({}), 'object');
	t.is(m(Object.create(null)), 'object');
	t.is(m(obj), 'object');
});

test('Should return null', t => {
	t.is(m(null), 'null');
});

test('Should return regexp', t => {
	t.is(m(/foo/), 'regexp');
});

test('Should return date', t => {
	t.is(m(new Date()), 'date');
});

test('Should return error', t => {
	t.is(m(new Error()), 'error');
});
