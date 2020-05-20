const config = require("../config.json");
const randomcolor_1 = require("randomcolor");
let color = randomcolor_1.randomColor();
let hex = parseInt(color.replace(/^#/, ''), 16);

module.exports = function(client) {
    client.on('guildMemberAdd', member => {

        var role = member.guild.roles.find(role => role.name === "Member");
        member.addRole(role);
		var name_server = config.bot.server_name 

        const Embed = {
        color: (hex),
        title: (` **${name_server}** Welcome Bot!`),
        url: "https://misumi.me",
        description: (`Welcome ${member} to the **${name_server}** official discord server!`),
    
        timestamp: new Date(),
        footer: {
          icon_url: client.user.avatarURL,
          text: (`© ${name_server} 2020 - 2020`)
        } 
      }
      member.guild.channels.get('709395881790537819').send({embed: Embed});
    });

};

