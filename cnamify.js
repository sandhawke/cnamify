/*
  Return a C-style name ([a-zA-Z_][a-zA-Z0-0_]*) for the given string.
  Make it unique (in the given map) by adding a sequence number if
  necessary, instead of by encoding everything.
*/

const globalMap = {}

function cnamify (s, len = 40, map = globalMap) {
  let r = map[s]
  if (r) return r

  r = s.charAt(0).toLowerCase() + s.substr(1)
  r = s.replace(/[^\w]/g, '_')
  if (!r.charAt(0).match(/[a-zA-Z_]/)) r = '_' + r

  r = r.slice(0, len)
  let counter = ''
  let values = Object.values(map)
  // console.log('checking for %s in %o', r + counter, values)
  while (values.indexOf(r + counter) !== -1) {
    if (counter === '') counter = 1
    counter++
    // console.log('incremented for %j for %j', r, s)
  }
  r = r + counter
  // console.log('using %j for %j', r, s)
  map[s] = r
  return r
}

module.exports = cnamify
