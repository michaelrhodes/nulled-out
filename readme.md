# nulled-out
nulled-out creates a copy on an object with nulled-out values.

[![Build status](https://travis-ci.org/michaelrhodes/nulled-out.png?branch=master)](https://travis-ci.org/michaelrhodes/nulled-out)

## Install
```
$ npm install nulled-out
```

### Example
``` js
var nulled = require('nulled-out')

nulled({
  name: { type: 'string' },
  human: { type: 'boolean' },
  likes: { type: 'array' }
})

/*
{
  name: null,
  human: null,
  likes: null
}
*/
```

#### Suss out my motivation…
- [dynamic properties vs pre-defined structure](http://jsperf.com/object-dynamic-properties) (via [this article](https://medium.com/the-javascript-collection/lets-write-fast-javascript-2b03c5575d9e))
- [valid-object](https://github.com/gummesson/valid-object) (from where I shamelessly stole my example object)

### License
[MIT](http://opensource.org/licenses/MIT)
