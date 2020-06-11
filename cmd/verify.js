const config = require("../config.json");
var colors = require('colors/safe');

module.exports = function(client) {
    client.on('message', async message => {
      if (message.content.startsWith(config.bot.prefix + "verify")) {
        if (message.channel.id === config.bot.verify) {
            try {
              var role = message.guild.roles.find(role => role.name === "Member");
              message.member.addRole(role);

              message.delete();

              console.log(colors.green(`${message.author.tag}`) + (' has been verified!'));

            } catch (error) {
              console.log(error)
              message.channel.send("This shouldn't happened :/");
            }
          } else {
            message.delete();
          }
        }
    })
}
