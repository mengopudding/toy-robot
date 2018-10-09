const { expect } = require('chai');
const ToyRobot = require('../lib/ToyRobot')

// test place, move, turn and report function
// test for correct output 
// test error if robot is placed outside 5x5 table

describe('ToyRobot', () => {
    let toyRobot = new ToyRobot();

    it('should place toy robot within the dimensions of the 5x5 table', () => {
        toyRobot = toyRobot.place([1, 1, 'south'])
        expect(toyRobot.hasBeenPlaced).to.be.true;
        expect(toyRobot.position).to.deep.equal({ x: 1, y: 1 });
        expect(toyRobot.facing).to.equal('south');
    })

    it('should throw error if toy robot is placed off the 5x5 table', () => {
        toyRobot = toyRobot.place([6, 4, 'north']);
        expect(toyRobot.hasBeenPlaced).to.be.false;
    });

    it('should ignore commands that cause toy robot to move fall 5x5 table', () => {
        toyRobot = toyRobot.place([5, 4, 'west']);
        toyRobot = toyRobot.move();
        toyRobot = toyRobot.move();
        toyRobot = toyRobot.move();
        toyRobot = toyRobot.turn('left');
        toyRobot = toyRobot.move();
    });

    it('should report its correct cordinates and facing direction when report command is being called', () => {
        toyRobot = toyRobot.place([1, 2, 'east',]);
        toyRobot = toyRobot.report();
        toyRobot = toyRobot.move();
        toyRobot = toyRobot.turn('right');
        toyRobot = toyRobot.report();
        expect(toyRobot.position).to.deep.equal({ x: 2, y: 2 });
        expect(toyRobot.facing).to.equal('south');
    });
})