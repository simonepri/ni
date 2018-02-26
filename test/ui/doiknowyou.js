'use strict';

import test from 'ava';

import ui from '../../src/ui';
import mockInquirerPrompt from '../helpers/mock-inquirer-prompt';

import defaults from '../helpers/answers';

test('should not ask name, email and website if author and email are set inside `options` object', async t => {
  const given = Object.assign({}, defaults);
  given.doiknowyou = true;
  mockInquirerPrompt(given);
  const answers = await ui({
    offline: true,
    author: 'My New Name',
    email: 'newemail@example.com',
    website: '',
  });

  t.true(answers.doiknowyou);
  t.is(answers.author, undefined);
  t.is(answers.email, undefined);
  t.is(answers.website, undefined);
});

test("should not use author and email inside `options` object if I don't want to", async t => {
  const given = Object.assign({}, defaults);
  given.author = 'My New Name';
  given.email = 'newemail@example.com';
  given.website = 'https://new.example.com';
  given.doiknowyou = false;
  mockInquirerPrompt(given);
  const answers = await ui({
    offline: true,
    author: 'Other Name',
    email: 'other@example.com',
    website: '',
  });

  t.is(answers.author, 'My New Name');
  t.is(answers.email, 'newemail@example.com');
  t.is(answers.website, 'https://new.example.com');
});

test('should not recognize me if author or email are not set inside `options` object', async t => {
  const given = Object.assign({}, defaults);
  mockInquirerPrompt(given);
  let answers = await ui({offline: true});

  t.is(answers.doiknowyou, undefined);

  mockInquirerPrompt(given);
  answers = await ui({offline: true, author: 'My Name'});

  t.is(answers.doiknowyou, undefined);

  mockInquirerPrompt(given);
  answers = await ui({offline: true, email: 'email@example.com'});

  t.is(answers.doiknowyou, undefined);
});
