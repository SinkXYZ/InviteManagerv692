/* eslint-disable no-var */
/* eslint-disable no-redeclare */
const money = require('../money.json');
const discord = require('discord.js');
const fs = require('fs');

module.exports = {
    name: 'delmoney',
    description: 'deletes money to a users account',
   run: async (client, message, args, color, emoji) => {
        if (!message.member.hasPermission('ADMINISTRATOR')) return message.reply('you cannot remove money from a users account!');
        if (!args[0]) {
            var user = message.author;
        } else {
            var user = message.mentions.members.first();
        }
        if (isNaN(args[1])) return message.reply('amount must be an integer!');
        if (money[user.id]) {
            money[user.id] = {
                amount: parseInt(money[user.id].amount) - parseInt(args[1])
            };
            fs.writeFile('./money.json', JSON.stringify(money), (err) => {
                if (err) console.log(err);
            });
        } else {
            return message.channel.send(`@<${user.id}> does not have an account, they need to run c/bal to get one.`);
        }
        const embed = new discord.MessageEmbed()
            .setColor("#FF1493")
            .setTitle('**Balance**')
            .setDescription(`${args[1]} successfully removed from ${user}'s account ${emoji}`)
            .addField('**User**', user)
            .addField('**Amount**', money[user.id].amount)
            .setFooter(message.author.tag, message.author.displayAvatarURL({
                dynamic: true,
                format: 'png'
            }))
            .setTimestamp();
        return message.channel.send(embed);
    }
};