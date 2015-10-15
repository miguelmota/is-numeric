var test = require('tape');
var isNumeric = require('../is-numeric');

test('isNumeric', function (t) {
  'use strict';

  t.plan(37);

  t.equal(isNumeric(0), true);
  t.equal(isNumeric(123), true);
  t.equal(isNumeric(-123), true);
  t.equal(isNumeric(+123), true);
  t.equal(isNumeric('0'), true);
  t.equal(isNumeric('123'), true);
  t.equal(isNumeric('-123'), true);
  t.equal(isNumeric('+123'), true);
  t.equal(isNumeric('.123'), true);
  t.equal(isNumeric('-.123'), true);
  t.equal(isNumeric('0.123'), true);
  t.equal(isNumeric('-0.123'), true);
  t.equal(isNumeric('1e100'), true);
  t.equal(isNumeric('1e-100'), true);
  t.equal(isNumeric('-1e-100'), true);
  t.equal(isNumeric(Infinity), true);
  t.equal(isNumeric(-Infinity), true);
  t.equal(isNumeric(new String('123')), true);
  t.equal(isNumeric(new Number('123')), true);
  t.equal(isNumeric('abc'), false);
  t.equal(isNumeric('10%'), false);
  t.equal(isNumeric('#10'), false);
  t.equal(isNumeric('2^10'), false);
  t.equal(isNumeric('2!'), false);
  t.equal(isNumeric('(10)'), false);
  t.equal(isNumeric('10px'), false);
  t.equal(isNumeric('*'), false);
  t.equal(isNumeric(''), false);
  t.equal(isNumeric(' '), false);
  t.equal(isNumeric(true), false);
  t.equal(isNumeric(false), false);
  t.equal(isNumeric([]), false);
  t.equal(isNumeric(function(){}), false);
  t.equal(isNumeric({}), false);
  t.equal(isNumeric(undefined), false);
  t.equal(isNumeric(null), false);
  t.equal(isNumeric(NaN), false);
});
