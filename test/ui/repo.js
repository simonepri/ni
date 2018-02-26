'use strict';

import test from 'ava';
import mockery from 'mockery';
import uniqueString from 'unique-string';

import ui from '../../src/ui';
import mockInquirerPrompt from '../helpers/mock-inquirer-prompt';

import defaults from '../helpers/answers';

test.before(() => {
  mockery.enable({
    warnOnReplace: false,
    warnOnUnregistered: false,
    useCleanCache: true,
  });
});

test.beforeEach(() => {
  mockery.resetCache();
});

test.after(() => {
  mockery.disable();
});

test('should use `git-user-local` dep as first default when host is GitHub', async t => {
  mockery.registerMock('git-user-local', () => {
    return {user: {name: 'username', email: 'email@example.com'}};
  });

  const given = Object.assign({}, defaults);
  given.host = 'GitHub';
  given.name = 'package';
  delete given.repo;
  mockInquirerPrompt(given);
  const answers = await ui({offline: true});

  t.is(answers.repo, 'username/package');

  mockery.deregisterMock('git-user-local');
});

test('should use `username` dep as third default when host is GitHub', async t => {
  mockery.registerMock('git-user-local', () => null);
  mockery.registerMock('username', () => 'username');

  const given = Object.assign({}, defaults);
  given.host = 'GitHub';
  given.name = 'package';
  delete given.repo;
  mockInquirerPrompt(given);
  const answers = await ui({offline: true});

  t.is(answers.repo, 'username/package');

  mockery.deregisterMock('username');
  mockery.deregisterMock('git-user-local');
});

test('should use `answers.name` for the reponame part when host is GitHub', async t => {
  const given = Object.assign({}, defaults);
  given.host = 'GitHub';
  given.name = 'mypkg';
  delete given.repo;
  mockInquirerPrompt(given);
  const answers = await ui({offline: true});

  t.is(answers.repo, 'username/mypkg');
});

test('should use `answers.name` for the reponame part for scooped name when host is GitHub', async t => {
  const given = Object.assign({}, defaults);
  given.host = 'GitHub';
  given.name = '@my-project/mypkg';
  delete given.repo;
  mockInquirerPrompt(given);
  const answers = await ui({offline: true});

  t.is(answers.repo, 'username/mypkg');
});

test('should throw an error if no defaults are available when host is GitHub', async t => {
  mockery.registerMock('git-user-local', () => null);
  mockery.registerMock('username', () => '');

  const given = Object.assign({}, defaults);
  delete given.repo;
  mockInquirerPrompt(given);
  const answers = ui({offline: true});

  const err = await t.throws(answers);
  t.is(err.message, 'The repo short URL cannot be empty.');

  mockery.deregisterMock('git-user-local');
  mockery.deregisterMock('username');
});

test('should throw an error if the short URL is invalid when host is GitHub', async t => {
  const errMsg =
    'The repo short URL must be in the format <username>/<reponame> or <organization>/<reponame>.';
  const given = Object.assign({}, defaults);
  given.repo = 'username';
  mockInquirerPrompt(given);
  let answers = ui({offline: true});

  let err = await t.throws(answers);
  t.is(err.message, errMsg);

  given.repo = '/';
  mockInquirerPrompt(given);
  answers = ui({offline: true});

  err = await t.throws(answers);
  t.is(err.message, errMsg);

  given.repo = 'username/';
  mockInquirerPrompt(given);
  answers = ui({offline: true});

  err = await t.throws(answers);
  t.is(err.message, errMsg);

  given.repo = '/package';
  mockInquirerPrompt(given);
  answers = ui({offline: true});

  err = await t.throws(answers);
  t.is(err.message, errMsg);

  given.repo = 'user name/mypackage';
  mockInquirerPrompt(given);
  answers = ui({offline: true});

  err = await t.throws(answers);
  t.is(err.message, 'The repo short URL is invalid.');

  given.repo = 'username/my package';
  mockInquirerPrompt(given);
  answers = ui({offline: true});

  err = await t.throws(answers);
  t.is(err.message, 'The repo short URL is invalid.');
});

test('should throw an error if the username or organization inside the repo short URL does not exist when host is GitHub', async t => {
  const given = Object.assign({}, defaults);
  given.name = uniqueString();
  given.repo = `${uniqueString()}/mypackage`;
  mockInquirerPrompt(given);
  const answers = ui();

  const err = await t.throws(answers);
  t.is(
    err.message,
    'The GitHub username or organization inside the repo short URL does not exist.'
  );
});

test('should not throw an error if the username or organization inside the repo short URL exists when host is GitHub', async t => {
  const given = Object.assign({}, defaults);
  given.name = uniqueString();
  given.repo = 'simonepri/mypackage';
  mockInquirerPrompt(given);
  const answers = ui();

  await t.notThrows(answers);
});
