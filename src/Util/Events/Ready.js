const Write = require('../Functions/Write')
const { readdir } = require('fs')
const Folders = ['Fun', 'Information', 'Moderation', 'Developer', 'Levels', 'Currency', 'NSFW', 'Settings']
module.exports = (client) => {
      Write('I\'m online!', 0)
      client.user.setActivity(`x!help || ${client.users.size} Users!`)
      Folders.forEach(Folder => {
            readdir(`./src/Commands/${Folder}`, (err, files) => {
                  files.forEach(file => {
                        const Command = require(`../../Commands/${Folder}/${file}`)
                        Write(`Loaded Command: ${Command.Triggers[0]}`, 3)
                        client.commands.set(Command.Triggers[0], Command)
                        Command.Triggers.forEach(Trigger => {
                              client.triggers.set(Trigger, Command)
                        })
                  })
            })
      })
}