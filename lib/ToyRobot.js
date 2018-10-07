class Robot {

    constructor() {
        this.hasBeenPlaced = false;
        this.position = {
            x: null,
            y: null
        };
        this.facing = null
    }


    place(params) {
        const x = params[0];
        const y = params[1];

        console.log(params)
        console.log(params[0])
        console.log(params[1])
        console.log(params[2])

        console.log(allDirections[0].value); // returns north


        // console.log(allDirections[1].value);
        // console.log(allDirections[2].value);


        // console.log(allDirections[0].value)
        // console.log(allDirections[params[2]])

        // const facing = allDirections[params[2]].value;


        // If robot is placed off table, unsuccessful placement
        console.log(tableSize)
        if (x > tableSize.x || y > tableSize.y) {
            console.log("Robot must be placed on table");
            return this;
        }
        // Robot ingests commands
        this.hasBeenPlaced = true;
        this.position.x = x;
        this.position.y = y;
        this.facing = facing;

        return this;
    }

    move() {
        if (!hasBeenPlaced) {
            console.log('Robot has not been placedl');
            return this;
        }

        const x = this.position.x;
        const y = this.position.y;

        // check origin is 0,0 SOUTH WEST
        switch (this.facing) {
            case 'north':
                if (y < this.tableSize.y) {
                    this.position = { x: x, y: y }
                }
                break;
            case 'south':
                if (y >= 0) {
                    this.position = { x: x, y: y };
                }
                break;
            case 'west':
                if (x >= 0) {
                    this.position = { x: x, y: y }
                }
                break;
            case 'east':
                if (x < this.tableSize.x) {
                    this.position = { x: x, y: y }
                }
                break;
            default:
                break;
        }
        return this;
    }

    turn(facing) {
        if (!this.hasBeenPlaced) {
            console.log('robot has not been placed');
            return this;
        }

        const facingDirection = allDirections[this.facing][facing];
        console.log(facingDirection);

        if (facingDirection) {
            this.facing = facingDirection;
        }
        return this;
    }

    report() {
        if (!this.hasBeenPlaced) {
            console.log('robot has not been placed');
        }

        console.log(`REPORT: ${this.position.x, this.position.y, this.facing.toUpperCase().join(',')}`);
        return this;
    }


    executeCommands(commandsList) {
        let commands;

        for (let i = 0; i < commandsList.length; i++) {
            commands = commandsList[i];
            if (commands.args) {
                // console.log(commands.args);
                this.place(commands.args)
            } else {
                this.place()
            }
        };

        return this;

    }

}

const tableSize = { x: 5, y: 5 };

const allDirections = {
    north: {
        value: 'north',
        left: 'west',
        right: 'east'
    },
    south: {
        value: 'south',
        left: 'east',
        right: 'west'
    },
    west: {
        value: 'west',
        left: 'south',
        right: 'north'
    },
    east: {
        value: 'east',
        left: 'north',
        right: 'south'
    }
};

module.exports = Robot;