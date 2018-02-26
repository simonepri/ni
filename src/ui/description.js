'use strict';

const superb = require('superb');

/**
 * @param  {Object} options
 * @return {Object[]}
 */
module.exports = () => [
  {
    type: 'input',
    name: 'description',
    message: 'How would you describe the new package?',
    default: `My ${superb()} project`,
    filter: input => input.trim(),
  },
];
