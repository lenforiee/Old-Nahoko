const Discord = require('discord.js');
const config = require("../config.json");
var colors = require('colors/safe');


module.exports = function (client) {
    client.on("message", message => {
        var messageToCheck = message.content.toLowerCase();
        if (messageToCheck.startsWith(config.bot.prefix + "unblacklist")) { return require("../cmd/removeWordsFromBadWordList")(client) }
        for (let i = 0; i < global.naughtyWords.length; i++) {
            if (messageToCheck.indexOf(global.naughtyWords[i].toLowerCase()) > -1) {
                try {
                  const Embed = new Discord.RichEmbed()
                    .setTitle(`Blacklisted word from ${message.author.tag}`)
                    .setDescription(`Disallowed Sentence: ${message.content}`)
                    client.channels.get('709395870512054302').send(Embed)
                    console.log((`${message.author.tag}`) + colors.red(' used blacklisted ') + ('word in sentence'))
                    return message.delete();
                } catch (error) {
                  console.log(error)
                      return message.channel.send('Something is not right');
                }
            }
        }
    })
}
