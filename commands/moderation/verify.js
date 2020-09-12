const discord = require("discord.js");
module.exports = {
  name: "verify",
  aliases: [""],
  description: "Verification system",
  run: async (client, message, args) => {
    let code = randomInteger(100000, 1000000);
    message.delete({ timeout: 2000 });
    let channel = message.guild.channels.cache.find(ch => ch.name === "verify");
    if (!channel)
      return message.channel.send("Couldnt find channel called verify");
    //Searching for a channel called "verify" and if it doesnt find it it will stop everything

    let embed = new discord.MessageEmbed()
      .setColor("RED")
      .setDescription(
        "This command can only be ran in a channel called verify"
      );
    if (message.channel !== channel) return message.channel.send(embed);
    //If theyre in the wrong channel it will tell them where they have to run it

    message.channel
      .send("Check your DMs")
      .then(m => m.delete({ timeout: 3000 }));

    const embeb2 = new discord.MessageEmbed()
      .setColor("RANDOM")
      .setTitle("Verification Captcha")
      .setDescription(
        `Please type in my DM this code: ${code} to get access to the server`
      )
      .setFooter("3 Minutes until prompt end");
    let filter = m => m.author === message.author;
    let options = { max: 1, time: 180000, errors: ["time"] };

    message.author.send(embeb2).then(dmChannel => {
      //I forgot something
      dmChannel.channel.awaitMessages(filter, options).then(collected => {
        if ((collected.content = code)) {
          let role =
            message.guild.roles.cache.find(rl => rl.name === "Member") ||
            (rl => rl.name === "User") ||
            (rl => rl.name === "Verified");
          if (!role)
            return message.author.send("Couldnt find role called User");

          let user = message.member;
          user.roles.add(role);
          const embed = new discord.MessageEmbed()
            .setColor("GREEN")
            .setDescription("Verification Successful");
          return message.author.send(embed); //Forgot to return that
        }

        if (collected.code != code) {
          const embed = new discord.MessageEmbed()
            .setColor("RED")
            .setDescription("Verification Unsuccessful")
            .setFooter("Please try again");
          return message.author.send(embed);
        }
      });
    });
    function randomInteger(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  }
};
