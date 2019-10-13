const {
  RichEmbed
} = require('discord.js')
module.exports = {
  Triggers: ['battlestation', 'battlestations', 'bs'],
  Description: 'Check out some nice battle stations',
  Category: 'fun',
  Usage: '{c}',
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
    const req = require('superagent')
    req.get('https://www.reddit.com/r/copypasta.json').query({
      limit: 75
    }).set('User-Agent', 'showerthoughts-cli').end((err, res) => {
      if (!err && res.ok) {
        var random = Math.floor(Math.random() * (75 - 2 + 1) + 1)
        var data = res.body.data.children[random].data
        const embed = new RichEmbed()
          .setDescription(data.title)
          .setImage(data.url)
          .setURL(`http://reddit.com${data.permalink}`)
          .setFooter(`${data.ups} ⬆ \|| ${data.downs} ⬇`)
          .setColor('RED')
        message.channel.send(embed)
      }
    })
  }
}
