const {
  RichEmbed
} = require('discord.js')
const {
  owner
} = require('../../Configurations/Config.json')
const firstUpper = require('../../Util/Functions/firstUpper')
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
        Embed.addField('🎛 Developer', `\`${client.commands.filter(f => f.Options.Dev === true).map(f => f.Triggers[0]).sort().join('\`, \`')}\``)
      }
      if (message.member.hasPermission('ADMINISTRATOR')) {
        Embed.addField('⚙ Settings', `\`${client.commands.filter(f => f.Category.toLowerCase() === 'settings').map(f => f.Triggers[0]).sort().join('\`, \`')}\``)
      }
      if (message.member.hasPermission('KICK_MEMBERS')) {
        Embed.addField('🛠 Moderation', `\`${client.commands.filter(f => f.Category.toLowerCase() === 'moderation').map(f => f.Triggers[0]).sort().join('\`, \`')}\``)
      }
      Embed.addField('📕 Information', `\`${client.commands.filter(f => f.Category.toLowerCase() === 'information').map(f => f.Triggers[0]).sort().join('\`, \`')}\``)
      Embed.addField('😂 Fun', `\`${client.commands.filter(f => f.Category.toLowerCase() === 'fun').map(f => f.Triggers[0]).sort().join('\`, \`')}\``)
      Embed.addField('📸 Images', `\`${client.commands.filter(f => f.Category.toLowerCase() === 'images').map(f => f.Triggers[0]).sort().join('\`, \`')}\``)
      Embed.addField('🎚 Level', `\`${client.commands.filter(f => f.Category.toLowerCase() === 'levels').map(f => f.Triggers[0]).sort().join('\`, \`')}\``)
      Embed.addField('💰 Currency', `\`${client.commands.filter(f => f.Category.toLowerCase() === 'currency').map(f => f.Triggers[0]).sort().join('\`, \`')}\``)
      if (message.channel.nsfw) {
        Embed.addField('🔞 NSFW', `\`${client.commands.filter(f => f.Category.toLowerCase() === 'nsfw').map(f => f.Triggers[0]).sort().join('\`, \`')}\``)
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
      .setTitle(firstUpper(paramaters[0].toLowerCase()))
        .setColor('#36393f')
        .addField('Description', cmd.Description.length === 0 ? 'None' : cmd.Description)
        .addField('All triggers', `\`${cmd.Triggers.sort().join(", ")}\``)
        .addField('Usage', `${cmd.Usage.toString.replace('{c}', paramaters[0].toLowerCase() || 'None given'}`)  
      .setFooter(`${message.guild.name}'s prefix: ${client.Prefix.get(message.guild.id).prefix} || ${firstUpper(cmd.Category)}`)
      message.channel.send(Embed)
    } else if (paramaters[0] === 'all') {
      const Embed = new RichEmbed()
        .setTitle('All commands!')
        .setDescription(`\`${client.commands.filter(f => f.Options.Dev === false).map(f => f.Triggers[0]).join("\`, \`")}\``)
        .setFooter(`${client.commands.size} Commands`)
        .setColor('#36393f')
      message.channel.send(Embed)
    } else {
      message.channel.send('I cannot find that command!')
    }
  }
}
