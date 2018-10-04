const fs = require('fs') // node lib to read files

class FileReader {
    readInputFile(fileName, cb) {
        if (!fileName) {
            return cb(new Error("Missing File name!!"))
        }

        // Read file, if there is not file name, throw an error
        fs.readFile(fileName, { encoding: 'utf-8' }, (err, fileData) => {
            if (err) {
                return cb(new Error('File name does not exist'));
            }

            // If file is empty, throw an error
            if (!fileData.length) {
                return cb(new Error('File cannot be empty'));
            }

            return cb(null, fileData);
        });
    }
}

module.exports = FileReader;
