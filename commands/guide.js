const Discord = require("discord.js");

module.exports = {
  name: "guide",
  description: "remove invites",
  run: async (client, message, args) => {
      let embed = new Discord.MessageEmbed()
       
      .setTitle('**Nixo Guide**')
      .addField("᲼᲼᲼᲼᲼᲼", "╔═══════════════╗")
      .addField("1)", "Get a dev team up to 10 members")
      .addField("2)", "Apply for a clan role, in 💡・request-clan-roles")
      .addField("3)", "Then we will announce an event to code something")
      .addField("4)", "The clan that makes the best code, will get a prize")
      .addField("Prize List", "Nitro, Nitro Boost, 10$ PayPal, 10$ Amazon, amd more")
      .addField("᲼᲼᲼᲼᲼᲼", "╚═══════════════╝")
      .setColor("RANDOM")
      .setTimestamp()
      .setImage("https://media.discordapp.net/attachments/775812138122870794/777286552875040848/image0.gif?width=633&height=475")



    message.channel.send(embed)

}

}


