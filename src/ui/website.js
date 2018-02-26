'use strict';

const isUrl = require('is-url');

/**
 * @param  {Object} options
 * @return {Object[]}
 */
module.exports = options => [
  {
    when: answers => !answers.doiknowyou,
    type: 'input',
    name: 'website',
    message: 'What is your personal website? (author)',
    default: options.website || '',
    filter: input => input.trim(),
    validate: input => {
      if (input !== '' && !isUrl(input)) {
        return 'The website URL is invalid.';
      }
      return true;
    },
  },
];
