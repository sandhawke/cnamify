const test = require('tape')
const cnamify = require('../lib/cnamify')

test(t => {
  t.equal(cnamify('hello'), 'hello')
  t.equal(cnamify('hello '), 'hello_')
  t.equal(cnamify(' hello'), '_hello')
  t.equal(cnamify('0hello'), '_0hello')
  t.end()
})

test(t => {
  const map = {}
  t.equal(cnamify('hello', 3, map), 'hel')
  t.equal(cnamify('hello', 3, map), 'hel')
  t.equal(cnamify('hello ', 3, map), 'hel2')
  t.equal(cnamify(' hello', 3, map), '_he')
  t.equal(cnamify('0hello', 3, map), '_0h')
  t.end()
})
