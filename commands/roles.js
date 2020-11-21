const Discord = require("discord.js");

module.exports = {
  name: "roles",
  description: "remove invites",
  run: async (client, message, args) => {
      let embed = new Discord.MessageEmbed()
       
      .setTitle('**Nixo Guide**')
      .addField("᲼᲼᲼᲼᲼᲼", "╔═══════════════╗")
      .addField("Founder", "Owns The Server")
      .addField("Manager", "Manages staff members & events")
      .addField("Event-Manager", "Manages events & moderation")
      .addField("Admin", "Helps out and hosts small events")
      .addField("᲼᲼᲼᲼᲼᲼", "╚═══════════════╝")
      .setColor("RANDOM")
      .setTimestamp()
      .setImage("https://media.discordapp.net/attachments/775812138122870794/777286552875040848/image0.gif?width=633&height=475")



    message.channel.send(embed)

}

}