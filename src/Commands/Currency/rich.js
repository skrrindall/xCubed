const { RichEmbed } = require('discord.js');
module.exports = {
    Triggers: ['rich', 'moneylb', 'richleaderboard', 'richest', 'richs'],
    Description: 'See whos the richest of all!',
    Category: 'currency',
    Usage: '{c}',
    Permissions: {
      User: [],
      Bot: ['EMBED_LINKS', 'SEND_MESSAGES']
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
    const filtered = client.Credits.filter( p => message.guild.members.has(p.ID)).array()
    const sort = filtered.sort((a, b) => b.Wallet - a.Wallet)
    const top5 = sort.splice(0, 5)
    console.log(top5)
        const Embed = new RichEmbed()
        .setColor('RED')
        if(top5[0]) {
        Embed.addField(`🏆 ${message.guild.members.get(top5[0].ID).user.tag}`, `${top5[0].Wallet} Credits`)
        message.channel.send(Embed)
        } else if(top5[1]) {
        Embed.addField(`${message.guild.members.get(top5[0].ID).user.tag}`, `${top5[0].Wallet} Credits`)
        message.channel.send(Embed)
        } else if(top5[2]) {
        Embed.addField(`${message.guild.members.get(top5[0].ID).user.tag}`, `${top5[0].Wallet} Credits`)
        message.channel.send(Embed)
        } else if(top5[3]) {
        Embed.addField(`${message.guild.members.get(top5[0].ID).user.tag}`, `${top5[0].Wallet} Credits`)
        message.channel.send(Embed)
        } else if(top5[4]) {
        Embed.addField(`${message.guild.members.get(top5[0].ID).user.tag}`, `${top5[0].Wallet} Credits`)
        message.channel.send(Embed)
        }
    }
  }

