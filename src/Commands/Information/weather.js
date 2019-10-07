const {
      RichEmbed
} = require('discord.js')
const {
      NoArguments
} = require('../../Configurations/Errors')
const weather = require('weather-js')
module.exports = {
      Triggers: ['weather'],
      Description: 'Check the weather',
      Category: 'information',
      Usage: '{c} [location] [-c|-f]',
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
            const location = paramaters.join(" ")
            var type = 'F'
            if (!location) {
                  return message.channel.send(NoArguments)
            } else if (location.toLowerCase().includes('-c')) {
                  type = 'C'
                  location.split(" ").slice("-c").join(" ")
            } else if (location.toLowerCase().includes('-f')) {
                  type = 'F'
            }
            weather.find({
                  search: location,
                  degreeType: type
            }, function (err, result) {
                  if (err) {
                        return message.channel.send('I could not find any data.')
                  }
                  try {
                        const weatherEmbed = new RichEmbed
                        weatherEmbed.setColor('RED')
                        weatherEmbed.setTitle(`Weather For: ${result[0].location.name}`)
                        weatherEmbed.addField('Temperature', `${result[0].current.temperature} ${type} (Feels Like ${result[0].current.feelslike} ${type})`, true)
                        weatherEmbed.addField('Forecast', `${result[0].current.skytext}`, true)
                        weatherEmbed.addField('Wind', `${result[0].current.winddisplay}`, true)
                        weatherEmbed.addField('Humidity', `${result[0].current.humidity}%`, true)
                        weatherEmbed.setFooter(`Date: ${result[0].current.date}`)
                        weatherEmbed.setThumbnail(result[0].current.imageUrl)
                        message.channel.send(weatherEmbed)
                  } catch (err) {
                        message.channel.send('I could not find any data.')
                  }


            })
      }
}
