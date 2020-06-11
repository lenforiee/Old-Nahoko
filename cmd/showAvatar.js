const Discord = require('discord.js');
const config = require("../config.json")
const randomcolor_1 = require("randomcolor")

module.exports = function (client) {
    client.on("message", async message => {
        if (message.content.startsWith(config.bot.prefix + 'avatar')) {
            let user = message.mentions.users.first();
            if(!user) user = message.author;
            let color = randomcolor_1.randomColor();
            let hex = parseInt(color.replace(/^#/, ''), 16);
            
            const embed = new Discord.RichEmbed()
            .setAuthor(`${message.author.username}`, `${message.author.avatarURL}`)
            .setImage(message.author.avatarURL)
            .setColor(hex);
            message.channel.send(embed)
        }
    })
}
