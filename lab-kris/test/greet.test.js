'use strict';

describe('greet.js', () => {
  test('Should return null', () => {
    expect(greet()).toBeNull();
  });
  test('Should return \'hello world\'', () => {
    expect(greet('world')).toEqual('hello world');
  });
});
