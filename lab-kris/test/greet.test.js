'use strict';

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
      expect(arithmetic.add).not.toBeUndefined();
    });
    test('non-number argument', () => {
      expect(arithmetic.add).toBeUndefined();
    });
  });
  describe('arithmetic.sub', () => {
    test('valid arguments', () => {
      expect(arithmetic.add).not.toBeUndefined();
    });
    test('non-number argument', () => {
      expect(arithmetic.sub).not.toBeUndefined();
    });
  });
});
