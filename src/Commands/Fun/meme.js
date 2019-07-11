const got = require('got')
const { RichEmbed } = require('discord.js')
module.exports = {
      Triggers: ['meme'],
      Description: 'See a funny',
      Category: 'fun',
      Permissions: {
        User: [],
        Bot: ['EMBED_LINKS', 'SEND_MESSAGES']
      },
      Options: {
        Dev: false,
        NSFW: false,
      },
      Run: async (client, message, paramaters) => {
            got('https://www.reddit.com/r/meme/random/.json').then(response => {
                  let content = JSON.parse(response.body);
                  var title = content[0].data.children[0].data.title;
                  var image = content[0].data.children[0].data.url;
                  var ups = content[0].data.children[0].data.ups
                  var downs = content[0].data.children[0].data.downs
                  console.log(content[0].data.children[0].data)
                  const sent = new RichEmbed()
                    .setTitle(title)
                    .setImage(image)
                    .setColor('RED')
                    .setFooter(`${ups} ⬆ \|| ${downs} ⬇`)
                  message.channel.send(sent)
          }).catch(console.error);
      }
    }