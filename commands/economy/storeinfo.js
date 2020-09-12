const Discord = require("discord.js");
const db = require("quick.db");

module.exports = {
  name: "storeinfo",
  category: "Economy",
  descrpition: "Info The Items In Store",
  aliases: ["si"],
  execute: async (client, message, args) => {
    if (args[0] == "bronze") {
      let embed = new Discord.MessageEmbed()
        .setDescription(
          "**Bronze Rank**\n\n**`Benefits`: Chance to get more coins from robbing someone.**"
        )
        .setColor("#FFFFFF");
      message.channel.send(embed);
    } else if (args[0] == "nikes") {
      let embed2 = new Discord.MessageEmbed()
        .setDescription(
          "**Fresh Nikes**\n\n**`Benefits:` Chance to win coins, roles on our Discord Server + More by leading the leaderboard.**"
        )
        .setColor("#FFFFFF");
      message.channel.send(embed2);
    } else if (args[0] == "car") {
      let embed3 = new Discord.MessageEmbed()
        .setDescription(
          "**Car**\n\n**`Benefits:` Chance to win coins, roles on our Discord Server + More by leading the leaderboard.**"
        )
        .setColor("#FFFFFF");
      message.channel.send(embed3);
    } else if (args[0] == "mansion") {
      let embed4 = new Discord.MessageEmbed()
        .setDescription(
          "**Mansion**\n\n**`Benefits:` Chance to win coins, roles on our Discord Server + More by leading the leaderboard.**"
        )
        .setColor("#FFFFFF");
      message.channel.send(embed4);
    }
  }
};
