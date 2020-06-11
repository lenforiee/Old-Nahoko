const Discord = require('discord.js');
const config = require("../config.json")
const randomcolor_1 = require("randomcolor")

module.exports = function (client) {
    client.on("message", async message => {
        if (message.content.startsWith(config.bot.prefix + 'bonk')) {
            let args = message.content.slice(config.bot.prefix.length).trim().split(' ');
            let mention = message.mentions.users.first();
            args[0] = mention
            if (!args[0]) return message.channel.send("WHY DO U WANT TO BONK NO ONE??");

            try {
                let color = randomcolor_1.randomColor();
                let hex = parseInt(color.replace(/^#/, ''), 16);
                
                const embed = new Discord.RichEmbed()
                .setTitle(`${message.author.tag} bonked ${mention.tag}`)
                .setImage('https://cdn.discordapp.com/attachments/637762361503252493/708479358410424350/doggo.gif')
                .setColor(hex);
                message.channel.send({embed})
            } catch (e) {
                return message.channel.send("Problem has occured, please contact one of the staff member!")
            }

        }
    })
}
