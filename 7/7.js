const fs = require('fs');
const util = require('util');

const readFile = util.promisify(fs.readFile)

readFile(__filename, 'utf8').then(
    contents => {
        console.log(contents)
    },
    error => {
        console.log(error)
    }
)