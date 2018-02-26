'use strict';

const chalk = require('chalk');

const isUrl = require('is-url');
const isEmail = require('is-email');

/**
 * @param  {Object} options
 * @param  {string} [options.author]
 * @param  {string} [options.email]
 * @param  {string} [options.website]
 * @return {Object[]}
 */
module.exports = options => [
  {
    when:
      options.author !== '' &&
      isEmail(options.email) &&
      (options.website === '' || isUrl(options.website)),
    type: 'confirm',
    name: 'doiknowyou',
    message: () => {
      // A bit hacky
      const email =
        chalk.reset.bold('<') +
        chalk.reset(options.email) +
        chalk.reset.bold('>');
      const website =
        chalk.reset.bold('(') +
        chalk.reset(options.website) +
        chalk.reset.bold(')');
      return `Are you ${options.author} ${email} ${website}?`;
    },
    default: true,
  },
];
