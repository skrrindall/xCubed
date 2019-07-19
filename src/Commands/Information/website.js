module.exports = {
      Triggers: ['website'],
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
            message.channel.send('Here you go! https://xcubed.xyz **Note: If it says the website is unsafe, its not**')
      }
    }