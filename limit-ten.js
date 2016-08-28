const { Transform } = require('stream')

let counter = 0

const limitTen = Transform({
  transform(buf, enc, cb) {
    if (counter < 10) {
      counter++
      cb(null, buf.toString())
    } else {
      cb()
    }
  }
})


module.exports = limitTen
