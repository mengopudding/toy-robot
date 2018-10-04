class InputParser {
    parseArguements(args, cb) {
        if (!args.length) {
            return cb(new Error('Must give robot instructions'));
        }
        const parsedInput = args
            .split('\n')
            .map((instructions) => {
                return this.parseInstructions(instructions.toLowerCase());
            }).filter(x => !!x);

        // If there are no instructions given, throw an error
        if (!parsedInput.length) {
            return cb(new Error('No instructions were given to robot'));
        }

        cb(null, parsedInput);
    }

    parseInstructions(instructions) {
        let instructionsObj;
        if (instructions.length === 0) {
            return null
        }
        const instructionsList = instructions.split(' ');
        if (instructionsList.length > 1 && instructionsList[0] === 'place') {
            instructionsObj = this.initPlacement(instructionsList);
        } else {
            instructionsObj = this.inputInstruction(instructions);
        }

        if (instructionsObj) {
            return instructionsObj;
        }
    }

    initPlacement(position) {
        const positionList = position[1].split(',');

        const x = parseInt(positionList[0]);
        const y = parseInt(positionList[1]);
        const f = positionList[2];
        if (!isNaN(x) && !isNaN(y) && this.directions.includes(f)) {
            return {
                command: 'place',
                args: [x, y, f]
            };
        } else {
            return null;
        }
    };
}

//all the directions
InputParser.prototype.directions = ['north', 'south', 'west', 'east']

module.exports = InputParser;

