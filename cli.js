const fs = require('fs');
const readline = require('readline');
const Duration = require('duration');
require('datejs');
const clock = require('world-clock')();


/*function t(time, s, m, h){
	//Today + time to task
	var time2 = Date.today().addSeconds(s).addMinutes(m).addHours(h-5);

	if(time2 < time){
		time.addHours(0);
		time2.addHours(12);
	}

	console.log(time2);

	//distant to first requested time
	var duration = new Duration(time, time2);

	//Display seconds till task run
	console.log("seconds: ", duration.seconds);


	console.log("seconds: ", duration.seconds/3600);
	console.log("m: ", duration.minutes/60);
	console.log("h: ", duration.hours);
}*/

//For some reason my computer thinks I am in GMT timezone

//Grab args
const [,, ...args] = process.argv

//input 0, 0, X - every hour how many seconds.

//Today local time

console.log(clock.localDateTime('SYSTEM').toString());

//reset for EST
var time = new Date().addHours(-5);

console.log(time);

var s = args[0], m = args[1], h = args[2], ar = "";

//read file

/*
const contents = fs.readFileSync(`./${args}`, 'utf8');
for(let j = 0; j < contents.length; j++){


	if(contents.substr(j, 1) != '\n'){

		
		if(contents.substr(j, 1) === 'X'){
			ar+=0;
		}else if(contents.substr(j, 1) != ','){
			ar+=contents.substr(j,1);
		}else if(contents.substr(j,1) == ','){
			ar+= ""
		}
		t(time, ar[0], ar[1] + ar[2], ar[3]);
		
	}
}

console.log(ar);*/

//Select wildcard

if(s === 'X'){
	s = time.getSeconds();
}

if(m === 'X'){
	m = time.getMinutes();
}

if(h === 'X'){
	h = time.getHours() -6 ;
}


var time2 = Date.today().addSeconds(s).addMinutes(m).addHours(h-5);

//switch 
	if(time2 < time){
		time.addHours(0);
		time2.addHours(12);
	}

	console.log(time2);

	//distant to first requested time
	var duration = new Duration(time, time2);

	//Display seconds till task run
	console.log("seconds till task: ", duration.seconds);
