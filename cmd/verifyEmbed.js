const Discord = require('discord.js');
const randomcolor_1 = require("randomcolor");
const config = require("../config.json")

module.exports = function (client) {
    client.on("message", async message => {
        if (message.content.startsWith(config.bot.prefix + "verifyembed")) {
			if(!message.member.roles.has(config.bot.id_role_bot)) return message.channel.send("You don't have access to this command!")
      message.delete();

			try {
            let color = randomcolor_1.randomColor();
            let hex = parseInt(color.replace(/^#/, ''), 16);

            const embed = new Discord.RichEmbed()
            .setTitle("Welcome to the Verify Channel")
            .addField("Information", "Please make sure to **read** rules before verifying, these can be found at **#rules**.")
            .addField("How to get verified?", "Simple. Just type **!verify** and you are good to go.")
            message.channel.send(embed)
			}catch (e) {
				return message.channel.send("Something went wrong check code :/")
			}
        }
    })
}
