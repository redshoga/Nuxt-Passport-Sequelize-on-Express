const execSync = require('child_process').execSync
const fs = require('fs')

function execAndPrint(cmdStr) {
  console.log('exec:', cmdStr)
  console.log(execSync(cmdStr).toString())
}

const cmdList = [
  'heroku config:set NPM_CONFIG_PRODUCTION=false',
  'heroku config:set HOST=0.0.0.0',
  'heroku config:set NODE_ENV=production',
  'heroku config:push'
]

const databaseJsonStr = fs
  .readFileSync('database.json', { encoding: 'utf-8' })
  .replace(/\s+/g, '')
  .replace(/"/g, "'")
cmdList.push(`heroku config:set SEQUELIZE_SETTINGS=${databaseJsonStr}`)

cmdList.forEach(cmdStr => execAndPrint(cmdStr))
