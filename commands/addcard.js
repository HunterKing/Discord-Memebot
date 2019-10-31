const isImageUrl = require('is-image-url');

module.exports = {
	name: "addcard",
	description: "Add a card to the bot.",
	usage: '<url>',
	execute(message) {
		message.channel.send("In progress...");
	},
};

function enumerateFiles() {
	images = fs.readdirSync(config.imagepath);
	console.log(images.toString());
	console.log(numFiles);
}
