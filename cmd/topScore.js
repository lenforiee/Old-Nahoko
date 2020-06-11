const Discord = require('discord.js');
const randomcolor_1 = require("randomcolor");
const { query } = require("../handlers/DatabaseHandler");
const config = require("../config.json")

module.exports = function (client) {
    client.on("message", async message => {
        if (message.content.startsWith(config.bot.prefix + "tops v")) {

            try {
                var recentScore = await query("SELECT * FROM scores INNER JOIN users ON scores.userid = users.id WHERE privileges > 2 ORDER BY pp DESC;")
                var mapid = await query("SELECT * FROM beatmaps WHERE beatmap_md5 = ?", recentScore[0].beatmap_md5)
                let color = randomcolor_1.randomColor();
                let hex = parseInt(color.replace(/^#/, ''), 16);

                const embed = new Discord.RichEmbed()
                    .setTitle("Server top vanilla play set by " + recentScore[0].username)
                    .setURL("https://misumi.me/u/" + recentScore[0].userid)
                    .setColor(hex)
                    .setDescription(mapid[0].song_name)
                    .setImage("https://assets.ppy.sh/beatmaps/" + mapid[0].beatmapset_id + "/covers/cover.jpg")
                    .addField("PP:", Math.round(recentScore[0].pp * 100) / 100)
                    .addField("Score:", recentScore[0].score)
                    .addField("Accuracy:", Math.round(recentScore[0].accuracy * 100) / 100 + "%")

		                .addField("Misses:", recentScore[0].misses_count + "x")
                message.channel.send(embed);
            } catch (ex) {
                console.log(ex)
                message.channel.send("This user doesn't exist!");
            }
        }
    })
}
