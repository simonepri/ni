import test from 'ava';

import m from '.';

test('should greet the world', t => {
  t.is(m.hello(), 'Hello World 🌈');
});
