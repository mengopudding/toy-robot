class Robot {
    toyRobot = () => {
        hasBeenPlaced = false;
        position = {
            x: 0,
            y: 0
        };
        f = 0
    }

    tableSize = { x: 5, y: 5 }

    placeToyRobot = (params) => {
        const x = parms[0];
        const y = params[1];
        const f = allDirections[params[2]].value;

        // If robot is placed off table, unsuccessful placement
        if (x > tableSize.x || y > tableSize.y) {
            console.log("Robot must be placed on table");
        }
    }

    // Robot ingests commands
    isPlaced = true;
    position.x = x;
    position.y = y;
    f = f;
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