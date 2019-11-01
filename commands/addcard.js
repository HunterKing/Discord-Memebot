//Load libraries.
const isImageUrl = require('is-image-url');
const fs = require('fs');
const wget = require('wget-improved');
//Load variables.
const { imagepath } = require('../config.json')

module.exports = {
	name: "addcard",
	description: "Add a card to the bot.",
	usage: '<url>',
	execute(message, url_arr) {
		var url = url_arr[0];
		if(isImageUrl(url)){
			try{
				downloadFile(url);
				message.channel.send("Card downloaded.");
			}
			catch(error){
				message.channel.send("Error downloading card.");
				console.log(error);
			}
		}
	},
};

function downloadFile(url){
	const filename = url.substring(url.lastIndexOf('/') + 1);
	console.log("Filename is " + filename);
	console.log("Attempting to download image at: " + url);
	wget.download(url, imagepath + filename);
}