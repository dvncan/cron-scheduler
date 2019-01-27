const fs = require('fs');
const readline = require('readline');
const Duration = require('duration');
require('datejs');

//Grab args
const [,, ...args] = process.argv

//input 0, 0, X - every hour how many seconds.

//Today local time
var time = Date.today();

//Today + time to task
var time2 = Date.today().addSeconds(args[0]).addMinutes(args[1]).addHours(args[2]);

//distant to first requested time
var duration = new Duration(time, time2);

//Display seconds till task run
console.log("seconds: ", duration.seconds);

/*fs.readFile(`./${args}`, (err, data) => 
{	if (err) throw err;
	console.log(`${data}`);
	data1 = data;
	
	const rl = readline.createInterface({
		input : fs.createReadStream(""text.txt)
	});

	rl.on('line', (line) => {
		console.log('Line from file:', line);
	});
	
})*/
