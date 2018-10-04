class InputParser {
    //all the directions
    directions = ['north', 'south', 'west', 'east']
    readArguements() {
        if (!args.length) {
            return cb(new Error('Must give robot instructions'));
        }

        const parsedInput = args
            .split('\n')
            .map(function (instructions) {
                console.log(instructions);
                return this.parseInstruction(instructions.toLowerCase());
            })

        // If there are no instructions given, throw an error
        if (!parsedInput.length) {
            return cb(new TypeError('No instructions were given to robot'));
        }

        cb(null, parsedInput);
    }
}

module.exports = InputParser;

