const Write = (args, type) => {
      var types = ['95m[Bot]    ', '91m[Warning]', '31m[Error]', '92m[Debug]  ']
      process.stdout.write(`\u001b[${types[type]}\u001b[39m || ${args}\n`)
}
module.exports = Write