const moment = require('moment')
require('moment-duration-format')
const { RichEmbed } = require('discord.js')
module.exports = {
      Triggers: ['status', 'stats', 'uptime'],
      Description: 'Check the bots status',
      Category: 'information',
      Permissions: {
        User: [],
        Bot: ['SEND_MESSAGES', 'EMBED_LINKS']
      },
      Options: {
        Dev: false,
        NSFW: false,
      },
      Run: async (client, message, paramaters) => {

            const duration = moment.duration(client.uptime).format(" D [days], H [hrs], m [mins], s [secs]");

	const embed = new RichEmbed()
	.setColor('RED')
	.setTitle(`Bot's status!`)
	.addField("Mem Usage", `**${ (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB**`, true)
	.addField("Commands Used", `**${client.commandsUsed}**`, true)
	.addField("Uptime", `**${duration}**`, true)
	.addField("Users", `**${client.users.size - 1}**`, true)
	.addField(`Servers`, `**${client.guilds.size.toLocaleString()}**`, true)
	.addField(`Channels`, `**${client.channels.size.toLocaleString()}**`, true)
      message.channel.send(embed);
      }
    }