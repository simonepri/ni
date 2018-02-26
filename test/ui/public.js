'use strict';

import test from 'ava';

import ui from '../../src/ui';
import mockInquirerPrompt from '../helpers/mock-inquirer-prompt';

import defaults from '../helpers/answers';

test('should be public by default', async t => {
  const given = Object.assign({}, defaults);
  delete given.public;
  mockInquirerPrompt(given);
  const answers = await ui({offline: true});

  t.true(answers.public);
});

test('should overwrite the default', async t => {
  const given = Object.assign({}, defaults);
  given.public = false;
  mockInquirerPrompt(given);
  const answers = await ui({offline: true});

  t.false(answers.public);
});
