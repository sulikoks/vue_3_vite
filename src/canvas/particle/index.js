import config from "./config"
import Particle from "./Particle"

export function createParticle(rootNode) {
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')
    const particles = []
    let w = canvas.width = innerWidth
    let h = canvas.height = innerHeight
    config.particleConfig.count = Math.round((w + h) / 35)

    rootNode.appendChild(canvas)
    window.onresize = function () {
        w = canvas.width = innerWidth
        h = canvas.height = innerHeight
        particles.forEach(particle => particle.setAreaSize({ w, h }))
    }

    function reDrawBackground() {
        ctx.fillStyle = config.bgColor
        ctx.fillRect(0, 0, w, h)
    }
    function reDrawParticles() {
        particles.forEach((particle) => {
            particle.position();
            particle.reDraw();
        })
    }
    function drawLines() {
        let x1, y1, x2, y2, length, opacity
        for (const i in particles) {
            x1 = particles[i].x
            y1 = particles[i].y
            for (const j in particles) {
                x2 = particles[j].x
                y2 = particles[j].y
                length = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2))
                if (length < config.lineConfig.maxLength) {
                    opacity = 1 - length / config.lineConfig.maxLength
                    ctx.lineWidth = config.lineConfig.width
                    ctx.strokeStyle = config.lineConfig.color(opacity)
                    ctx.beginPath()
                    ctx.moveTo(x1, y1)
                    ctx.lineTo(x2,y2)
                    ctx.closePath()
                    ctx.stroke()
                }
            }
        }
    }
    function loop() {
        reDrawBackground()
        reDrawParticles()
        drawLines()

        window.requestAnimationFrame(loop)
    }
    function init() {
        for (let i = 0; i < config.particleConfig.count; i++) {
            const cfg = { ctx, w, h, config: config.particleConfig }
            particles.push(new Particle(cfg))
        }
        loop()
    }
    init()
}
