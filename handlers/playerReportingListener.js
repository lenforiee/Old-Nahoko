const Discord = require('discord.js');
const randomcolor_1 = require("randomcolor");
const config = require("../config.json");

module.exports = function (client) {
    client.on("message", async message => {
      if (message.channel.id === config.bot.player_reports)
        if (!message.content.startsWith("Player's username:")) {
          message.delete();
          message.author.send('Please stick to the format otherwise we won\'t get your report!')
        } else {
          let color = randomcolor_1.randomColor();
          let hex = parseInt(color.replace(/^#/, ''), 16);

          const ReportEmbed = new Discord.RichEmbed()
          .setColor(hex)
          .setTitle(`New Report from ${message.author.tag}`)
          .addField("Info about report:", "```"+message.content+"```")
          .setFooter("© osu!Misumi ", client.user.avatarURL)
          .setTimestamp()
          client.channels.get('712290238378016839').send(ReportEmbed);
          message.delete();

          const InfoToAuthorEmbed = new Discord.RichEmbed()
          .setColor('#FF4949')
          .setTitle('Your report is under review!')
          .addField('Info about your report:', 'Hey there! Thank you for your report. It will be reviwed by Misumi Community Manager soon!')
          .setFooter("© osu!Misumi ", client.user.avatarURL)
          .setTimestamp()
          message.author.send(InfoToAuthorEmbed)
        }
    });
}
