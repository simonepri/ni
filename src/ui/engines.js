'use strict';

const semver = require('semver');

/**
 * @param  {Object} options
 * @return {Object[]}
 */
module.exports = () => [
  {
    type: 'input',
    name: 'engines',
    message: 'Choose which node engines do you want to support',
    default: '>=6',
    validate: input => {
      if (!semver.validRange(input)) {
        return 'The semver range is invalid.';
      }
      return true;
    },
  },
];
