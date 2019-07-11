const Enmap = require('enmap')
module.exports = async (message) => {
      const client = message.client
      client.AutoMod.ensure(message.guild.id, {
            spam: true,
            inviteLinks: true,
            enabled: false,
      })
      const settings = client.AutoMod.get(message.guild.id)
      if(!settings.enabled) return;
      if(settings.inviteLinks) {
            if(message.content.includes('discord.gg')) {
                  message.delete()
                  const Warn = await message.channel.send(`Please do not send invite links in chat! <@${message.author.id}>`)
                  await Warn.delete(3000)
            }
      }
}