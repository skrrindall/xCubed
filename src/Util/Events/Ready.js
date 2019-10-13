const req = require('node-superfetch')
const Write = require('../Functions/Write')
const {
      readdir
} = require('fs')
const {
      LogCommandsOnStart,
      LogCount
} = require('../../Configurations/StartLog')
const Folders = ['Fun', 'Information', 'Moderation', 'Developer', 'Levels', 'NSFW', 'Settings', 'Currency', 'Images']
module.exports = async (client) => {
      client.user.setActivity('I\'m online!')
      setTimeout(() => {
            client.user.setActivity(`x!help`)
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
      setInterval(() => {
      const userCMDS = client.triggers.filter(trig => trig.Options.Dev === false)
      client.commandOfTheHour = user.CMDS.random();
      }, 3600000)
      
      Write('I\'m online!', 0)
}
