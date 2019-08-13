const {
    Client,
    on,
    login,
    Collection
} = require('discord.js')
const client = new Client()
client.login(require('./src/Configurations/Config.json').token)
client.triggers = new Collection()
client.commands = new Collection()
client.commandsUsed = 0
client.queue = new Map()
require('./src/Util/Misc/EventLoadingHandler.js')(client)
const Enmap = require('enmap')
client.Prefix = new Enmap({
    name: 'prefix'
})
client.Points = new Enmap({
    name: 'Points'
})
client.Credits = new Enmap({
    name: 'credits'
})
client.PP = new Enmap({
    name: 'PP'
})
client.HowGay = new Enmap({
    name: 'HowGay'
})
client.DankRate = new Enmap({
    name: 'DankRate'
})