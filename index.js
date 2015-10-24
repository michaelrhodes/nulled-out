module.exports = function (obj) {
  var nulled = {}

  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      nulled[key] = null
    }
  }

  return nulled
}
