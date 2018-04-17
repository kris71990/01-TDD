'use strict';

module.exports = (string) => {
  if (typeof string !== 'string') return null;
  return `hello ${string}`;
};
