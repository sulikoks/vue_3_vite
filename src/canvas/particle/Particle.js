export default class Particle {
    /**
     * @param {CanvasRenderingContext2D} ctx
     * @param {number} w
     * @param {number} h
     * @param {{ color: string, radius: number, count: number, maxVelocity: number }} config
     */
    constructor({ ctx, w, h, config }) {
        this.ctx = ctx
        this.w = w
        this.h = h
        this.config = config
        this.x = Math.random() * this.w
        this.y = Math.random() * this.h
        this.velocityX = Math.random() * (config.maxVelocity * 2) - config.maxVelocity
        this.velocityY = Math.random() * (config.maxVelocity * 2) - config.maxVelocity
    }

    setAreaSize({ w, h }) {
        this.w = w
        this.h = h
    }
    position() {
        (this.x + this.velocityX > this.w && this.velocityX > 0 || this.x + this.velocityX < 0 && this.velocityX < 0) && (this.velocityX *= -1);
        (this.y + this.velocityY > this.h && this.velocityY > 0 || this.y + this.velocityY < 0 && this.velocityY < 0) && (this.velocityY *= -1);
        this.x += this.velocityX
        this.y += this.velocityY
    }
    reDraw() {
        this.ctx.beginPath()
        this.ctx.arc(this.x, this.y, this.config.radius, 0, Math.PI * 2)
        this.ctx.closePath()
        this.ctx.fillStyle = this.config.color
        this.ctx.fill()
    }
}
