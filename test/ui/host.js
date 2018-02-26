'use strict';

import test from 'ava';

import ui from '../../src/ui';
import mockInquirerPrompt from '../helpers/mock-inquirer-prompt';

import defaults from '../helpers/answers';

test('should be GitHub by default', async t => {
  const given = Object.assign({}, defaults);
  delete given.host;
  mockInquirerPrompt(given);
  const answers = await ui({offline: true});

  t.is(answers.host, 'GitHub');
});
