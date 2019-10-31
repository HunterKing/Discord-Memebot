//Load Discord.js pre-reqs and setup.
const Discord = require('discord.js');
const { Client } = require('discord.js');
const bot = new Discord.Client();
bot.commands = new Discord.Collection();
const config = require('./config.json');
const fs = require('fs');
//Load misc libraries.
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));


for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	bot.commands.set(command.name, command);
}


bot.on('ready', () => {
	console.log(`Logged in as ${bot.user.tag}`);
	bot.user.setActivity(config.game);
});

bot.on('message', message =>{
	if(!message.content.startsWith(config.prefix) || message.author.bot) return;
	//Catch message and clip off prefix to check files.
	const args = message.content.slice(config.prefix.length).split(/ +/);
	const commandName = args.shift().toLowerCase();
	const command = bot.commands.get(commandName);

	if(!bot.commands.has(commandName)) return;
	try{
		command.execute(message, args);
	}
	catch(error){
		console.error(error);
		message.reply('That command does not exist.');
	}
});

//If enumerateFiles() is called, we need to remake our list of filenames.

bot.login(config.token)