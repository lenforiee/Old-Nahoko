require('events').EventEmitter.prototype._maxListeners = 100;
var colors = require('colors/safe');

const config = require("./config.json");
const Discord = require("discord.js");
const client = new Discord.Client();
const token = config.bot.token;

client.login(token);
global.naughtyWords = config.blacklisted_words;


client.on('ready', () => {
    console.log((`${client.user.tag}`) + colors.green(' started ') + ('bonking everyone on server!'));
    client.user.setPresence({
        status: 'online',
        game: {
            name: config.bot.game
        }
     });
});
client.on("message", async message => {
  let args = message.content.slice(config.bot.prefix).trim().split(" ");
});




// Admin Stuff
require("./handlers/noBadWordsCheck")(client)
require("./cmd/addWordsToBadWordList")(client)
require("./cmd/removeWordsFromBadWordList")(client)
require("./cmd/ban")(client)
require("./cmd/bulkChannel")(client)
// User Stuff
require("./cmd/getUserRecentScore")(client)
require("./cmd/getUserRecentScoreRelax")(client)
require("./cmd/getUserTopScore")(client)
require("./cmd/getUserTopScoreRelax")(client)
require("./cmd/getUserStatsStdOnly")(client)
require("./cmd/getUserStatsRelaxStdOnly")(client)
require("./cmd/getPPInfo")(client)
require("./cmd/getPPInfoRelax")(client)
require("./cmd/donor")(client)
require("./cmd/verify")(client)
require("./cmd/topScoreRX")(client)
require("./cmd/topScore")(client)
// Player Reporting
require("./cmd/reportPlayer")(client)
require("./handlers/playerReportingListener")(client)
//Fun commands stuff :3
require("./cmd/showAvatar")(client)
require("./cmd/gretAndRank")(client)
require("./cmd/bonkSomeone")(client)
//Embed Stuff
require("./cmd/rankMap")(client)
require("./cmd/verifyEmbed")(client)
require("./cmd/nameChangeEmbed")(client)
