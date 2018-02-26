'use strict';

import test from 'ava';

import ui from '../../src/ui';
import mockInquirerPrompt from '../helpers/mock-inquirer-prompt';

import defaults from '../helpers/answers';

test('should use the version 0.0.1 by default', async t => {
  const given = Object.assign({}, defaults);
  delete given.version;
  mockInquirerPrompt(given);
  const answers = await ui({offline: true});

  t.is(answers.version, '0.0.1');
});

test('should overwrite the default', async t => {
  const given = Object.assign({}, defaults);
  given.version = '6.6.6';
  mockInquirerPrompt(given);
  const answers = await ui({offline: true});

  t.is(answers.version, '6.6.6');
});

test('should throw an error if version is invalid', async t => {
  const given = Object.assign({}, defaults);
  given.version = '2-3-4';
  mockInquirerPrompt(given);
  const answers = ui({offline: true});

  const err = await t.throws(answers);
  t.is(err.message, 'The semver version is invalid.');
});
