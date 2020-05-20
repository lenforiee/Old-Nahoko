const Discord = require('discord.js');
const randomcolor_1 = require("randomcolor");
const config = require("../config.json")

module.exports = function (client) {
    client.on("message", async message => {
        if (message.content.startsWith("Player's username:")) 

			try {
		    let color = randomcolor_1.randomColor();
            let hex = parseInt(color.replace(/^#/, ''), 16);
            
            const embed = new Discord.RichEmbed()
            .setTitle("New Report")
            .addField("Info about report:", "```"+message.content+"```")
            client.channels.get('712290238378016839').send(embed)
            message.delete();
        } catch (e) {
			return message.channel.send("Problem has occured, please contact one of the staff member!")
	  }
    })
}