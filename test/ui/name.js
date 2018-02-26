'use strict';

import path from 'path';

import test from 'ava';
import uniqueString from 'unique-string';

import ui from '../../src/ui';
import mockInquirerPrompt from '../helpers/mock-inquirer-prompt';

import defaults from '../helpers/answers';

test('should use the `options.name` as first default', async t => {
  const given = Object.assign({}, defaults);
  delete given.name;
  mockInquirerPrompt(given);
  const answers = await ui({
    offline: true,
    name: 'package-name',
  });

  t.is(answers.name, 'package-name');
});

test('should use the basename of cwd as second default', async t => {
  const given = Object.assign({}, defaults);
  delete given.name;
  mockInquirerPrompt(given);
  const answers = await ui({offline: true});

  t.is(answers.name, path.basename(process.cwd()));
});

test('should use the `options.directory` as third default', async t => {
  const given = Object.assign({}, defaults);
  delete given.name;
  mockInquirerPrompt(given);
  const answers = await ui({offline: true, directory: 'my-directory'});

  t.is(answers.name, 'my-directory');
});

test('should throw an error if no defaults are available', async t => {
  const given = Object.assign({}, defaults);
  delete given.name;
  mockInquirerPrompt(given);
  const answers = ui({offline: true, directory: ''});

  const err = await t.throws(answers);
  t.is(err.message, 'The package name cannot be empty.');
});

test('should throw an error if is not a valid npm package name', async t => {
  const given = Object.assign({}, defaults);
  given.name = 'my new package';

  mockInquirerPrompt(given);
  const answers = ui({offline: true, directory: ''});

  const err = await t.throws(answers);
  t.is(typeof err.message, 'string');
});

test('should throw an error if the package name already exists', async t => {
  const given = Object.assign({}, defaults);
  given.name = 'xo';
  given.repo = 'simonepri/mypackage';
  mockInquirerPrompt(given);
  const answers = ui();

  const err = await t.throws(answers);
  t.is(err.message, 'A package with this name already exists.');
});

test('should not throw an error if the package does not exist', async t => {
  const given = Object.assign({}, defaults);
  given.name = uniqueString();
  given.repo = 'simonepri/mypackage';
  mockInquirerPrompt(given);
  const answers = ui();

  await t.notThrows(answers);
});
