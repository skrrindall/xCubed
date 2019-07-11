const {
      owner,
      prefix
    } = require('../../Configurations/Config.json')
    module.exports = (message) => {
      if (message.author.bot) return
      const client = message.client;
      const key = message.author.id
      client.Prefix.ensure(message.guild.id, {
        prefix: prefix
      });
      client.Points.ensure(key, {
        user: message.author.id,
        points: 0,
        level: 0,
      })
      const currentLevel = Math.floor(.09 * Math.sqrt(client.Points.get(key, 'points')))
      client.Points.set(key, {
        points: client.Points.get(key).points + Math.floor(Math.random() * 8),
        level: currentLevel
      })
      if (!message.content.startsWith(client.Prefix.get(message.guild.id).prefix)) return;
      const Command = message.content.split(" ")[0].slice(client.Prefix.get(message.guild.id).prefix.length).toLowerCase();
      const Paramaters = message.content.split(" ").slice(1)
      if (client.triggers.has(Command)) {
        const CMD = client.triggers.get(Command)
        if (!CMD.Permissions.User.every(Permission => message.member.hasPermission(Permission))) {
          message.channel.send('You do not have the correct permissions to use that!')
        }
        else if (!CMD.Permissions.Bot.every(Permission => message.guild.me.hasPermission(Permission))) {
          message.channel.send('I do not have the correct permissions to do that!')
        }
        else if (CMD.Options.Dev === true && !owner.includes(message.author.id)) {
          message.channel.send('You do not have the correct permissions to use that!')
        }
        else if (CMD.Options.NSFW === true) {
          message.channel.send('You can\'t use **__NSFW__** commands outside of an NSFW channel')
        }
        else {
          client.commandsUsed++
          CMD.Run(client, message, Paramaters)
        }
      }
    }