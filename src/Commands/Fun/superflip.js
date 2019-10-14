module.exports = {
    Triggers: ['superflip', 'sf'],
    Description: 'Unflip thy table',
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
        message.delete();
        message.channel.send('┻━┻ ︵ヽ(`Д´)ﾉ︵ ┻━┻')
    }
  }
