'use strict';

import test from 'ava';

import ui from '../../src/ui';
import mockInquirerPrompt from '../helpers/mock-inquirer-prompt';

import defaults from '../helpers/answers';

test('should confirm by default', async t => {
  const given = Object.assign({}, defaults);
  delete given.confirm;
  mockInquirerPrompt(given);
  const answers = await ui({offline: true});

  t.true(answers.confirm);
});

test('should overwrite the default', async t => {
  const given = Object.assign({}, defaults);
  given.confirm = false;
  mockInquirerPrompt(given);
  const answers = await ui({offline: true});

  t.false(answers.confirm);
});
