xCubed is an itteration of K3 (and K4) but this is the final version.

# Links
**Website**: https://xcubed.xyz

**Invite**: N\A

**Support**: N\A


# Changelog
**10/11/2019 1:28p.m.**
  - Added `duck`
  - Added `reverse`
  - Added `owo`

**10/10/2019 9:59p.m.**
  - Added `tuesday` and `randomuser` to the fun commands
  - Added command formatting and a developer section to `README.md`
**10/8/2019 1:13p.m.**
  - Added `Links` to `README.md`
  - Changed the `Links` markdown
  
**10/7/2019 8:00p.m.**
  - Added `Usage: '{c}'` to all commands
  - Added a field for the usage in the help embed for a certain command
  
  
  
# Developer Section

Running the bot -
To run the bot you must have node installed, if you would like to have the bot auto-restart then you can use any process manager of your choice. I personally use PM2 but i am soon to move to an entirely custom compiler. See the codeblock below for the `node` command to run the bot
```bash
node index.js
```


Command Formatting - 
```js

module.exports = {
    Triggers: ['commandTriggers'],
    Description: 'Command Description',
    Category: 'Command Category',
    Usage: '{c}',
    Permissions: {
      User: [],
      Bot: ['SEND_MESSAGES']
    },
    Options: {
      Dev: false,
      NSFW: false,
      Cooldown: {
        Enabled: true,
        Time: 0
      },
    },
    Run: async (client, message, paramaters) => {
        // The code for your command goes in this area and below. The code you see above is to set the commands name, triggers, permissions, category, and usage.
    }
  }
```

Help, I found an issue -
If you have found an issue with the bot feel free to fork this repository and fix the issue then open a pull request. If i have found that you have fixed the issue and not made it worse then it will be accepted.
