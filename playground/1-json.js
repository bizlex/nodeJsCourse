const fs = require('fs')

const data = JSON.parse(fs.readFileSync('1-json.json').toString())
data.name = 'Alex'
data.age = 41
fs.writeFileSync('1-json.json', JSON.stringify(data))