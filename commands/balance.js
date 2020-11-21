/* eslint-disable no-var */
/* eslint-disable no-redeclare */
/* eslint-disable prefer-const */
const discord = require('discord.js');
const fs = require('fs');
const money = require('../money.json');

module.exports = {
    name: 'balance',
    description: 'shows balance',
    aliases: ['bal'],
    run: async (client, message, args, color) => {
        if (!args[0]) {
            var user = message.author;
        } else {
            var user = message.mentions.members.first();
        }
        if (!money[user.id] || isNaN(money[user.id].amount)) {
            money[user.id] = {
                amount: 0
            };
            fs.writeFile('./money.json', JSON.stringify(money), (err) => {
                if (err) console.log(err);
            });
        }
        let embed = new discord.MessageEmbed()
            .setColor("#FF1493")
            .setTitle('**Balance**')
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