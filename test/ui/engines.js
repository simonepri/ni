'use strict';

import test from 'ava';

import ui from '../../src/ui';
import mockInquirerPrompt from '../helpers/mock-inquirer-prompt';

import defaults from '../helpers/answers';

test('should use the range >=6 by default', async t => {
  const given = Object.assign({}, defaults);
  delete given.engines;
  mockInquirerPrompt(given);
  const answers = await ui({offline: true});

  t.is(answers.engines, '>=6');
});

test('should overwrite the default', async t => {
  const given = Object.assign({}, defaults);
  given.engines = '<3';
  mockInquirerPrompt(given);
  const answers = await ui({offline: true});

  t.is(answers.engines, '<3');
});

test('should throw an error if version is invalid', async t => {
  const given = Object.assign({}, defaults);
  given.engines = '>=A4';
  mockInquirerPrompt(given);
  const answers = ui({offline: true});

  const err = await t.throws(answers);
  t.is(err.message, 'The semver range is invalid.');
});
