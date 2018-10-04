class InputParser {
    //all the directions
    directions = ['north', 'south', 'west', 'east']
    parseArguements() {
        if (!args.length) {
            return cb(new Error('Must give robot instructions'));
        }

        const parsedInput = args
            .split('\n')
            .map((instructions) => {
                console.log(instructions);
                return this.parseInstruction(instructions.toLowerCase());
            })

        // If there are no instructions given, throw an error
        if (!parsedInput.length) {
            return cb(new Error('No instructions were given to robot'));
        }

        cb(null, parsedInput);
    }

    parseInstructions(instructions) {
        const instructionsObj;
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

module.exports = InputParser;

