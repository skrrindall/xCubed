// This is a function that logs the commands that are being loaded and just makes it look fancy. This command can be used for debugging purposes so that you can see it more clearly
const Write = require('../Functions/Write')
// Once again, we are just loading the 'readdir' function from the module so that we dont have to load the entire module.
// We use readdir so that we can grab all of the files from `./src/Commands/` and require them
const {
    readdir
} = require('fs')
// This is just something i added as a functionality for when i get bored or if you're using the bot.
const {
    LogCommandsOnStart,
    LogCount
} = require('../../Configurations/StartLog')
// This is our folders in `./src/Commands` If you do not have a foldername in this array then the folder will not be loaded
const Folders = ['Fun', 'Information', 'Moderation', 'Developer', 'Levels', 'NSFW', 'Settings', 'Currency', 'Images']
module.exports = async (client) => {
    // Set the playing status to "I'm online" and then .5 seconds after set it to "x!help". I do this to make sure the bot restarts properly without having my terminal open
    client.user.setActivity('I\'m online!')
    setTimeout(() => {
        client.user.setActivity(`x!help`)
    }, 500)
    // var i = 0 is used for the `LogCommandsOnStart` and `LogCount`
    var i = 0
    // Here we take the folders array. Run a `forEach()` loop on it to loop through each of the folders with the same peice of code.
    Folders.forEach(Folder => {
        // Here we grab the files from each folder
        readdir(`./src/Commands/${Folder}`, (err, files) => {
            // And now we grab every file
            files.forEach(file => {
                // We require the file and save it under the `Command` variable name
                const Command = require(`../../Commands/${Folder}/${file}`)
                if (i < LogCount && LogCommandsOnStart) {
                    Write(`Loaded Command: ${Command.Triggers[0]}`, 3)
                    i++
                }
                // Here we are setting client.commands so that i can use that for the help command. I'm still thinking of a way to get rid of client.commands
                client.commands.set(Command.Triggers[0], Command)
                // Here we are setting each trigger under client.triggers
                Command.Triggers.forEach(Trigger => {
                    client.triggers.set(Trigger, Command)
                })
            })
        })
    })
    // Here we log that the bot is online in the terminal with our special write function
    Write('I\'m online!', 0)
}
