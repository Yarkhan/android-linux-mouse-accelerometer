const dgram = require('dgram')

const resolveSensorData = (data,range,threshold,sensitivity,invert) => {
    if(data > threshold || data < -threshold || data == 5) return
    let halfRange = Math.floor(range/2)
    let step = Math.floor(halfRange/10) * (!invert && 1 || -1)
    return data * step * sensitivity + halfRange
}

const createServer = (config, mouse) => {
    const server = dgram.createSocket({
        type: 'udp4',
        reuseAddr: true
    });

    server.on('error', err => {
        console.log(`server error:\n${err.stack}`);
        server.close();
    });

    server.on('message', msg => {
        msg = msg.toString().split(',').filter(msg => msg != false)
        let parsedMsg = {x: msg[2], y: msg[3], z: msg[4] }
        let targetX = resolveSensorData(parsedMsg[config.axisX], config.screenWidth, 8 , config.sensitivityX, config.invertX)
        let targetY = resolveSensorData(parsedMsg[config.axisY], config.screenHeight, 8, config.sensitivityY, config.invertY)
        if(!isNaN(targetX)) mouse.targetX = targetX
        if(!isNaN(targetY)) mouse.targetY = targetY
    });

    return server
}

module.exports = createServer
