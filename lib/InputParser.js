class InputParser {
    parseArguements(args, cb) {
        if (!args.length) {
            return cb(new Error('Must give robot command'));
        }
        const parsedInput = args
            .split('\n')
            .map((commands) => {
                return this.parsecommands(commands.toLowerCase());
            }).filter(x => !!x);

        // If there are no commands given, throw an error
        if (!parsedInput.length) {
            return cb(new Error('No commands were given to robot'));
        }

        cb(null, parsedInput);
    }

    parsecommands(commands) {
        let commandsObj;
        if (commands.length === 0) {
            return null
        }
        const commandsList = commands.split(' ');

        // first valid command must be PLACE command
        if (commandsList.length > 1 && commandsList[0] === 'place') {
            commandsObj = this.initPlacement(commandsList);
        } else {
            commandsObj = this.inputCommand(commands);
        }

        if (commandsObj) {
            return commandsObj;
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

    inputCommand(allCommands) {
        switch (allCommands) {
            case 'move':
                return {
                    command: 'move'
                };
            case 'left':
                return {
                    command: 'turn',
                    args: 'left'
                };
            case 'right':
                return {
                    command: 'turn',
                    args: 'right'
                };
            case 'report':
                return {
                    command: 'report'
                };
            default:
                return null;
        }
    }
}

//all the directions
InputParser.prototype.directions = ['north', 'south', 'west', 'east']

module.exports = InputParser;

