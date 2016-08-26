#!/usr/bin/env node

// console.log("hey");

const { createReadStream } = require('fs')
const transformer = require('./limit-ten.js')

createReadStream(???)
  .pipe('transformer')
  .pipe(process.stdout)
