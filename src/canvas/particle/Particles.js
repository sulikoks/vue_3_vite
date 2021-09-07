import config from "./_config";
import {changeOpacity} from "../utils";
import Particle from "./Particle";

export default class Particles {
    /**
     * @param {Layer} layer
     * @param {MouseController} mouse
     */
    constructor({ layer, mouse }) {
        this.layer = layer
        this.mouse = mouse

        this.init();
    }
    drawBackground() {
        this.layer.ctx.fillStyle = config.bgColor
        this.layer.ctx.fillRect(0, 0, this.layer.w, this.layer.h)
    }
    updateCursorPosition() {
        this.particles[0].x = this.mouse.pos.x
        this.particles[0].y = this.mouse.pos.y
    }
    addParticleFromMouse() {
        if (!this.mouse.isDown) return
        const pos = { x: this.mouse.pos.x, y: this.mouse.pos.y }
        const cfg = { pos, layer: this.layer, config: config.particleConfig }
        this.particles.push(new Particle(cfg))
    }
    drawParticles() {
        this.particles.forEach((particle) => {
            particle.position();
            particle.draw();
        })
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
    init() {
        const cursorConfig = { layer: this.layer, config: config.cursorConfig }
        this.particles = [new Particle(cursorConfig)]

        for (let i = 0; i < config.count; i++) {
            const cfg = { layer: this.layer, config: config.particleConfig }
            this.particles.push(new Particle(cfg))
        }
    }
    update() {
        this.updateCursorPosition()
        this.addParticleFromMouse()
        this.drawBackground()
        this.drawLines()
        this.drawParticles()
    }
}
