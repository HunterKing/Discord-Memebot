const{Attachment} = require('discord.js');
const config = require('../config.json');
const fs = require('fs');
var images = fs.readdirSync(config.imagepath);

module.exports = {
	name: "card",
	description: "Links a random CS-themed card.",
	execute(message) {
		const attachment = new Attachment(fetchRandom());
		message.channel.send(attachment);
	},
};

function fetchRandom() {
	return config.imagepath + images[Math.floor(Math.random()*images.length)];
}
