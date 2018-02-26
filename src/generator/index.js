'use strict';

const path = require('path');
const fs = require('fs-extra');
const tempy = require('tempy');
const isAbsolute = require('is-absolute');

const generators = {
  package: require('./package'),
};

async function run(options) {
  try {
    let destPath = options.directory || '';
    if (!isAbsolute(destPath)) {
      destPath = path.join(process.cwd(), options.directory || '');
    }
    const basename = path.basename(destPath);

    const exists = await fs.pathExists(path.join(destPath, 'package.json'));
    if (exists) {
      throw new Error(
        `A package.json file is already present inside ${destPath}.`
      );
    }

    const tmpPath = path.join(await tempy.directory(), basename);
    await fs.ensureDir(tmpPath);

    const pkg = await generators.package(tmpPath, options);

    await fs.ensureDir(destPath);
    await fs.move(tmpPath, destPath, {overwrite: true});

    return pkg;
  } catch (err) {
    throw err;
  }
}

module.exports = run;
