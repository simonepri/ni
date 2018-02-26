#!/usr/bin/env node
/* eslint-disable promise/prefer-await-to-then */
'use strict';

const meow = require('meow');
const logSymbols = require('log-symbols');
const updateNotifier = require('update-notifier');
const isOnline = require('is-online');
const Conf = require('conf');

const ui = require('./ui');
const generator = require('./generator');

const config = new Conf();

const cli = meow(
  `
  Usage
    $ ni <package-name>

  Options
    --dir <dir-name>        Place files in a new directory

  Examples
    $ ni
    $ ni package-name
    $ ni package-name --dir
    $ ni package-name --dir dir-name
`,
  {
    flags: {
      dir: {
        type: 'string',
      },
    },
  }
);

Promise.resolve()
  .then(() => {
    return isOnline({timeout: 1000});
  })
  .then(online => {
    if (online) {
      updateNotifier({pkg: cli.pkg}).notify();
    } else {
      console.warn(`${logSymbols.warning} You are offline 🔴 !`);
    }
    return online;
  })
  .then(online => {
    return {
      offline: !online,
      name: cli.input.length > 0 ? cli.input[0] : undefined,
      directory: cli.flags.dir,
    };
  })
  .then(options => {
    return Object.assign(
      {
        author: config.get('author'),
        email: config.get('email'),
        website: config.get('website'),
      },
      options
    );
  })
  .then(async options => {
    return Object.assign(options, await ui(options));
  })
  .then(options => {
    if (!options.confirm) {
      console.log(`${logSymbols.info} Ok, bye 👋 .`);
      process.exit(0);
    }
    return options;
  })
  .then(options => {
    config.set('author', options.author);
    config.set('email', options.email);
    config.set('website', options.website);
    return options;
  })
  .then(options => {
    return generator(options);
  })
  .then(pkg => {
    console.log(`${logSymbols.info} ${pkg.name}@${pkg.version} created 🎉 .`);
  })
  .catch(err => {
    console.error(`\n${logSymbols.error} ${err.message}`);
    process.exit(1);
  });
