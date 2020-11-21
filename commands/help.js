const Discord = require("discord.js");

module.exports = {
  name: "help",
  description: "remove invites",
  run: async (client, message, args) => {
      let embed = new Discord.MessageEmbed()
       
      .setTitle('**Nixo Commands**')
      .addField("᲼᲼᲼᲼᲼᲼", "╔═══════════════╗")
      .addField('**User Commands**:\n> ```-invites```n> ```-help```', "‎")
      .addField('**Admin Commands**:\n> ```-config```\n> ```-addinvites```\n> ```-removeinvites```\n> ```-prefix```', "‎")
      .addField("Invite Me", "[Click Me](hah nope)")
      .addField("᲼᲼᲼᲼᲼᲼", "╚═══════════════╝")
      .setColor("RANDOM")
      .setTimestamp()
      .setFooter(client.user.username, client.user.displayAvatarURL());



    message.channel.send(embed)

}

}


