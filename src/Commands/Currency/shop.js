const { RichEmbed } = require('discord.js')
module.exports = {
      Triggers: ['shop'],
      Description: 'Buy something from the shop',
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
            const key = message.author.id
      client.Credits.ensure(key, {
            balance: 500,
            lastUsed: null,
            SecSys: false
        })

if(!paramaters[0]) {
      const Shop = new RichEmbed()
      .setColor('RED')
      .setTitle('Shop!')
      .addField(`Security System - 10,000`, 'Never get robbed again! __Run **>shop Security** to buy__')
      message.channel.send(Shop)
} else if(paramaters[0].toLowerCase() === "security") {
      if(client.Credits.get(key).SecSys === true) {
            message.channel.send(`You already have a **Security System**`)
      } else if(client.Credits.get(key).Wallet < 10000) {
            message.channel.send(`You do not have enough money to buy this!`)
      } else if(client.Credits.get(key).SecSys === true) {
            message.channel.send(`You already have this item!`)
      } else {
            client.Credits.set(key, {Wallet: client.Credits.get(key).Wallet, Bank: client.Credits.get(key).Bank, lastUsed: client.Credits.get(key).lastUsed, SecSys: true})
            message.channel.send(`You bought the **Security System**`)
      }  
} else {
      message.channel.send('Invalid option, try using `>shop` to view the list of items.')
}
      }
    }