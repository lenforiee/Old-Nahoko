const config = require("../config.json");
const fs = require('fs');

module.exports = function(client) {
    client.on('message', async message => {

        if (message.content.startsWith(config.bot.prefix + "unblacklist")) {
            if(!message.member.roles.has(config.bot.id_role_bot)) return message.channel.send("You don't have access to this command!") 

            try {
              var msg = message.content;
              msg = msg.split(config.bot.prefix + "unblacklist ");
              console.log(msg)
              msg = msg[1];
              global.naughtyWords = global.naughtyWords.filter(e => e !== msg);

              config.blacklisted_words = global.naughtyWords;
              fs.writeFile('config.json', JSON.stringify(config, null, 2), function(err) {
                  if (err) throw err;
              })
              return message.channel.send(`Removed ${msg} from blacklist!`)
          }catch (e) {
            return message.channel.send("Something went wrong check code :/")
          }
}
        

    })
}
