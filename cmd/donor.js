const Discord = require('discord.js');
const randomcolor_1 = require("randomcolor");
const { query } = require("../handlers/DatabaseHandler");
const config = require("../config.json");
var colors = require('colors/safe');
const ms = require('ms')
const timestamp = require('unix-timestamp')

module.exports = function (client) {
    client.on("message", async message => {
        if (message.content.startsWith(config.bot.prefix + "grant donor")) {
          var msg = message.content;
          msg = msg.split(config.bot.prefix + "grant donor ");
          msg = msg[1];
          message.delete();

                let user = await query("SELECT * FROM users WHERE username = ?", msg);
                let privileges = await query("SELECT * FROM users WHERE privileges = ?", user[0].username);
                let donor = await query("SELECT * FROM privileges_groups WHERE privileges = 7");
                let admin = await query("SELECT * FROM privileges_groups WHERE privileges = 1048575");
                let owner = await query("SELECT * FROM privileges_groups WHERE privileges = 418381823");
                let dev = await query("SELECT * FROM privileges_groups WHERE privileges = 405794811");
                const timestam = await query("SELECT * FROM users WHERE donor_expire = ?", user[0].username);
                let actuall_date = timestamp.toDate(timestam);


                if(!privileges > donor) return message.reply("sorry you didn't buy donor")

                if(privileges = donor)
                if(privileges = admin)
                if(privileges = owner)
                if(privileges = dev)
                 {
                  let role = message.guild.roles.find(r => r.name === "Donators");
                  let {member} = message;
                  member.addRole(role)
                  message.reply(`successfully granted donor role!`)
                    console.log((`${message.author.tag}`) + colors.yellow(' claimed donor ') + ('role'))
                }


        }
    })
}
