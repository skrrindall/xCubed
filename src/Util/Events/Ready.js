const Write = require('../Functions/Write')
const { readdir } = require('fs')
const { LogCommandsOnStart, LogCount } = require('../../Configurations/StartLog')
const Folders = ['Fun', 'Information', 'Moderation', 'Developer', 'Levels', 'Currency', 'NSFW', 'Settings']
module.exports = (client) => {
      Write('I\'m online!', 0)
      client.user.setActivity(`x!help || ${client.users.size} Users!`)
      var i = 0
      Folders.forEach(Folder => {
            readdir(`./src/Commands/${Folder}`, (err, files) => {
                  files.forEach(file => {
                        
                        const Command = require(`../../Commands/${Folder}/${file}`)
                        if(i < LogCount && LogCommandsOnStart) { 
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
}