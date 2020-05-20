require('events').EventEmitter.prototype._maxListeners = 100;

const config = require("./config.json");
const Discord = require("discord.js");
const client = new Discord.Client();

const token = config.bot.token;

client.login(token);
global.naughtyWords = config.blacklisted_words;


client.on('ready', () => {
    console.log(`${client.user.tag} started bonking everyone on server!`);
    client.user.setPresence({
        status: 'online',
        game: {
            name: config.bot.game
        }
     });
     client.channels.get(config.bot.staff_general).send("Nahoko started bonking everyone on server!")
});


// Check if any naughty words are in the bot.
require("./handlers/noBadWordsCheck")(client)
require("./cmd/addWordsToBadWordList")(client)
require("./cmd/removeWordsFromBadWordList")(client)
// User Stuff
require("./cmd/getUserRecentScore")(client)
require("./cmd/getUserRecentScoreRelax")(client)
require("./cmd/getUserTopScore")(client)
require("./cmd/getUserTopScoreRelax")(client)
require("./cmd/getUserStatsStdOnly")(client)
require("./cmd/getUserStatsRelaxStdOnly")(client)
require("./cmd/getPPInfo")(client)
require("./cmd/getPPInfoRelax")(client)
// Player Reporting
require("./cmd/reportPlayer")(client)
require("./handlers/playerReportingListener")(client)
// Rank Map
require("./cmd/rankMap")(client)
//Fun commands stuff :3
require("./cmd/gretAndRank")(client)
require("./cmd/showAvatar")(client)
require("./cmd/bonkSomeone")(client)