const fs = require('fs')

class FileReader {
    readInputFile(fileName, cb) {
        if (!fileName) {
            return cb(new Error("Missing File name!!"))
        }
        fs.readFile(fileName, { encoding: 'utf-8' }, (err, fileData) => {
            if (err) {
                return cb(new Error('File does not exist'));
            }
            if (!fileData.length) {
                return cb(new Error('File cannot be empty'));
            }
            return cb(null, fileData);
        });
    }
}

module.exports = FileReader;
