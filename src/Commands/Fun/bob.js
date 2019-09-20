
module.exports = {
  Triggers: ['bob'],
  Description: 'marley',
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
message.channel.send('marley');
  }
}