'use strict';

import test from 'ava';

import ui from '../../src/ui';
import mockInquirerPrompt from '../helpers/mock-inquirer-prompt';

import defaults from '../helpers/answers';

test('should use MIT license as default', async t => {
  const given = Object.assign({}, defaults);
  delete given.license;
  mockInquirerPrompt(given);
  const answers = await ui({offline: true});

  t.is(answers.license, 'MIT');
});

test('should overwrite the default', async t => {
  const given = Object.assign({}, defaults);
  given.license = 'ICS';
  mockInquirerPrompt(given);
  const answers = await ui({offline: true});

  t.is(answers.license, 'ICS');
});
