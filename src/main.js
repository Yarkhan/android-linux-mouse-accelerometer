const createMouse = require('./mouse')
const createServer = require('./server')
const {readFileSync} = require('fs')

let config = JSON.parse(readFileSync('./config.json','utf8'))

mouse = createMouse(config)
server = createServer(config,mouse)

server.bind(5555);

setInterval(()=>{
    mouse.move()
},1000/30)
