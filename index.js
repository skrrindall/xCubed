const discord = require('discord.js')
const client = new discord.Client({
    fetchMembers: true
})
client.login(require('./src/Configurations/Config.json').token)
client.triggers = new discord.Collection()
client.commands = new discord.Collection()
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
client.Warnings = new Enmap({
    name: 'Warnings'
})
client.HowGay = new Enmap({
    name: 'HowGay'
})
client.Inv = new Enmap({
    name: 'Inv'
})
client.DankRate = new Enmap({
    name: 'DankRate'
})