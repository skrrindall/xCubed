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
        .addField('Wallet', client.Credits.get(user.id).Wallet)
        .addField('Bank', client.Credits.get(user.id).Bank)
        if(client.PP.has(user.id)) {
        Embed.addField('PP', client.PP.get(user.id).size)
        }
        message.channel.send(Embed)
    }
    }
