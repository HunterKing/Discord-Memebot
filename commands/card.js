const fs = require('fs');
const { Attachment } = require('discord.js');
const { imagepath } = require('../config.json');
var images;
module.exports = {
	name: "card",
	description: "Links a random CS-themed card.",
	execute(message) {
		images = fs.readdirSync(imagepath);
		console.log(images);
		const attachment = new Attachment(fetchRandom());
		message.channel.send(attachment);
	},
};

function fetchRandom() {
	return imagepath + images[Math.floor(Math.random()*images.length)];
}
