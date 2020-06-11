const Discord = require('discord.js');
const randomcolor_1 = require("randomcolor");
const config = require("../config.json")
var colors = require('colors/safe');

module.exports = function (client) {
    client.on("message", async message => {
        if (message.content.startsWith(config.bot.prefix + "ban")) {
          var msg = message.content;
          msg = msg.split(config.bot.prefix + "ban ");
          msg = msg[1];
          let mention = message.mentions.users.first();
          message.delete();

			if(!message.member.roles.has(config.bot.id_role_bot)) return message.channel.send("You don't have access to this command!")

      try {
        if (message.mentions.users.size == 0)
            return await message.reply("where is person to ban??.");

        if (!message.guild.member(client.user).hasPermission('BAN_MEMBERS'))
            return await message.reply("I can't ban this user.");

        const user = Discord.GuildMember = message.guild.member(message.mentions.users.first());
        if (!user) return await message.reply("this user doesn't exist or he's already banned.");

        console.log((`${message.author.tag}`) + colors.red(' has banned ') + (`${mention.tag}`));
        await user.ban();
        return await message.channel.send(`${user} was permanently banned from the ${config.bot.server_name} discord server.`);
    } catch(err) {
        console.log(err);
        return await message.reply("I don't have permissions to ban this user.");
    }
  }


})
  }
