export default class Particle {
    /**
     * @param {{ x: number, y: number }} pos
     * @param {Layer} layer
     * @param {Loop} loop
     * @param {ParticleConfig} config
     */
    constructor({ pos = {}, layer, loop, config }) {
        this.layer = layer
        this.loop = loop
        this.config = config

        this.x = pos.x || Math.random() * this.layer.w
        this.y = pos.y || Math.random() * this.layer.h
        this.velocityX = config.maxVelocity ? Math.random() * (config.maxVelocity * 2) - config.maxVelocity : 0
        this.velocityY = config.maxVelocity ? Math.random() * (config.maxVelocity * 2) - config.maxVelocity : 0

        this.color = this.config.colors[Math.floor(Math.random() * this.config.colors.length)]
        this.expFrame = config.expTime ? this.loop.currentFrame + config.expTime : null
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
    get isExpired() {
        return this.expFrame && this.loop.currentFrame > this.expFrame
    }
}
