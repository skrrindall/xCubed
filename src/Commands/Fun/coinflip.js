const res = ['heads', 'tails']
const { RichEmbed } = require('discord.js')
module.exports = {
    Triggers: ['coinflip', 'flip'],
    Description: 'Flip a coin',
    Category: 'fun',
    Usage: '{c} [heads|tails]',
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
        if(!paramaters[0] || !paramaters[0].toLowerCase() === 'heads' || !paramaters[0] === 'tails') {
          message.channel.send('You must choose either heads or tails!');
        } else {
        const userChoice = paramaters[0].toLowerCase()
        const botChoice = res[Math.floor(Math.random() * res.length)]
        if(userChoice === botChoice) {
          const embed = new RichEmbed()
          .setTitle('You win!')
          .addField('I choose:', botChoice, true)
          .addField('You choose:', userChoice, true)
          .setColor('RED')
          message.channel.send(embed)
        } else if(!userChoice === botChoice) {
                    const embed = new RichEmbed()
          .setTitle('You lose!')
          .addField('I choose:', botChoice, true)
          .addField('You choose:', userChoice, true)
          .setColor('RED')
          message.channel.send(embed)
        }
        }
    }
  }
