const {
      readdir
} = require('fs')
const getCommands = (folder) => {
      const commands = []
      readdir(folder, (err, files) => {
            files.forEach(file => {
                  const command = require(`${folder}/${file}`)
                  commands.push(command.Triggers[0])
            })
            return commands
      })
}
module.exports = getCommands;