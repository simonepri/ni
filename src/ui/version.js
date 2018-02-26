'use strict';

const semver = require('semver');

/**
 * @param  {Object} options
 * @return {Object[]}
 */
module.exports = () => [
  {
    type: 'input',
    name: 'version',
    message: 'Choose an initial semver version',
    default: '0.0.1',
    filter: input => input.trim(),
    validate: input => {
      if (!semver.valid(input)) {
        return 'The semver version is invalid.';
      }
      return true;
    },
  },
];
