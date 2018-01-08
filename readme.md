<h1 align="center">
  <b>node-package-skeleton</b>
</h1>
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
