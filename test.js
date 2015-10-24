var test = require('tape')
var nulled = require('./')

test('it works', function (assert) {
  var input = {
    name: { type: 'string' },
    human: { type: 'boolean' },
    likes: { type: 'array' }
  }
  var output = {
    name: null,
    human: null,
    likes: null
  } 

  assert.deepEqual(nulled(input), output)
  assert.end()
})

test('it still works', function (assert) {
  var input = {
    a: 1,
    b: 'two',
    c: { value: 'III' },
    d: function () { return 4 },
    e: ['five', 6, 'VII']
  }
  var output = {
    a: null, b: null, c: null,
    d: null, e: null
 }

  assert.deepEqual(nulled(input), output)
  assert.end()
})
