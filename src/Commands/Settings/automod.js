const { RichEmbed } = require('discord.js')
module.exports = {
      Triggers: ['automod'],
      Description: 'Change the settings for automod or disable/enable it',
      Category: 'settings',
      Permissions: {
        User: ['ADMINISTRATOR'],
        Bot: ['SEND_MESSAGES']
      },
      Options: {
        Dev: false,
        NSFW: false,
      },
      Run: async (client, message, paramaters) => {
        const Embed = new RichEmbed()
        if(paramaters.length === 0) {
          Embed.setTitle('AutoMod Settings!')
          .addField('Invite Links', client.AutoMod.get(message.guild.id).inviteLinks, true)
          //.addField('Spam', client.AutoMod.get(message.guild.id).spam, true)
          .addField('Enabled?', client.AutoMod.get(message.guild.id).enabled, true)
          .setColor('RED')
          message.channel.send(Embed)
        } else if(paramaters[0] === 'links' || paramaters[0] === 'inviteLinks') {
          const tf = paramaters[1]
          if(tf.toLowerCase() === 'false') {
            client.AutoMod.set(message.guild.id, {enabled: client.AutoMod.get(message.guild.id).enabled, inviteLinks: false, spam: client.AutoMod.get(message.guild.id).spam})
            message.channel.send('Invite link AutoMod is now disabled')
          } else if(tf.toLowerCase() === 'true') {
            client.AutoMod.set(message.guild.id, {enabled: client.AutoMod.get(message.guild.id).enabled, inviteLinks: truek, spam: client.AutoMod.get(message.guild.id).spam})
            message.channel.send('Invite link AutoMod is now enabled')
          }
        }
      }
    }