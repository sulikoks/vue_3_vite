import config from "./config"
import Particle from "./Particle"

export function createParticle(rootNode) {
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')
    const particles = []
    let w = canvas.width = innerWidth
    let h = canvas.height = innerHeight
    config.particleConfig.count = Math.round((w + h) / 30)

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
        let x1, y1, x2, y2, grad, length, opacity
        for (const i in particles) {
            x1 = particles[i].x
            y1 = particles[i].y
            for (const j in particles) {
                x2 = particles[j].x
                y2 = particles[j].y
                length = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2))
                if (length < config.lineConfig.maxLength) {
                    opacity = 1 - length / config.lineConfig.maxLength
                    grad = ctx.createLinearGradient(x1, y1, x2, y2);
                    grad.addColorStop(0, changeOpacity(particles[i].color, opacity));
                    grad.addColorStop(1, changeOpacity(particles[j].color, opacity));
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

function changeOpacity(color, opacity) {
    const rgba = color.split(',');
    rgba[rgba.length - 1] = `${opacity})`
    return rgba.join(',')
}
