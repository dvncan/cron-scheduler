const cron = require('node-cron');
const fs = require('fs');
var data1;

//Grab args
const [,, ...args] = process.argv

//Print
console.log(`${args}`)

var data1
fs.readFile(`./${args}`, (err, data) => 
{	if (err) throw err;
	console.log(`${data}`);
	data1 = data;
	
})

cron.schedule('05 * * * * *', () => {
  console.log('running a task every minute' + data1);
});