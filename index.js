const ToyRobot = require('./lib/ToyRobot');
const FileReader = require('./lib/FileReader');
const InputParser = require('./lib/InputParser');

let toyRobot = new ToyRobot();
const fileReader = new FileReader();
const inputParser = new InputParser();

// console.log(ToyRobot);

const app = {};

app.readParseFile = (fileName, cb) => {
    console.log(fileReader)
    fileReader.readInputFile(fileName, (err, fileData) => {
        if (err) {
            cb(err);
            return
        }

        inputParser.parseArguements(fileData, (err, commandsList) => {
            if (err) {
                cb(err);
                return
            }

            cb(null, commandsList);
        })
    });
};

app.runRobotApp = (fileName, cb) => {
    app.readParseFile(fileName, (err, commandsList) => {
        if (err) {
            cb(err);
            return
        }
        toyRobot.executeCommands(commandsList);
        cb(null, toyRobot);
    });
};

module.exports = app;