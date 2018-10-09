# Toy Robot Simulator


## Installation and Usage

Install it locally onto your machine.
```
npm install
```

Starting the application. 

```
npm start PATH/YOURFILENAME.txt
```


## Description
-----------

The table has dimension of 5x5. 

Your commands must not make the Toy Robot fall off the table.

Toy Robot will not ingest any commands that will make it fall off the table.

Toy Robot must be placed before taking any further commands.

### List of commands Toy Robot can ingest:

- PLACE (X, Y, FACING) : Places the Toy Robot onto the table.

- LEFT: Turn Toy Robot 90degrees left.

- RIGHT: Turn Toy Robot 90degrees right.

- MOVE: Move Toy Robot one step into the current direction it's facing.

- REPORT: Report the current position and current direction.


Example Input and Output
------------------------

### Example a

    PLACE 0,0,NORTH
    MOVE
    REPORT

Expected output:

    0,1,NORTH

### Example b

    PLACE 0,0,NORTH
    LEFT
    REPORT

Expected output:

    0,0,WEST

### Example c

    PLACE 1,2,EAST
    MOVE
    MOVE
    LEFT
    MOVE
    REPORT

Expected output

    3,3,NORTH

Tests
------------------------

```
npm test
```