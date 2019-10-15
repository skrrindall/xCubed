// This grabs the owner array and the prefix string from ./src/Configurations/Config.json
const {
  owner,
  prefix
} = require('../../Configurations/Config.json')
// Require just the RichEmbed constructor instead of the entire Discord.js module
const {
  RichEmbed
} = require('discord.js')
// This is a set that users will be added to and deleted from to prevent XP farming
const NoXP4U = new Set();
// This is a set that users will be added to and deleted from to prevent command spamming
const NoCMD = new Set()
module.exports = (message) => {
  // This makes the bot only respond to normal user accounts
  if (message.author.bot) return
  // If the bot is sent a DM and the DM starts with the bots prefix it tells you to use comands in guilds only
  if (message.channel.type === 'dm' && message.content.startsWith(prefix.toLowerCase())) {
    return message.channel.send('Hey! Please only use my commands in servers.')
  }
  // Define cliennt
  const client = message.client;
  // Define key as message.author.id for the database
  const key = message.author.id
  // This is for the bots custom prefix feature. We save the default prefix in the database if the guild is not saved
  client.Prefix.ensure(message.guild.id, {
    prefix: prefix
  });
  // This ensures that every user has a Points object, if they are missing this then the bot will error and die
  client.Points.ensure(key, {
    user: message.author.id,
    points: 0,
    level: 0,
  })
  // This is to make sure that the user has a Credits system for their account. This is not needed but i like to have it so that it wont cause any errors on a currency command
  client.Credits.ensure(key, {
    ID: key,
    Wallet: 500,
    lastUsed: null,
    Bank: 0,
    SecSys: false
  })
  // This is how i calculate levels, it is quite easy but i like it
  let currentLevel = Math.floor(client.Points.get(message.author.id).points / 100)
  // This is for the XP timeout
  // If the Set(); does not have a users ID then it adds XP to the users account and then adds them to the Set(), after that it sets a timeout using setTimeout() that removes them from the Set after X seconds
  if (!NoXP4U.has(message.author.id)) {
    NoXP4U.add(message.author.id)
    client.Points.set(key, {
      user: message.author.id,
      points: client.Points.get(key).points + Math.floor(Math.random() * 8),
      level: currentLevel
    })
    setTimeout(() => {
      NoXP4U.delete(message.author.id)
    }, 15000)
  }
  // If the message does not start with the bots prefix then we ignore the message. No need to go through all of this message processing for no reason
  if (!message.content.startsWith(client.Prefix.get(message.guild.id).prefix.toLowerCase())) return;
  // This is the first part of the message without the prefix and it only leaves the command trigger
  const Command = message.content.split(" ")[0].slice(client.Prefix.get(message.guild.id).prefix.length).toLowerCase();
  // This removes the first part of the message entirley and leaves us with an array of paramaters
  const Paramaters = message.content.split(" ").slice(1)
  if (client.triggers.has(Command)) {
    const CMD = client.triggers.get(Command)
    if (!CMD.Permissions.User.every(Permission => message.member.hasPermission(Permission))) {
      message.channel.send('You do not have the correct permissions to use that!')
    } else if (!CMD.Permissions.Bot.every(Permission => message.guild.me.hasPermission(Permission))) {
      message.channel.send('I do not have the correct permissions to do that!')
    } else if (CMD.Options.Dev === true && !owner.includes(message.author.id)) {
      message.channel.send('You do not have the correct permissions to use that!')
    } else if (CMD.Options.NSFW === true && message.channel.nsfw === false) {
      return message.channel.send('You can\'t use **__NSFW__** commands outside of an NSFW channel')
    } else {
      if (!NoCMD.has(message.author.id)) {
        if (!owner.includes(message.author.id)) {
          NoCMD.add(message.author.id)
        }
        //  if(!owners.includes(message.author.id)) {
        setTimeout(() => {
          NoCMD.delete(message.author.id)
        }, 3000)
        // }
        client.commandsUsed++;
        try {
          CMD.Run(client, message, Paramaters)
        } catch(e) {
          message.channel.send('It looks like there was an error! Try again later.')
          console.error(e)
        }
        } else {
          client.commandsUsed++;
        const Embed = new RichEmbed()
          .setTitle('Woah! There\'s a cooldown for that.')
          .setDescription('To prevent spam there is a **3** second cooldown on all commands!')
          .setColor('#36393f')
        message.channel.send(Embed).then(msg => {
          msg.delete(5000)
        })
        message.delete()
      }
    }
  }
}
