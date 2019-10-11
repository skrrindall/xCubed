const res = ['(・`ω´・)', ';;w;;', 'owo', 'UwU', '>w<', '^w^'];
module.exports = {
    Triggers: ['owo', 'owu', 'uwu', 'uwo'],
    Description: 'OwO',
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
        message.channel.send(res[Math.floor(Math.random() * res.length)])
    }
  }
