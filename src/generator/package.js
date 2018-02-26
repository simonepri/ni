'use strict';

const path = require('path');
const fs = require('fs-extra');
const fp = require('format-package');

/**
 * @param  {string} folder
 * @param  {object} options
 * @param  {string} options.author
 * @param  {string} options.description
 * @param  {string} options.engines
 * @param  {string} options.email
 * @param  {string} options.host
 * @param  {string[]} options.keywords
 * @param  {string} options.license
 * @param  {string} options.name
 * @param  {boolean} options.public
 * @param  {string} options.repo
 * @param  {string} options.version
 * @param  {string} options.website
 * @return {Promise.<Object>}
 */
async function run(folder, options) {
  const pkg = {
    name: options.name,
    version: options.version,
    description: options.description,
    license: options.license,
    author: `${options.author} <${options.email}> (${options.website})`,
    contributors: [`${options.author} <${options.email}> (${options.website})`],
    keywords: options.keywords,
    main: 'index.js',
    files: ['index.js'],
    engines: {
      node: options.engines,
    },
    scripts: {
      start: 'node index.js',
      test: 'echo "Error: no test specified" && exit 1',
    },
    dependencies: {},
    peerDependencies: {},
    devDependencies: {},
    optionalDependencies: {},
  };
  if (options.host === 'GitHub') {
    Object.assign(pkg, {
      homepage: `https://github.com/${options.repo}#readme`,
      repository: `github:${options.repo}`,
      bugs: {
        url: `https://github.com/${options.repo}/issues`,
        email: options.email,
      },
    });
  }
  if (!options.public) {
    Object.assign(pkg, {
      private: true,
    });
  }
  const pkgPath = path.join(folder, 'package.json');
  const json = await fp(pkg);
  await fs.outputFile(pkgPath, json);

  return pkg;
}

module.exports = run;
