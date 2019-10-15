const { RichEmbed } = require('discord.js')
const { checkDays } = require('../../Util/Functions/guildInfo.js')
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
    const messages = await channel.messages.fetch({ after: 1, limit: 1 });
    const message = messages.first();
       const embed = new RichEmbed()
       .setColor('RED')
       .setTitle(`Message sent by: ${message.author.tag}`)
       .setDescription(message.content)
       .setFooter(`Sent ${checkDays(message.createdTimestamp())} days ago`)
       message.channel.send(embed)
       
    }
  }
