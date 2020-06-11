const config = require("../config.json");
var colors = require('colors/safe');


module.exports = function(client) {
    client.on('message', async message => {

        if (message.content.startsWith(config.bot.prefix + "purge")) {
            if(!message.member.roles.has(config.bot.id_role_bot)) return message.channel.send("You don't have access to this command!")

            try {
              message.channel.bulkDelete(100);
              message.channel.bulkDelete(100);
              message.channel.bulkDelete(100);
              message.channel.bulkDelete(100);
                message.channel.send("Deleted whole channel");
                message.channel.bulkDelete(1)
                console.log((`${message.author.tag}`) + colors.red(' deleted ') + ('whole channel') )
          } catch (e) {
            return message.channel.send("Something went wrong check code :/")
}

        }
    })
}
