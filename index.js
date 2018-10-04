// const ToyRobot = require('./lib/ToyRobot');
const FileReader = require('./lib/FileReader');
const InputParser = require('./lib/InputParser');

// const toyRobot = new ToyRobot();
const fileReader = new FileReader();
const inputParser = new InputParser();

const app = {};

app.readParseFile = (fileName, cb) => {
    console.log(fileReader)
    fileReader.readInputFile(fileName, function (err, fileData) {
        if (err) {
            cb(err);
            return
        }

        inputParser.parseArguements(fileData, (err, commandsList) => {
            if (err) {
                cb(err);
                return
            }
            console.log(commandsList);
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

        // toyRobot = toyRobot.executecommands(commandsList);
        cb(null);
    });
};

module.exports = app;