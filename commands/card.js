const fs = require('fs');
const { Attachment } = require('discord.js');
const { imagepath } = require('../config.json');
var images = fs.readdirSync(imagepath);

module.exports = {
	name: "card",
	description: "Links a random CS-themed card.",
	execute(message) {
		console.log(images);
		const attachment = new Attachment(fetchRandom());
		message.channel.send(attachment);
	},
	images: images
};

function fetchRandom() {
	return imagepath + images[Math.floor(Math.random()*images.length)];
}
