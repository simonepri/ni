'use strict';

const path = require('path');
const tildify = require('tildify');
const chalk = require('chalk');

/**
 * @param  {Object} options
 * @param  {string} [options.directory]
 * @return {Object[]}
 */
module.exports = options => [
  {
    type: 'confirm',
    name: 'confirm',
    message: () => {
      const outPath = tildify(
        path.join(process.cwd(), options.directory || '')
      );
      // A bit hacky
      const website =
        chalk.reset.bold('(') +
        chalk.reset.dim(outPath) +
        chalk.reset.bold(')');
      return `Everything is ready, do you want to proceed? ${website}`;
    },
    default: true,
  },
];
