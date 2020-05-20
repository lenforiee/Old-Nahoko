const Discord = require('discord.js');
const randomcolor_1 = require("randomcolor");
const { query } = require("../handlers/DatabaseHandler");
const config = require("../config.json")

module.exports = function (client) {
    client.on("message", async message => {
        if (message.content.startsWith(config.bot.prefix + "stats v")) {
            var msg = message.content;
            msg = msg.split(config.bot.prefix + "stats v ");
            msg = msg[1];
            try {
                var user = await query("SELECT * FROM users WHERE username = ?", msg);
                var userStats = await query("SELECT * FROM users_stats WHERE username = ?", msg);
                let color = randomcolor_1.randomColor();
                let hex = parseInt(color.replace(/^#/, ''), 16);
                const embed = new Discord.RichEmbed()
                    .setTitle("Stats For " + user[0].username)
                    .setURL("https://misumi.me/u/" + user[0].id)
                    .setColor(hex)
                    .setThumbnail("https://a.misumi.me/" + user[0].id)
                    .addField("Performance (Standard)", userStats[0].pp_std, true)
                    .addField("Average Accuracy", Math.round(userStats[0].avg_accuracy_std * 100) / 100 + "%", true)
                    .addField("Playcount", userStats[0].playcount_std, true)
                    .addField("Replays Watched", userStats[0].replays_watched_std, true)
                    .addField("Country", userStats[0].country)

                    message.channel.send(embed)
            } catch (ex) {
                message.channel.send("This user doesn't exist!");
            }
        }
    })
}
