const {
  RichEmbed
} = require('discord.js')
module.exports = {
  Triggers: ['copypasta'],
  Description: 'Check out some cool copypasta',
  Category: 'fun',
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
    const req = require('superagent')
    req.get('https://www.reddit.com/r/copypasta/top/.json?sort=top&t=week&limit=500').query({
      limit: 75
    }).set('User-Agent', 'showerthoughts-cli').end((err, res) => {
      if (!err && res.ok) {
        var random = Math.floor(Math.random() * (75 - 2 + 1) + 1)
        var data = res.body.data.children[random].data
        console.log(data)
        const embed = new RichEmbed()
          .setDescription(data.selftext)
          .setURL(`http://reddit.com${data.permalink}`)
          .setFooter(`${data.ups} ⬆ \|| ${data.downs} ⬇`)
          .setColor('RED')
        message.channel.send(embed)
      }
    })
  }
}
