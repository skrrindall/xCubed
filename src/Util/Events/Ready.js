const req = require('node-superfetch')
const Write = require('../Functions/Write')
const {
      readdir
} = require('fs')
const {
      LogCommandsOnStart,
      LogCount
} = require('../../Configurations/StartLog')
const {
      DBLToken
} = require('../../Configurations/Config')
const Folders = ['Fun', 'Information', 'Moderation', 'Developer', 'Levels', 'NSFW', 'Settings', 'Currency']
module.exports = async (client) => {
      client.user.setActivity('I\'m online!')
      setTimeout(() => {
            client.user.setActivity(`x!help || ${client.users.size} Users!`)
      }, 500)
      var i = 0
      Folders.forEach(Folder => {
            readdir(`./src/Commands/${Folder}`, (err, files) => {
                  files.forEach(file => {

                        const Command = require(`../../Commands/${Folder}/${file}`)
                        if (i < LogCount && LogCommandsOnStart) {
                              Write(`Loaded Command: ${Command.Triggers[0]}`, 3)
                              i++
                        }

                        client.commands.set(Command.Triggers[0], Command)
                        Command.Triggers.forEach(Trigger => {
                              client.triggers.set(Trigger, Command)
                        })
                  })
            })
      })
      setTimeout(() => {
            Write('Updating status...', 0)
      }, 500)

      try {
            
            await req
            .post(`https://discordbotlist.com/api/bots/${client.user.id}/stats`)
            .set('Authorization', `Bot ${DBLToken}`)
            .send({
                  shard_id: 0,
                  guilds: client.guilds.size,
                  users: client.users.size,
                  voice_connections: client.voice.connections.size
            })
            Write('Status updated!', 0)
      } catch(e) {
            console.error(e)
      }
      Write('I\'m online!', 0)

}