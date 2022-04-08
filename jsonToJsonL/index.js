#!/usr/bin/env node
const fs = require('fs')

const [, , input] = process.argv

const file = fs.readFileSync(input)
const data = JSON.parse(file.toString())

if (!Array.isArray(data)) throw new Error('JSON object is not array')
data.forEach((line) => console.log(JSON.stringify(line)))
