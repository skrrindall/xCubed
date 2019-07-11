const {
      RichEmbed
    } = require('discord.js')
    const {
      NoArguments
    } = require('../../Configurations/Errors')
    module.exports = {
      Triggers: ['bet', 'risk'],
      Description: 'Risk some credits',
      Category: 'currency',
      Permissions: {
        User: [],
        Bot: ['EMBED_LINKS', 'SEND_MESSAGES']
      },
      Options: {
        Dev: false,
        NSFW: false,
      },
      Run: async (client, message, paramaters) => {
            client.Credits.ensure(message.author.id, {
                  Wallet: 500, Bank: 0, SecSys: false, lastUsed: null
            })


        let bet = parseInt(paramaters[0])
        if (!paramaters[0] || isNaN(paramaters[0]) || bet < 0) {
          return message.channel.send(NoArguments)
        }
        if ((client.Credits.get(message.author.id).Wallet - bet) < 0 === true) {
          return message.channel.send('You do not have enough coins for that!')
        }
        const chance = Math.floor(Math.random() * 6)
        const embed = new RichEmbed()
        if (chance % 2 === 0) {
          embed.setTitle('You win!')
          embed.setDescription(`You rolled a ${chance}`)
          embed.addField('Bet', bet, true)
          embed.setColor('RED')
          embed.addField('Won', bet * 2, true)
          message.channel.send(embed)
          client.Credits.set(message.author.id, {
            Wallet: (client.Credits.get(message.author.id).Wallet - bet) + (bet * 2),
            Bank: client.Credits.get(message.author.id).Bank,
            lastUsed: client.Credits.get(message.author.id).lastUsed,
            SecSys: client.Credits.get(message.author.id).SecSys
          })
        }
        else {
          embed.setTitle('You lost!')
          embed.setDescription(`You rolled a ${chance}`)
          embed.addField('Bet', bet, true)
          embed.setColor('RED')
          embed.addField('Lost', bet, true)
          message.channel.send(embed)
          client.Credits.set(message.author.id, {
            Wallet: client.Credits.get(message.author.id).Wallet - (bet),
            Bank: client.Credits.get(message.author.id).Bank,
            lastUsed: client.Credits.get(message.author.id).lastUsed,
            SecSys: client.Credits.get(message.author.id).SecSys
          })
        }
      }
    }