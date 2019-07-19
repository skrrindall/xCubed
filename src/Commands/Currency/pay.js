const { NoArguments } = require('../../Configurations/Errors')
const { RichEmbed } = require('discord.js')
module.exports = {
      Triggers: ['pay', 'givemoney'],
      Description: 'Pay someone',
      Category: 'currency',
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
            const user = message.mentions.members.first()
            const amount = parseInt(paramaters[1])
            if(!user) {
                  message.channel.send(NoArguments)
                  return
            } else if(!amount) {
                  message.channel.send(NoArguments)
                  return
            } if(isNaN(amount) === true) {
              message.channel.send('Please use a number')    
              return
            } else if(client.Credits.get(message.author.id).balance - amount < 0) {
                  message.channel.send(`You do not have enough money to do that!`)
                  return
            } else if(amount < 100) {
                  message.channel.send(`Please send more than 100 credits`)
                  return
            } else if(user.id === message.author.id) {
                  message.channel.send(`You cannot pay yourself!`)
                  return
            } else if(user.id === '554686340248371209') {
                  message.channel.send(`You cannot pay me!`)
                  return
            }
            
            
            else {
                  client.Credits.ensure(user.id, {
                        Wallet: 500,
                        Bank: 0,
                        lastUsed: null,
                        SecSys: false
                  })
            
                  const payment = new RichEmbed()
                  .setColor('RED')
                  .setTitle('Payment Successful!')
                  .addField('User', `**${user.user.tag}**`, true)
                  .addField('Amount', `**${amount}**`, true)
                  message.channel.send(payment)
                  client.Credits.set(user.id, {Bank: client.Credits.get(user.id).Bank, Wallet: client.Credits.get(user.id).Wallet + Math.floor(amount), lastUsed: client.Credits.get(user.id).lastUsed, SecSys: client.Credits.get(user.id).SecSys})
                  client.Credits.set(message.author.id, {Bank: client.Credits.get(message.author.id).Bank, Wallet: client.Credits.get(message.author.id).Wallet - amount, lastUsed: client.Credits.get(message.author.id).lastUsed, SecSys: client.Credits.get(message.author.id).SecSys})
            }
      
      }
    }