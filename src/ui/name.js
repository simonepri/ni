'use strict';

const path = require('path');

const npmExists = require('npm-exists');

const capitalize = require('capitalize');
const isValidNpmName = require('is-valid-npm-name');

/**
 * @param  {Object} options
 * @param  {string} [options.directory]
 * @param  {string} [options.name]
 * @param  {boolean} [options.offline]
 * @return {Object[]}
 */
module.exports = options => [
  {
    type: 'input',
    name: 'name',
    message: 'What is the name of the new package?',
    default: () => {
      return (
        options.name ||
        (options.directory === undefined
          ? path.basename(process.cwd())
          : options.directory)
      );
    },
    filter: input => input.trim(),
    validate: async input => {
      if (input === '') {
        return 'The package name cannot be empty.';
      }
      const check = isValidNpmName(input);
      if (check !== true) {
        // If not true check contains the error message.
        return capitalize(check) + '.';
      }
      if (options.offline) {
        return true;
      }
      const exists = await npmExists(input);
      if (exists) {
        return 'A package with this name already exists.';
      }
      return true;
    },
  },
];
