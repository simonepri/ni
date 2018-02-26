'use strict';

import test from 'ava';

import ui from '../../src/ui';
import mockInquirerPrompt from '../helpers/mock-inquirer-prompt';

import defaults from '../helpers/answers';

test('should be empty by default', async t => {
  const given = Object.assign({}, defaults);
  delete given.website;
  mockInquirerPrompt(given);
  const answers = await ui({offline: true});

  t.is(answers.website, '');
});

test('should overwrite the default', async t => {
  const given = Object.assign({}, defaults);
  given.website = 'https://other.example.com';
  mockInquirerPrompt(given);
  const answers = await ui({offline: true});

  t.is(answers.website, 'https://other.example.com');
});

test('should throw an error if the website is invalid', async t => {
  const given = Object.assign({}, defaults);
  given.website = 'https:// other.example.com';
  mockInquirerPrompt(given);
  const answers = ui({offline: true});

  const err = await t.throws(answers);
  t.is(err.message, 'The website URL is invalid.');
});
