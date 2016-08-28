#!/usr/bin/env node

const { createReadStream } = require('fs')
const readStream = createReadStream('/usr/share/dict/words')
const { split, map } = require('event-stream')
const transformer = require ('./limit-ten')

let [,,...arg] = process.argv

readStream
  .pipe(split())
  .pipe(map((data,cb) => {
    let wordLowerCase = data.toString().toLowerCase() + '\n'
      if (wordLowerCase.startsWith(arg[0])) {
        cb(null, data + '\n')
      }
      cb()
  }))

  .pipe(transformer)
  .pipe(process.stdout)
