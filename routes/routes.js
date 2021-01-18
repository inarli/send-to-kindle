'use strict'

const parse = require('./parse/parser')
const send  = require('./send/send')

module.exports = [].concat(parse,send)
