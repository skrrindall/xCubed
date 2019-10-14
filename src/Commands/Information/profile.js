const { RichEmbed } = require('discord.js')
module.exports = {
    Triggers: ['profile'],
    Description: 'See a users profile information',
    Category: 'information',
    Usage: '{c} [user]',
    Permissions: {
      User: [],
      Bot: ['EMBED_LINKS', 'SEND_MESSAGES']
    },
    Options: {
      Dev: false,
      NSFW: false,
      Cooldown: {
        Enabled: true,
        Time: 0
      },
    },
    Run: async (client, message, paramaters) => {
        const user = message.mentions.members.first() || message.member;
        const Embed = new RichEmbed()
        .setColor('RED')
        .setTitle(`${user.user.tag}'s Profile!`)
        .addField('💰 Wallet', client.Credits.get(user.id).Wallet)
        .addField('🏦 Bank', client.Credits.get(user.id).Bank)
        if(client.PP.has(user.id)) {
        Embed.addField('PP', `${client.PP.get(user.id).size} inches`)
        }
         if(client.HowGay.has(user.id)) {
        Embed.addField('Gayness', `${client.HowGay.get(user.id)}%`)
        }
                 if(client.DankRate.has(user.id)) {
        Embed.addField('👌 Dankness', `${client.DankRate.get(user.id)}%`)
        } 
        message.channel.send(Embed)
    }
    }
