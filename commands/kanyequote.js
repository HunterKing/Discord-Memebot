const { kanyequote } = require('../config.json');

module.exports = {
	name: "kanyequote",
	description: "Provides a random Kanye West quote.",
	execute(message){
		quote = kanyequote[Math.floor(Math.random()*kanyequote.length)];
		quote = ("\"" + quote + "\""); 
		message.channel.send({embed: {
			fields: [{
				name: "Kanye Says:",
				value: quote
			}]
		}});
	}
}