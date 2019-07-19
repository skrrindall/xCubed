const { RichEmbed } = require('discord.js')
module.exports = {
      Triggers: ['roleinfo'],
      Description: 'View a role\'s information',
      Category: 'information',
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
            if(!paramaters[0]) return message.channel.send(errors.MissingArgs)
            const role =  message.guild.roles.find(f => f.name.toLowerCase() === paramaters[0].toLowerCase()) || message.mentions.roles.first()
            
           
      try {
            const embed = new RichEmbed()
            .setColor(role.color)
            .setAuthor(role.name, message.guild.iconURL)
            .addField("User Count!", `${role.members.size} users!`, true)
            .addField("Created On", `${role.createdAt.toLocaleString().split(', ')[0]}`, true)
            .addField('Role ID', role.id, false)
            message.channel.send({
                  embed
            });
      
      } catch(err) {
            message.channel.send(`I cannot find that role!`)
      }
      }
    }