module.exports = {
    Triggers: ['givecredits', 'spawncoins', 'helpthepoor'],
    Description: 'Give X amount of credits to someone',
    Category: 'developer',
    Permissions: {
      User: [],
      Bot: ['SEND_MESSAGES']
    },
    Options: {
      Dev: true,
      NSFW: false,
      Cooldown: {
        Enabled: true,
        Time: 0
      },
    },
    Run: async (client, message, paramaters) => {
        const user = message.mentions.members.first()
        const amount = paramaters[1]
        client.Credits.ensure(user.id, {
            Wallet: 500,
            lastUsed: null,
            Bank: 0,
            SecSys: false
      }) 
      if(isNaN(paramaters[1])) {
          return message.channel.send('I could not add that amount to the users balance')
      } else if(!user) {
        return message.channel.send('Please specify a user!')
      }
      client.Credits.set(user.id, {
        Wallet: client.Credits.get(user.id).Wallet + parseInt(amount),
        lastUsed: client.Credits.get(user.id).lastUsed,
        Bank: client.Credits.get(user.id).Bank,
        SecSys: client.Credits.get(user.id).SecSys
  }) 
      message.channel.send(`${parseInt(paramaters[1])} credits has been added to ${user.user.tag}'s account`)

    }
  }