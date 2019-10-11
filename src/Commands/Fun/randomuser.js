
module.exports = {
    Triggers: ['randomuser', 'randommember', 'rando'],
    Description: 'Select a random user from the server',
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
      const res = [`You are the chosen one ${message.guild.members.random().tag}!`, `I choose ${message.guild.members.random().tag}.`]
      message.channel.send(res[Math.floor(Math.random() * res.length)])
    }
  }
