const { RichEmbed } = require('discord.js')
module.exports = {
    Triggers: ['qr', 'qrcode', 'createqr'],
    Description: 'Create a readable QR code',
    Category: 'images',
    Usage: '{c} [text]',
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
    const Embed = new RichEmbed()
    .setColor('RED')
    .setImage(`https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(args)}`)
    message.channel.send(Embed)
        
    }
  }
