require('babel-register')

const config = require('../config')
const server = require('../server/main')
const mockServer = require('../mock-server/server')
const debug = require('debug')('app:bin:server')

const port = config.server_port
const host = config.server_host

server.listen(port)
console.log('=======================================')
console.log(`FRONT END SERVER IS NOW RUNNING AT ${host}:${port}.`);
console.log('=======================================')
