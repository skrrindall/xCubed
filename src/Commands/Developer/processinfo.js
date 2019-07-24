const {
  RichEmbed
} = require('discord.js')
const {
  version
} = require('../../../package')
module.exports = {
  Triggers: ['processinfo', 'process', 'processinformation', 'pi'],
  Description: 'View the process information',
  Category: 'developer',
  Permissions: {
    User: [],
    Bot: ['SEND_MESSAGES']
  },
  Options: {
    Dev: true,
    NSFW: false,
    Cooldown: {
      Enabled: false,
      Time: 0
    },
  },
  Run: async (client, message, paramaters) => {
    const Stats = new RichEmbed()
      .setTitle('Process Information')
      .setColor('#36393f')
      .addField('Home Dir (CWD)', process.cwd(), true)
      .addField('Node Version', process.version, true)
      .addField('Platform', `${process.platform} (${process.arch})`, true)
      .setFooter(`Package Version: ${version}`)
    message.channel.send(Stats)

  }
}