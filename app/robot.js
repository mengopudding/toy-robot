const app = require('../index');

const fileName = process.argv[2]; // 0 node , 1 file name,  2 fileName arguement
app.runRobotApp(fileName, (err, toyRobot) => {
    if (err) {
        console.log('ERROR:' + ' ' + (err.message));
        return
    }

    // if (!toyRobot.hasBeenPlaced) {
    //     console.log('Robot placement is unsuccessful');
    // }
})