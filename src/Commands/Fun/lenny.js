const Lennys = ['( ͡° ͜ʖ ͡°)', '(☭ ͜ʖ ☭)', '(ᴗ ͜ʖ ᴗ)', '( ° ͜ʖ °)', '(⟃ ͜ʖ ⟄) ', '(͠≖ ͜ʖ͠≖)', '( ͡° ل͜ ͡°)', '( ͡o ͜ʖ ͡o)', '( ͡☉ ͜ʖ ͡☉)']
module.exports = {
  Triggers: ['lenny'],
  Description: '( ͡ʘ ͜ʖ ͡ʘ)',
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
    message.delete()
    message.channel.send(Lennys[Math.floor(Math.random() * Lennys.length)])
  }
}
