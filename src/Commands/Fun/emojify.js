const makeBoxLetter = require('../../Util/Functions/makeBoxLetters')
module.exports = {
  Triggers: ['emojify', 'fancytext'],
  Description: 'Write in emojis',
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
      Time: 15000
    },
  },
  Run: async (client, message, paramaters) => {
    message.channel.send(makeBoxLetter(paramaters.join(" ")))
  }
}