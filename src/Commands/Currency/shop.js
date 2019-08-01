const shop = require('../../Configurations/Shop')
const { RichEmbed } = require('discord.js')
module.exports = {
    Triggers: ['shop', 'store'],
    Description: 'currency',
    Category: '',
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
        const Embed = new RichEmbed()
        .setTitle('Shop')
        .setColor('RED')
        .addField(`${shop.security.FullNames[0]} (${shop.security.Price} credits)`, `Grow that big pp by once inch \`ID: ${shop.security.ID}\``)
        .addField(`${shop.enlarge.FullNames[0]} (${shop.enlarge.Price} credits)`, `Grow that big pp by once inch \`ID: ${shop.enlarge.ID}\``)
        .setFooter(`Use \`${client.Prefix.get(message.guild.id).prefix}buy ID\` to buy something`)
        message.channel.send(Embed)
    }
  }