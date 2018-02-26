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

test('should use `superb` dep to generate the default', async t => {
  mockery.registerMock('superb', () => 'mock');

  const given = Object.assign({}, defaults);
  delete given.description;
  mockInquirerPrompt(given);
  const answers = await ui({offline: true});

  t.is(answers.description, 'My mock project');

  mockery.deregisterMock('superb');
});

test('should overwrite the default', async t => {
  const given = Object.assign({}, defaults);
  given.description = 'My new description';
  mockInquirerPrompt(given);
  const answers = await ui({offline: true});

  t.is(answers.description, 'My new description');
});
