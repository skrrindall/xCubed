const {
  RichEmbed
} = require('discord.js')
const {
  owner
} = require('../../Configurations/Config.json')
const GetCommands = require('../../Util/Functions/GetCommands')
module.exports = {
  Triggers: ['help', '?', 'h'],
  Description: 'View some of the bots commands!',
  Category: 'information',
  Permissions: {
    User: [],
    Bot: ['EMBED_LINKS', 'SEND_MESSAGES']
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


    if (paramaters.length === 0) {
      const Embed = new RichEmbed()
        .setTitle('Help!')
        .setFooter(`${message.guild.name}'s Prefix is ${client.Prefix.get(message.guild.id).prefix}`)
        .setColor('#36393f')
      if (owner.includes(message.author.id)) {
        Embed.addField('Developer', `\`${client.commands.filter(f => f.Options.Dev === true).map(f => f.Triggers[0]).join('\`, \`')}\``)
      }
      if (message.member.hasPermission('ADMINISTRATOR')) {
        Embed.addField('Settings', `\`${client.commands.filter(f => f.Category === 'settings').map(f => f.Triggers[0]).join('\`, \`')}\``)
      }
      if (message.member.hasPermission('KICK_MEMBERS')) {
        Embed.addField('Moderation', `\`${client.commands.filter(f => f.Category === 'moderation').map(f => f.Triggers[0]).join('\`, \`')}\``)
      }
      Embed.addField('Information', `\`${client.commands.filter(f => f.Category === 'information').map(f => f.Triggers[0]).join('\`, \`')}\``)
      Embed.addField('Fun', `\`${client.commands.filter(f => f.Category === 'fun').map(f => f.Triggers[0]).join('\`, \`')}\``)
      Embed.addField('Level', `\`${client.commands.filter(f => f.Category === 'levels').map(f => f.Triggers[0]).join('\`, \`')}\``)
      Embed.addField('Currency', `\`${client.commands.filter(f => f.Category === 'currency').map(f => f.Triggers[0]).join('\`, \`')}\``)
      if (message.channel.nsfw) {
        Embed.addField('NSFW', `\`${client.commands.filter(f => f.Category === 'nsfw').map(f => f.Triggers[0]).join('\`, \`')}\``)
      }
      message.channel.send(Embed)
    } else if (paramaters[0] === 'all' && paramaters[1] === 'triggers') {
      const Embed = new RichEmbed()
        .setTitle('All triggers!')
        .setDescription(`\`${client.commands.filter(f => f.Options.Dev === false).map(f => f.Triggers.join(' ')).join(" \`, \`")}\``)
        .setFooter(`${client.triggers.size} Triggers`)
        .setColor('#36393f')
      message.channel.send(Embed)
    } else if (client.triggers.has(paramaters[0])) {
      const cmd = client.triggers.get(paramaters[0])
      const Embed = new RichEmbed()
        .setTitle(cmd.Triggers[0])
        .setColor('#36393f')
        .addField('Description', cmd.Description)
        .addField('All triggers', `\`${cmd.Triggers.join(", ")}\``)
        .setFooter(`${message.guild.name}'s prefix: ${client.Prefix.get(message.guild.id).prefix}`)
      message.channel.send(Embed)
    } else if (paramaters[0] === 'all') {
      const Embed = new RichEmbed()
        .setTitle('All commands!')
        .setDescription(`\`${client.commands.filter(f => f.Options.Dev === false).map(f => f.Triggers[0]).join("\`, \`")}\``)
        .setFooter(`${client.commands.size} Commands`)
        .setColor('#36393f')
      message.channel.send(Embed)
    } else if (client.triggers.has(paramaters[0])) {
      const cmd = client.triggers.get(paramaters[0])
      const Embed = new RichEmbed()
        .setTitle(cmd.Triggers[0])
        .setColor('#36393f')
        .addField('Description', cmd.Description)
        .addField('All triggers', `\`${cmd.Triggers.join(", ")}\``)
        .setDes(`${message.guild.name}'s prefix: ${client.Prefix.get(message.guild.id).prefix}`)
      message.channel.send(Embed)
    } else {
      message.channel.send('I cannot find that command!')
    }
  }
}