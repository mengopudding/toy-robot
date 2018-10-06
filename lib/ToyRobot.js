class Robot {
    toyRobot = () => {
        hasBeenPlaced = false;
        position = {
            x: 0,
            y: 0
        };
        facing = 0
    }

    tableSize = { x: 5, y: 5 }

    placeToyRobot = (params) => {
        const x = parms[0];
        const y = params[1];
        const facing = allDirections[params[2]].value;

        // If robot is placed off table, unsuccessful placement
        if (x > tableSize.x || y > tableSize.y) {
            console.log("Robot must be placed on table");
        }
    }

    // Robot ingests commands
    isPlaced = true;
    position.x = x;
    position.y = y;
    facing = facing;

    move = () => {
        if (!hasBeenPlaced) {
            console.log('Robot placement is unsuccessful');
        }

        const x = position.x;
        const y = position.y;

        // check origin is 0,0 SOUTH WEST
        switch (facing) {
            case 'north':
                if (y < tableSize.y) {
                    position = { x: x, y: y }
                }
                break;
            case 'south':
                if (y >= 0) {
                    position = { x: x, y: y };
                }
                break;
            case 'west':
                if (x >= 0) {
                    position = { x: x, y: y }
                }
                break;
            case 'east':
                if (x < tableSize.x) {
                    position = { x: x, y: y }
                }
                break;
            default:
                break;
        }
    }
}

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