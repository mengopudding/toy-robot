class Robot {

    constructor() {
        this.hasBeenPlaced = false;
        this.position = {
            x: null,
            y: null
        };
        this.facing = null
    }


    place(positionParams) {

        // console.log(typeof positionParams === 'undefined');
        // console.table(positionParams)
        let x = positionParams[0];
        let y = positionParams[1];


        const facing = allDirections[positionParams[2]].value;
        // console.log(facing)


        // If robot is placed off table, unsuccessful placement
        // console.log(tableSize)
        if (x > tableSize.x || y > tableSize.y) {
            console.log("Robot must be placed on table");

            return this;
        }

        // Robot ingests commands
        this.hasBeenPlaced = true;
        this.position.x = x;
        this.position.y = y;
        this.facing = facing;

        // console.log(this.position.x) // can see log yes
        // console.log(this.position.y) // can see log yyes

        return this;
    }

    move() {
        if (!hasBeenPlaced) {
            console.log('Robot has not been placedl');
            return this;
        }


        let x = this.position.x;
        let y = this.position.y;

        console.log(x, y) // cant see 


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
                if (x < tableSize.x) {
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


        if (facingDirection) {
            this.facing = facingDirection;

        }
        console.log(facingDirection);
        return this;
    }

    report() {
        if (!this.hasBeenPlaced) {
            console.log('robot has not been placed');
            return this;
        }

        console.log(('Robot Report:') + "\n" + [this.position.x, this.position.y, this.facing.toUpperCase()])
        return this;

    }

    executeCommands(commandsList) {
        let commands;

        for (let i = 0; i < commandsList.length; i++) {
            commands = commandsList[i];
            if (commands.args) {
                console.log(this)
                this.place(commands.args)
                // console.log(commands.args)
                this.report()
            } else {
                this.place()
            }
            return this
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