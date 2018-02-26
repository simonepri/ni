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

test('should use the `options.author` as first default', async t => {
  const given = Object.assign({}, defaults);
  delete given.author;
  mockInquirerPrompt(given);
  const answers = await ui({
    offline: true,
    author: 'Example Name',
  });

  t.is(answers.author, 'Example Name');
});

test('should use `fullname` dep as second default', async t => {
  mockery.registerMock('fullname', () => 'Example Name');

  const given = Object.assign({}, defaults);
  delete given.author;
  mockInquirerPrompt(given);
  const answers = await ui({offline: true});

  t.is(answers.author, 'Example Name');

  mockery.deregisterMock('fullname');
});

test('should use `username` dep as third default', async t => {
  mockery.registerMock('fullname', () => '');
  mockery.registerMock('username', () => 'username');

  const given = Object.assign({}, defaults);
  delete given.author;
  mockInquirerPrompt(given);
  const answers = await ui({offline: true});

  t.is(answers.author, 'username');

  mockery.deregisterMock('fullname');
  mockery.deregisterMock('username');
});

test('should throw an error if no defaults are available', async t => {
  mockery.registerMock('fullname', () => '');
  mockery.registerMock('username', () => '');

  const given = Object.assign({}, defaults);
  delete given.author;
  mockInquirerPrompt(given);
  const answers = ui({offline: true});

  const err = await t.throws(answers);
  t.is(err.message, "I'm sorry you don't have a name, but I need one.");

  mockery.deregisterMock('fullname');
  mockery.deregisterMock('username');
});
