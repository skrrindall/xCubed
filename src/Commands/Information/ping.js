module.exports = {
      Triggers: ['ping', 'pong'],
      Description: 'Check the bots ping',
      Category: 'information',
      Permissions: {
        User: [],
        Bot: ['EMBED_LINKS', 'SEND_MESSAGES']
      },
      Options: {
        Dev: false,
        NSFW: false,
        Cooldown: {
          Enabled: false,
          Time: 0
        },
      },
      Run: async (client, message, paramaters) => {
            const ping = await message.channel.send('My ping is.')
            await ping.edit('My ping is..')
            await ping.edit('My ping is...')
            await ping.edit(`My ping is **${Math.floor(client.ping)}**ms`)
      }
    }