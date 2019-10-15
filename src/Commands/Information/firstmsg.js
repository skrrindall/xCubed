const { RichEmbed } = require('discord.js')

module.exports = {
    Triggers: ['firstmsg', 'firstmessage'],
    Description: 'See what the first message sent in the channel is',
    Category: 'info',
    Usage: '{c}',
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
    const messages = await message.channel.fetchMessages({ after: 1, limit: 1 });
    const msg = messages.first();
        const createdAtDate = msg.createdAt.toString().split('GMT')[0]
       const embed = new RichEmbed()
       .setColor('RED')
       .setTitle(`Message sent by: ${msg.author.tag}`)
       .setDescription(msg.content)
       .setFooter(`Sent on ${createdAtDate}`)
       message.channel.send(embed)
       
    }
  }
