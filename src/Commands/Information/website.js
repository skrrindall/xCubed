module.exports = {
  Triggers: ['website', 'site'],
  Description: 'Check out our website (The Website is not done yet and is due for an update)',
  Category: 'information',
  Permissions: {
    User: [],
    Bot: ['SEND_MESSAGES']
  },
  Options: {
    Dev: false,
    NSFW: false,
    Cooldown: {
      Enabled: false,
      Time: 0
    },
  },
  Run: async (client, message, paramaters) => {
    message.channel.send('Here you go! http://xcubed.xyz **Note: If it says the website is unsafe, its not**')
  }
}