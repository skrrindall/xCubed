const { RichEmbed } = require('discord.js')
module.exports = {
      Triggers: ['balance', 'coins', 'credits', 'money', 'bal', 'wallet'],
      Description: 'View your balance',
      Category: 'currency',
      Permissions: {
        User: [],
        Bot: ['EMBED_LINKS', 'SEND_MESSAGES']
      },
      Options: {
        Dev: false,
        NSFW: false,
        Cooldown: {
            Enabled: false,
            Time: 0
          },
      },
      Run: async (client, message, paramaters) => {
            const user = message.mentions.members.first() || message.member
            const Balance = new RichEmbed()
            .setTitle(`${user.user.tag}'s balance!`)
            .setColor("RED")
            .addField('Wallet', client.Credits.get(message.author.id).Wallet, true)
            .addField('Bank', client.Credits.get(message.author.id).Bank, true)
            if(client.Credits.get(message.author.id).SecSys === true) {
                  Balance.setFooter('You have a security system!')
            }
            message.channel.send(Balance)
      }
    }