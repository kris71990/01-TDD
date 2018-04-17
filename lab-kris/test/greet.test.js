'use strict';

const greet = require('../lib/greet');
const arithmetic = require('../lib/arithmetic');

describe('greet.js', () => {
  test('Should return null', () => {
    expect(greet()).toBeNull();
  });
  test('Should return \'hello world\'', () => {
    expect(greet('world')).toEqual('hello world');
  });
});

describe('arithmetic.js', () => {
  describe('arithmetic.add', () => {
    test('valid arguments', () => {
      expect(arithmetic.add(1, 3)).toEqual(4);
      expect(arithmetic.add(-5, 6)).toEqual(1);
      expect(arithmetic.add(0, 0)).toEqual(0);
    });
    test('non-number argument', () => {
      expect(arithmetic.add()).toBeUndefined();
    });
  });
  describe('arithmetic.sub', () => {
    test('valid arguments', () => {
      expect(arithmetic.sub(13, 4)).toEqual(9);
      expect(arithmetic.sub(-1, 3)).toEqual(-4);
      expect(arithmetic.sub(0, -4)).toEqual(4);
      expect(arithmetic.sub(-5, -6)).toEqual(1);
      expect(arithmetic.sub(0, 0)).toEqual(0);
    });
    test('non-number argument', () => {
      expect(arithmetic.sub()).toBeUndefined();
    });
  });
});
