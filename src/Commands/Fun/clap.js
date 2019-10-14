const {
  NoArguments
} = require('../../Configurations/Errors')
module.exports = {
    Triggers: ['clap'],
    Description: 'Clap to your hearts content',
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
        if(!paramaters[0]) {
        message.channel.send(NoArguments)      
        } else {
       message.channel.send(paramaters.join(' 👏 '))
    }}
  }
