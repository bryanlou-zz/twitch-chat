var tmi = require('tmi.js');

var options = { 
	options: {
		debug: true
	},
	connection: {
		cluster: "aws",
		reconnect: true
	},
	identity: {
		username: "taintedrose",
		password: "oauth:hkzoku0yenenvrexh0f6m5js5me1vt"	
	},
	channels: ["taintedrose"]
};

var client = new tmi.client(options);
client.connect();

client.on('chat', function(channel,user,message,self){
	if(message === "!twitter"){
		client.action("taintedrose","twitter.com/bryanlou3");
	}
	client.action("taintedrose",user['display-name']+
		" you are a total noob bro.");
});

client.on('connected', function(address,port){
	console.log("Address: " + address + " Port: " + port);
	client.action("taintedrose", "Hello I'm a noob bot and you're a total noob")
});                          