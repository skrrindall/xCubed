const request = require('node-superfetch')
const { RichEmbed } = require('discord.js')
module.exports = {
    Triggers: ['dog', 'doge', 'doggo', 'showmethedogs', 'randomdog'],
    Description: 'View some cute doggys',
    Category: 'images',
    Permissions: {
      User: [],
      Bot: ['ATTACH_FILES', 'EMBED_LINKS', 'SEND_MESSAGES']
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
        const { body } = await request.get('https://dog.ceo/api/breeds/image/random')
        const Embed = new RichEmbed()
        .setColor('RED')
        .setTitle('Here is your random dog!')
        .setImage(body.message)
        message.channel.send(Embed)
    }
  }