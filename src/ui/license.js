'use strict';

const fuzzy = require('fuzzy');
const spdxLicenseList = require('spdx-license-list');

const licenses = Object.keys(spdxLicenseList);
licenses.push('SEE LICENSE IN LICENSE');

/**
 * @param  {Object} options
 * @return {Object[]}
 */
module.exports = () => [
  {
    type: 'autocomplete',
    name: 'license',
    message: 'Choose a license',
    default: 'MIT', // Still not supported see https://github.com/mokkabonna/inquirer-autocomplete-prompt/pull/38
    choiches: licenses,
    source: (answers, input) => {
      input = input === null ? '' : input;

      const result = fuzzy
        .filter(input, licenses)
        .map(el => el.original)
        .sort((a, b) => a.localeCompare(b, 'en', {sensitivity: 'base'}));

      return Promise.resolve(result);
    },
  },
];
