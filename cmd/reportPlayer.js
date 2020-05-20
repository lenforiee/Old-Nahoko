const Discord = require('discord.js');
const randomcolor_1 = require("randomcolor");
const config = require("../config.json")

module.exports = function (client) {
    client.on("message", async message => {
        if (message.content.startsWith(config.bot.prefix + "report")) {
			if(!message.member.roles.has(config.bot.id_role_bot)) return message.channel.send("You don't have access to this command!")
				
			try {
            let color = randomcolor_1.randomColor();
            let hex = parseInt(color.replace(/^#/, ''), 16);
            
            const embed = new Discord.RichEmbed()
            .setTitle("Welcome To the Player Reporting Channel")
            .addField("Information", "Please stick to the format below when reporting and **do not** tag admins here.")
            .addField("Format:", "```\nPlayer's username:\nLink to Player's Profile:\nReason for Reporting Player (cheating, multi-accounting):\nEvidence:```")
            message.channel.send(embed)
			}catch (e) {
				return message.channel.send("Something went wrong check code :/")
			}
        }
    })
}