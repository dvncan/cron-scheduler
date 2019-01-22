const cron = require('node-cron');
const fs = require('fs');

//Grab args
const [,, ...args] = process.argv

//Print
console.log(`${args}`)

fs.readFile(`./${args}`, (err, data) => 
{	if (err) throw err;
	console.log(`${data}`);
})
