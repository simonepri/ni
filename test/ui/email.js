'use strict';

import test from 'ava';
import mockery from 'mockery';

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

test('should use the `options.email` as first default', async t => {
  const given = Object.assign({}, defaults);
  delete given.email;
  mockInquirerPrompt(given);
  const answers = await ui({
    offline: true,
    email: 'email@example.com',
  });

  t.is(answers.email, 'email@example.com');
});

test('should use `git-user-local` dep as second default', async t => {
  mockery.registerMock('git-user-local', () => {
    return {user: {name: 'username', email: 'email@example.com'}};
  });

  const given = Object.assign({}, defaults);
  delete given.email;
  mockInquirerPrompt(given);
  const answers = await ui({offline: true});

  t.is(answers.email, 'email@example.com');

  mockery.deregisterMock('git-user-local');
});

test('should throw an error if no defaults are available', async t => {
  mockery.registerMock('git-user-local', () => null);

  const given = Object.assign({}, defaults);
  delete given.email;
  mockInquirerPrompt(given);
  const answers = ui({offline: true});

  const err = await t.throws(answers);
  t.is(err.message, "I'm sorry you don't have an email, but I need one.");

  mockery.deregisterMock('git-user-local');
});

test('should throw an error if the email is invalid', async t => {
  const given = Object.assign({}, defaults);
  given.email = 'email#example.com';
  mockInquirerPrompt(given);
  const answers = ui({offline: true});

  const err = await t.throws(answers);
  t.is(err.message, 'The provided email is invalid.');
});
