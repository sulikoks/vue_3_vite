import config from "./_config";
import {changeOpacity} from "../utils";
import Particle from "./Particle";

export default class Particles {
    /**
     * @param {Layer} layer
     * @param {Loop} loop
     * @param {MouseController} mouse
     */
    constructor({ layer, loop, mouse }) {
        this.layer = layer
        this.loop = loop
        this.mouse = mouse

        this.init();
    }
    init() {
        const cursorConfig = { layer: this.layer, loop: this.loop, config: config.cursorConfig }
        this.particles = [new Particle(cursorConfig)]

        this.count = config.count || (this.layer.w * this.layer.h) / 10000
        this.addNewParticles();
    }
    addNewParticles() {
        for (let i = this.particles.length; i < this.count; i++) {
            const cfg = {
                layer: this.layer,
                loop: this.loop,
                config: {
                    ...config.particleConfig,
                    expTime: config.particleConfig.expTime * i
                }
            }
            this.particles.push(new Particle(cfg))
        }
    }
    updateCursorPosition() {
        this.particles[0].x = this.mouse.pos.x
        this.particles[0].y = this.mouse.pos.y
    }
    addParticleFromMouse() {
        if (!this.mouse.isDown) return
        const pos = { x: this.mouse.pos.x, y: this.mouse.pos.y }
        const cfg = { pos, layer: this.layer, loop: this.loop, config: config.particleConfig }
        this.particles.push(new Particle(cfg))
    }
    drawBackground() {
        this.layer.ctx.fillStyle = config.bgColor
        this.layer.ctx.fillRect(0, 0, this.layer.w, this.layer.h)
    }
    updateParticles() {
        this.particles = this.particles.filter(particle => !particle.isExpired)
        this.particles.forEach((particle) => particle.position())
        this.addNewParticles();
    }
    drawParticles() {
        this.particles.forEach((particle) => particle.draw())
    }
    drawLines() {
        const { ctx } = this.layer
        let x1, y1, x2, y2, grad, length, opacity
        for (const i in this.particles) {
            x1 = this.particles[i].x
            y1 = this.particles[i].y
            for (const j in this.particles) {
                x2 = this.particles[j].x
                y2 = this.particles[j].y
                length = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2))
                if (length < config.lineConfig.maxLength) {
                    opacity = 1 - length / config.lineConfig.maxLength
                    grad = ctx.createLinearGradient(x1, y1, x2, y2);
                    grad.addColorStop(0, changeOpacity(this.particles[i].color, opacity));
                    grad.addColorStop(1, changeOpacity(this.particles[j].color, opacity));
                    ctx.lineWidth = config.lineConfig.width
                    ctx.strokeStyle = grad
                    ctx.beginPath()
                    ctx.moveTo(x1, y1)
                    ctx.lineTo(x2, y2)
                    ctx.closePath()
                    ctx.stroke()
                }
            }
        }
    }
    update() {
        this.updateCursorPosition()
        this.addParticleFromMouse()
        this.updateParticles()
    }
    display() {
        this.drawBackground()
        this.drawLines()
        this.drawParticles()
    }
}
