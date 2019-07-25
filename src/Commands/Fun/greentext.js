const {
    NoArguments
  } = require('../../Configurations/Errors')
module.exports = {
    Triggers: ['greentext', 'gt', 'green'],
    Description: 'Make your text green',
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
        if(!paramaters[0]) {
            message.channel.send(NoArguments)
        } else {
        message.channel.send(`\`\`\`css\n${message.cleanContent.split(" ").slice(1).join(" ")}\`\`\``)
    }}
  }