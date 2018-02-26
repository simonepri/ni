'use strict';

const inquirer = require('inquirer');

inquirer.registerPrompt(
  'autocomplete',
  require('inquirer-autocomplete-prompt')
);

/**
 * @param  {Object} options
 * @return {Promise.<Object>}
 */
function run(options) {
  options = options || {};
  const prompts = [].concat(
    require('./doiknowyou.js')(options),
    require('./author.js')(options),
    require('./email.js')(options),
    require('./website.js')(options),

    require('./name.js')(options),
    require('./description.js')(options),
    require('./public.js')(options),
    require('./license.js')(options),
    require('./version.js')(options),
    require('./engines.js')(options),

    require('./host.js')(options),
    require('./repo.js')(options),

    require('./confirm.js')(options)
  );

  return inquirer.prompt(prompts);
}

module.exports = run;
