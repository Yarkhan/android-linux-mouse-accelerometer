const { exec } = require('child_process')

const createMouse = config => ({
    x : 0,
    y : 0,
    targetX : 0,
    targetY : 0,
    move() {
        let changeX = (this.targetX - this.x)  * config.easeX,
            changeY = (this.targetY - this.y)  * config.easeY

        if(parseInt(changeX) + parseInt(changeY) == 0) return
        this.x += changeX
        this.y += changeY
        exec(`xdotool mousemove ${Math.floor(this.x)} ${Math.floor(this.y)}`)
    }
})

module.exports = createMouse
