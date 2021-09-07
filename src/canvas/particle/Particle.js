export default class Particle {
    /**
     * @param {{ x: number, y: number }} pos
     * @param {Layer} layer
     * @param {ParticleConfig} config
     */
    constructor({ pos = {}, layer, config }) {
        this.layer = layer
        this.config = config

        this.x = pos.x || Math.random() * this.layer.w
        this.y = pos.y || Math.random() * this.layer.h
        this.color = this.config.colors[Math.floor(Math.random() * this.config.colors.length)]
        this.velocityX = Math.random() * (config.maxVelocity * 2) - config.maxVelocity
        this.velocityY = Math.random() * (config.maxVelocity * 2) - config.maxVelocity
    }
    position() {
        this.checkOverflow()
        this.x += this.velocityX
        this.y += this.velocityY
    }
    checkOverflow() {
        if(
            this.x + this.velocityX > this.layer.w && this.velocityX > 0 ||
            this.x + this.velocityX < 0 && this.velocityX < 0
        ) {
            this.velocityX *= -1
        }
        if(
            this.y + this.velocityY > this.layer.h && this.velocityY > 0 ||
            this.y + this.velocityY < 0 && this.velocityY < 0
        ) {
            this.velocityY *= -1
        }
    }
    draw() {
        this.layer.ctx.beginPath()
        this.layer.ctx.arc(this.x, this.y, this.config.radius, 0, Math.PI * 2)
        this.layer.ctx.closePath()
        this.layer.ctx.fillStyle = this.color
        this.layer.ctx.fill()
    }
}
