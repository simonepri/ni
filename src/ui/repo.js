'use strict';

const guessUsername = require('username');

const isScoped = require('is-scoped');
const gitUser = require('git-user-local');
const githubAccountExists = require('gh-account-exists');

const isValidGithubSlug = require('github-username-regex');

/**
 * @param  {Object} options
 * @param  {boolean} [options.offline]
 * @return {Object[]}
 */
module.exports = options => [
  {
    when: answers => answers.host === 'GitHub',
    type: 'input',
    name: 'repo',
    message: "What is your GitHub repository's short URL?",
    default: async answers => {
      let username = '';

      let gitu;
      try {
        gitu = await gitUser();
      } catch (err) {}
      if (gitu && gitu.user && gitu.user.name) {
        username = gitu.user.name;
      } else {
        username = await guessUsername();
      }

      const name = isScoped(answers.name)
        ? answers.name.split('/')[1]
        : answers.name;

      if (username && name) {
        return `${username}/${name}`;
      }
      return '';
    },
    filter: input => input.trim(),
    validate: async input => {
      if (input === '') {
        return 'The repo short URL cannot be empty.';
      }
      const parts = input.split('/');
      if (parts.length !== 2 || parts[0] === '' || parts[1] === '') {
        return 'The repo short URL must be in the format <username>/<reponame> or <organization>/<reponame>.';
      }
      if (
        !isValidGithubSlug.test(parts[0]) ||
        !isValidGithubSlug.test(parts[1])
      ) {
        return 'The repo short URL is invalid.';
      }
      if (options.offline) {
        return true;
      }
      try {
        const exists = await githubAccountExists(parts[0]);
        if (!exists) {
          return 'The GitHub username or organization inside the repo short URL does not exist.';
        }
      } catch (err) {}
      return true;
    },
  },
];
