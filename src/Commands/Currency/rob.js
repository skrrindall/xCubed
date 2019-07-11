const { NoArguments } = require('../../Configurations/Errors')
const { RichEmbed } = require('discord.js')
module.exports = {
      Triggers: ['rob', 'steal'],
      Description: 'Steal some credits',
      Category: 'currency',
      Permissions: {
        User: [],
        Bot: ['SEND_MESSAGES']
      },
      Options: {
        Dev: false,
        NSFW: false,
      },
      Run: async (client, message, paramaters) => {
            const user = message.mentions.members.first()

            if(!user) {
                  message.channel.send(NoArguments)
                  return
            } else if(user.id === message.author.id) {
                  message.channel.send(`You cant rob yourself!`)
                  return
            } 
            const key = user.id
            client.Credits.ensure(key, {
                  Wallet: 500,
                  Bank: 0,
                  lastUsed: null,
                  SecSys: false
              })
            
            if(client.Credits.get(user.id).Wallet <= 500) {
                  message.channel.send(`This user does not have enough credits`)
            } else {
                  const amountTaken = Math.floor(Math.random() * 500)
                  const robChance = Math.random() * 1
            
            if(client.Credits.get(key).SecSys === true) {
                  message.channel.send(`This user has a **Security System** and you were caught!`)
            } else if(robChance > .5) {
                  const robbed = new RichEmbed() 
                  .setTitle(`Success!`)
                  .setColor('RED')
                  .setDescription(`You took **${amountTaken}** credits from <@${user.id}>`)
                  message.channel.send(robbed)
                  client.Credits.set(user.id, {Bank: client.Credits.get(user.id).Bank, Wallet: client.Credits.get(user.id).Wallet - amountTaken, lastUsed: client.Credits.get(user.id).lastUsed,
                        SecSys: client.Credits.get(user.id).SecSys})
                  client.Credits.set(message.author.id, {Bank: client.Credits.get(user.id).Bank, Wallet: client.Credits.get(message.author.id).Wallet + amountTaken, lastUsed: client.Credits.get(user.id).lastUsed,
                        SecSys: client.Credits.get(user.id).SecSys})
            } else if(robChance < .5) {
                  const notRobbed = new RichEmbed()
                  .setTitle(`You got caught and escaped with nothing!`)
                  .setColor('RED')
                  message.channel.send(notRobbed)
            }
      }
      }
    }