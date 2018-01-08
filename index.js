'use strict';

/**
 * The greeting message.
 * @private
 * @constant
 * @type {string}
 */
const greets = 'Hello World 🌈';

/**
 * A class that makes you die.
 * @private
 */
class Greeter {
  /**
   * Constructs a Greeter.
   *
   * @class
   * @param {string} message - The greeting message.
   */
  constructor(message) {
    /**
     * The greeting message.
     * @type {string}
     */
    this.greets = message;
  }

  /**
   * A method that makes you happy.
   *
   * @returns {string} A string that greets the world.
   */
  hello() {
    return this.greets;
  }
}

/**
 * A method that makes you happy.
 *
 * @public
 * @returns {string} A string that greets the world.
 */
function hello() {
  const greeter = new Greeter(greets);
  return greeter.hello();
}

module.exports = {
  hello
};
