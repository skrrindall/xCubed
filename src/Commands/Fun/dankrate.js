const { RichEmbed } = require('discord.js')
module.exports = {
    Triggers: ['dankrate', 'dankness', 'dank', 'howdank'],
    Description: 'Just how dank are you?',
    Category: 'fun',
    Permissions: {
      User: [],
      Bot: ['SEND_MESSAGES']
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
        client.DankRate.ensure(message.author.id, Math.floor(Math.random() * 100))
        const DankRate = new RichEmbed()
        .setTitle('You are...')
        .setDescription(`${client.DankRate.get(message.author.id)}% dank!`)
        .setColor('RED')
        message.channel.send(DankRate)
    }
  }