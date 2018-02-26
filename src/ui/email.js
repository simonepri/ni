'use strict';

const gitUser = require('git-user-local');

const isEmail = require('is-email');

/**
 * @param  {Object} options
 * @param  {string} [options.email]
 * @return {Object[]}
 */
module.exports = options => [
  {
    when: answers => !answers.doiknowyou,
    type: 'input',
    name: 'email',
    message: 'What is your email? (author)',
    default: async () => {
      if (options.email) {
        return options.email;
      }
      let gitu;
      try {
        gitu = await gitUser();
      } catch (err) {}
      if (gitu && gitu.user && gitu.user.email) {
        return gitu.user.email;
      }
    },
    filter: input => input.trim(),
    validate: input => {
      if (input === '') {
        return "I'm sorry you don't have an email, but I need one.";
      }
      if (!isEmail(input)) {
        return 'The provided email is invalid.';
      }
      return true;
    },
  },
];
