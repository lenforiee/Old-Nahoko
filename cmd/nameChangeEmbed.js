const Discord = require('discord.js');
const randomcolor_1 = require("randomcolor");
const config = require("../config.json")

module.exports = function (client) {
    client.on("message", async message => {
        if (message.content.startsWith(config.bot.prefix + "namechange")) {
			if(!message.member.roles.has(config.bot.id_role_bot)) return message.channel.send("You don't have access to this command!")
      message.delete();

			try {
            let color = randomcolor_1.randomColor();
            let hex = parseInt(color.replace(/^#/, ''), 16);

            const embed = new Discord.RichEmbed()
            .setTitle("Welcome to the Name Change Channel")
            .addField("Information", "Donators get **unlimited** name changes so if you want a username change then use **format** given below.")
            .addField("Format:", "```Old username -> New username```")
            message.channel.send(embed)
			}catch (e) {
				return message.channel.send("Something went wrong check code :/")
			}
        }
    })
}
