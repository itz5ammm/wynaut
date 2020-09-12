const Discord = require("discord.js");
const db = require("quick.db");

module.exports = {
  name: "store",
  category: "Economy",
  aliases: ["st"],
  execute: async (client, message, args) => {
    let embed = new Discord.MessageEmbed()
      .setDescription(
        "**VIP Ranks**\n\n`Bronze:` 3500 Coins [+buy bronze]\n\n**Lifestyle Items**\n\n`Fresh Nikes:` 600\n`Car:` 800\n`Mansion:` 1200"
      )
      .setColor("#FFFFFF");
    message.channel.send(embed);
  }
};
