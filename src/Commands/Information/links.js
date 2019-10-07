const { RichEmbed } = require('discord.js')
module.exports = {
    Triggers: ['links'],
    Description: 'View all of the links related to xCubed',
    Category: 'information',
    Usage: '{c}',
    Permissions: {
      User: [],
      Bot: ['SEND_MESSAGES', 'EMBED_LINKS']
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
        const linkEmbed = new RichEmbed()
        .setTitle('Useful Links:')
        .addField('Invite', `[Click Here](https://discordapp.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=268545094)`, true)
        .addField('Support', '[Click Here](https://discord.gg/kQUpSgw)', true)
        .addField('Website', '[Click Here](https://xcubed.xyz)', true)
        .addField('Source', '[Click Here](https://xcubed.xyz/github)', true)
        .setColor('#36393f')
        message.channel.send(linkEmbed)
    }
  }
