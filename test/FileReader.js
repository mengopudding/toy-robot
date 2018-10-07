const { expect } = require('chai');
const FileReader = require('../lib/FileReader')
const path = require('path')

// test if file exists 
// test if fileData is empty
// test if fileData matches

describe('FileReader', () => {
    const fileReader = new FileReader();

    it('should throw an error if file does not exist', () => {
        fileReader.readInputFile(path.join(__dirname, 'testData/notexist.txt'), (err) => {
            expect(err).to.be.throw;
        });
    });

    it('should throw an error if file is empty', () => {
        fileReader.readInputFile(path.join(__dirname, 'testData/empty.txt'),
            (err) => {
                expect(err).to.exist;
            });
    });

    it('should correctly read in the commands of a text file', () => {
        fileReader.readInputFile(path.join(__dirname, 'testData/set1.txt'), (err, fileData) => {
            expect(err).to.be.null;
            expect(fileData).to.equal('PLACE 1,1,NORTH\nRIGHT\nREPORT');
        });
    });
})


