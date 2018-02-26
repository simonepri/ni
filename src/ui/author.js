'use strict';

const guessFullname = require('fullname');
const guessUsername = require('username');

/**
 * @param  {Object} options
 * @param  {string} [options.author]
 * @return {Object[]}
 */
module.exports = options => [
  {
    when: answers => !answers.doiknowyou,
    type: 'input',
    name: 'author',
    message: 'What is your name? (author)',
    default: async () => {
      if (options.author) {
        return options.author;
      }
      const fullname = await guessFullname();
      if (fullname) {
        return fullname;
      }
      const username = await guessUsername();
      return username;
    },
    filter: input => input.trim(),
    validate: input => {
      if (input === '') {
        return "I'm sorry you don't have a name, but I need one.";
      }
      return true;
    },
  },
];
