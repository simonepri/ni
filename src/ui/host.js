'use strict';

/**
 * @param  {Object} options
 * @return {Object[]}
 */
module.exports = () => [
  {
    type: 'list',
    name: 'host',
    message: 'Where is your repo hosted?',
    default: 'GitHub',
    choices: ['GitHub'],
  },
];
