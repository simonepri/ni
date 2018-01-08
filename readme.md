<h1 align="center">
  <b>node-package-skeleton</b>
</h1>
<div align="center">
  <!-- Version - npm -->
  <a href="https://www.npmjs.com/package/node-package-skeleton">
    <img src="https://img.shields.io/npm/v/node-package-skeleton.svg" alt="Latest version on npm" />
  </a>
  <!-- CI - TravisCI -->
  <a href="https://travis-ci.org/simonepri/node-package-skeleton">
    <img src="https://img.shields.io/travis/typicode/husky/master.svg?label=Mac%20OSX%20%26%20Linux" alt="Mac/Linux Build Status" />
  </a>
  <!-- CI - AppVeyor -->
  <a href="https://ci.appveyor.com/project/simonepri/node-package-skeleton">
    <img src="https://img.shields.io/appveyor/ci/simonepri/node-package-skeleton/master.svg?label=Windows" alt="Windows Build status" />
  </a>
  <!-- Coverage - Codecov -->
  <a href="https://codecov.io/gh/simonepri/node-package-skeleton">
    <img src="https://img.shields.io/codecov/c/github/simonepri/node-package-skeleton/master.svg" alt="Codecov Coverage report" />
  </a>
  <!-- DM - Snyk -->
  <a href="https://snyk.io/test/github/simonepri/node-package-skeleton?targetFile=package.json">
    <img src="https://snyk.io/test/github/simonepri/node-package-skeleton/badge.svg?targetFile=package.json" alt="Known Vulnerabilities" />
  </a>
  <!-- DM - David -->
  <a href="https://david-dm.org/simonepri/node-package-skeleton">
    <img src="https://david-dm.org/simonepri/node-package-skeleton/status.svg)" alt="Dependency Status" />
  </a>
</div>
<div align="center">
  <!-- Test Runner - AVA -->
  <a href="https://github.com/avajs/ava">
    <img src="https://img.shields.io/badge/test_runner-AVA-fb3170.svg" alt="AVA Test Runner used" />
  </a>
  <!-- Code Style - XO -->
  <a href="https://github.com/sindresorhus/xo">
    <img src="https://img.shields.io/badge/code_style-XO-5ed9c7.svg" alt="XO Code Style used" />
  </a>
  <!-- Markdown Style - MDG -->
  <a href="https://github.com/remarkjs/remark-lint/tree/master/packages/remark-preset-lint-markdown-style-guide">
    <img src="https://img.shields.io/badge/markdown_style-MDG-34495e.svg" alt="MDG Markdown Style used" />
  </a>
  <!-- Commit Style - Conventional -->
  <a href="https://github.com/marionebl/commitlint/tree/master/@commitlint/config-conventional">
    <img src="https://img.shields.io/badge/commit_style-conventional-9b59b6.svg" alt="Conventional Commit Style used" />
  </a>
  <!-- Versioning Style - SemVer -->
  <a href="https://github.com/marionebl/commitlint/tree/master/@commitlint/config-conventional">
    <img src="https://img.shields.io/badge/versioning_style-semver-2cc990.svg" alt="SemVer Versioning Style used" />
  </a>
  <!-- Release System - np -->
  <a href="https://github.com/sindresorhus/np">
    <img src="https://img.shields.io/badge/release_system-np-6c8784.svg" alt="NP Release System used" />
  </a>
</div>
<div align="center">
  <!-- License - MIT -->
  <a href="https://github.com/simonepri/node-package-skeleton#license">
    <img src="https://img.shields.io/github/license/simonepri/node-package-skeleton.svg" alt="Project license" />
  </a>
</div>
<br />
<div align="center">
  👷🏼 Personal nodeJS package skeleton based on opinionated tools.
</div>
<div align="center">
  <sub>
    Coded with ❤️ by <a href="https://github.com/simonepri/node-package-skelethon#authors">Simone Primarosa</a>.
  </sub>
</div>

## Introduction

This repository contains a personal skeleton that I use when I publish my [npm packages](https://www.npmjs.com/~simonepri). I will try to keep it as much updated as possible so you can [watch it 👁](https://github.com/simonepri/node-package-skelethon#start-of-content) to not lose any update!  
The rest of the readme is just a placeholder text.

Features:
- javascript linter [xo](https://github.com/sindresorhus/xo)
- markdown linter [remark](https://github.com/remarkjs/remark-lint)
- test runner [AVA](https://github.com/avajs/ava)
- code coverage [istanbul](https://github.com/istanbuljs/nyc)
- commit linter [commitlint](https://github.com/marionebl/commitlint)
- release system [np](https://github.com/sindresorhus/np)

Tools:
- automated build [travis](travis-ci.org) and [appveyor](https://www.appveyor.com/)
- coverage report [codecov](https://codecov.io/gh)
- dependencies manager [david](https://david-dm.org)
- dependencies vulnerabilities scan [snyk](https://snyk.io)
- dependencies automatic updates [greenkeeper](https://greenkeeper.io/)

Do you believe that this is *useful*? It has *saved you time*? Or maybe you simply *like it*?  
If so [support us with a Star ⭐️](https://github.com/simonepri/node-package-skelethon#start-of-content) or [spread it with a Tweet 💬](https://twitter.com/intent/tweet?url=https%3A%2F%2Fgithub.com%2Fsimonepri%2Fnode-package-skeleton&via=simonepri&text=Check%20out%20node-package-skeleton%21%20A%20Personal%20nodeJS%20package%20skeleton%20based%20on%20opinionated%20tools.&hashtags=%23simonepri%20%23nodejs).

## Install

```bash
npm install --save node-package-skelethon
```

## Usage
```js
const nps = require('node-package-skeleton');

nps.hello();
// => 'Hello World 🌈'
```

## API
<a name="hello"></a>

### hello() ⇒ <code>string</code>
A method that makes you happy.

**Returns**: <code>string</code> - A string that greets the world.  

## Contributing
Contributions are REALLY welcome.
Please check the [contributing guidelines](.github/contributing.md) for more details. Thanks!

> Please learn about [conventional commits](https://conventionalcommits.org/) and [semantic versioning](https://semver.org/) before committing on this repo.

## Authors
- **Simone Primarosa** -  *Follow* me on *Github* ([:octocat:@simonepri](https://github.com/simonepri)) and on  *Twitter* ([🐦@simoneprimarosa](http://twitter.com/intent/user?screen_name=simonepri))

See also the list of [contributors](https://github.com/simonepri/node-package-skelethon/contributors) who participated in this project.

## License
This project is licensed under the MIT License - see the [LICENSE](https://github.com/simonepri/node-package-skelethon/LICENSE) file for details.
