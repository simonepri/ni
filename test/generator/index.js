'use strict';

import path from 'path';

import test from 'ava';
import tempy from 'tempy';
import fs from 'fs-extra';

import generator from '../../src/generator';

test('should init the package', async t => {
  const tmpPath = await tempy.directory();

  await generator({
    directory: tmpPath,
    author: 'Simone Primarosa',
    email: 'simonepri@outlook.com',
    website: 'https://simoneprimarosa.com',
    name: 'package',
    description: 'My new package',
    public: true,
    license: 'MIT',
    version: '0.1.0',
    engines: '>=6',
    host: 'GitHub',
    repo: 'simonepri/package',
    keywords: ['package'],
  });

  const files = ['package.json'];
  await Promise.all(
    files.map(async name => {
      const content = await fs.readFile(path.join(tmpPath, name), 'utf8');
      t.snapshot(content, `Content of ${name}`);
    })
  );
});
