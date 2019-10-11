module.exports = {
    Triggers: ['isittuesday', 'is-it-tuesday', 'tuesday'],
    Description: 'What day is it?',
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
      message.channel.send(`Today is${new Date().getDay() === 2 ? '' : ' not'} Tuesday.`);
    }
  }
