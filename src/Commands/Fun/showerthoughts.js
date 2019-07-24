const {
  RichEmbed
} = require('discord.js')
module.exports = {
  Triggers: ['showerthoughts', 'showerthought'],
  Description: 'Find out some deep thoughts of the shower',
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
    const req = require('superagent')
    req.get('https://www.reddit.com/r/showerthoughts.json').query({
      limit: 75
    }).set('User-Agent', 'showerthoughts-cli').end((err, res) => {
      if (!err && res.ok) {
        var random = Math.floor(Math.random() * (75 - 2 + 1) + 1)
        var showerThought = res.body.data.children[random].data.title
        const embed = new RichEmbed()
          .setTitle('Here is your thought')
          .setDescription(showerThought)
          .setColor('RED')
        message.channel.send(embed)
      }
    })
  }
}