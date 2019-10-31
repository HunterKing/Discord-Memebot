//home/hunter/Documents/meme/Discord-Memebot/images/ is going to be our final path but not worth yet.
const Discord = require('discord.js');
const { Client, Attachment} = require('discord.js');
const fs = require('fs');
const isImageUrl = require('is-image-url');
const config = require('./config.json');
const bot = new Discord.Client();
var files = fs.readdirSync(config.imagepath);
var numFiles = files.length;

bot.on('ready', () => {
	console.log(`Logged in as ${bot.user.tag}!`);
	bot.user.setActivity(config.game);
});

bot.on("message", (message) => {
	if(!message.content.startsWith(config.prefix)) return;

	if(message.content === (config.prefix + "breaktheconditioning")){
		message.channel.send("https://www.youtube.com/watch?v=p2-4rJmYEfU");
	}

	if(message.content === (config.prefix + "magictrick")){
		message.channel.send("https://www.youtube.com/watch?v=qzLNy38hiLY");
	}

	if(message.content === (config.prefix + "whatitdoyugi")){
		message.channel.send("https://www.youtube.com/watch?v=AUnPN385wLI");
	}

	if(message.content ===(config.prefix + "wtfisupdennys")){
		message.channel.send("https://www.youtube.com/watch?v=QBw4huCadBQ'");
	}

	if(message.content === (config.prefix + "frogs")){
		message.channel.send("https://www.youtube.com/watch?v=_ePLkAm8i2s");
	}

	if(message.content === (config.prefix + "freshtap")){
		message.channel.send("https://www.youtube.com/watch?v=BdzShsSspC8");
	}

	if(message.content === (config.prefix + "card")){
		const attachment = new Attachment(fetchRandom());
		message.channel.send(attachment);
	}
});

//If enumerateFiles() is called, we need to remake our list of filenames.
function enumerateFiles() {
	files = fs.readdirSync(config.imagepath);
	console.log(files.toString());
	console.log(numFiles);
}

function fetchRandom() {
	return config.imagepath + files[Math.floor(Math.random()*files.length)];
}

bot.login(config.token)