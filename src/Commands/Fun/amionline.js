module.exports = {
    Triggers: ['amionline', 'isthebotonline', 'isxcubedonline', 'onlinecheck'],
    Description: 'Am i online or nah',
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
        message.channel.send('Yes')
    }
  }
