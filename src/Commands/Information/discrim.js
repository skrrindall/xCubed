const {
  RichEmbed
} = require('discord.js')
module.exports = {
  Triggers: ['discrim', 'discrims', 'discriminator'],
  Description: 'View others with your discriminator',
  Category: 'information',
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
    const discrimInput = paramaters[0] || message.author.discriminator
    const discrims = message.guild.members.filter(f => f.user.discriminator === discrimInput).first(10)
    const embed = new RichEmbed().setTitle(`Here are the users with the discriminator **${discrimInput}**`).setColor('RED').setDescription(discrims.map(f => f.user.tag).join('\n')).setFooter(`Showing the first 10 users. ${message.guild.members.filter(f => f.user.discriminator === discrimInput).size} total users with that discriminator`)
    message.channel.send(embed)
  }
}