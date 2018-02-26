'use strict';

/**
 * @param  {Object} options
 * @return {Object[]}
 */
module.exports = () => [
  {
    type: 'confirm',
    name: 'public',
    message: 'Publicly available package?',
    default: true,
  },
];
