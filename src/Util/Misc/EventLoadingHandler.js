const Load = (event) => require(`../Events/${event}`);

module.exports = (client) => {
      client.on('ready', () => Load('Ready')(client))
      client.on('message', Load('Message'))
}