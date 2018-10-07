const { expect } = require('chai');
const InputParser = require('../lib/InputParser')

// test if first command is place
// test specific allowed commands
// test if any commands have been parsed

describe('InputParser', () => {
    const inputParser = new InputParser();

    it('should parse commands correctly to robot', () => {
        inputParser.parseArguements('PLACE 1,1,SOUTH\nMOVE\nRIGHT\nRIGHT\nMOVE\nLEFT\nREPORT', (err, commandsList) => {
            expect(commandsList).to.deep.equal([
                {
                    command: 'place',
                    args: [1, 1, 'south']
                }, {
                    command: 'move'
                }, {
                    command: 'turn',
                    args: 'right'
                }, {
                    command: 'turn',
                    args: 'right'
                }, {
                    command: 'move'
                }, {
                    command: 'turn',
                    args: 'left'
                }, {
                    command: 'report'
                }
            ]);
        });
    });

    it('should only be able to parse specific allowed commands', () => {
        inputParser.parseArguements('PLACE 1,1,WEST\nSKIP\n\HOP\nREPORT', (err, commandsList) => {
            expect(err).to.throw
            expect(commandsList).to.not.equal([
                {
                    command: 'place',
                    args: [1, 1, 'west']
                }, {
                    command: 'move'
                }, {
                    command: 'turn'
                }, {
                    command: 'report'
                }
            ])
        });
    });

    it('should throw an error if no commands are parsed to robot', () => {
        inputParser.parseArguements('', (err) => {
            expect(err).to.exist;
        });
    });

    it('the first command must be PLACE', () => {
        inputParser.parseArguements('PLACE 1,1,SOUTH\nMOVE\nRIGHT\nRIGHT\nMOVE\nREPORT', (err, commandsList) => {
            expect(err).to.throw
            expect(Object.values(commandsList)[0].command).to.equal('place')
        })
    })

    it('should throw error if first command is not PLACE', () => {
        inputParser.parseArguements('MOVE 1,1,SOUTH\nMOVE\nRIGHT\nRIGHT\nMOVE\nREPORT', (err, commandsList) => {
            expect(err).to.throw
            expect(Object.values(commandsList)[0].command).to.not.equal('place')
        })
    })
});