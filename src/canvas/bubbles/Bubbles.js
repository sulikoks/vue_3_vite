import Bubble from "./Bubble";
import config from "./_config";

const MAX_BUBBLES = 120

export default class Bubbles {
    /**
     * @param {Layer} layer
     * @param {MouseController} mouse
     */
    constructor({ layer, mouse }) {
        this.layer = layer
        this.mouse = mouse

        this.bubbles = [new Bubble({ layer, config: config.cursorConfig })]
        for (let i = 0; i < config.minCount; i++) {
            this.bubbles.push(new Bubble({ layer: this.layer }))
        }
    }

    addBubbleFromMouse() {
        if (!this.mouse.isPressed) return
        this.bubbles.push(new Bubble({ layer: this.layer, pos: this.mouse.pos }))
        if (this.bubbles.length > config.maxCount) {
            this.bubbles = this.bubbles.filter((b, i) => i !== 1)
        }
    }
    updateBubbles() {
        for (let i = 1; i < this.bubbles.length; i++) {
            const a = this.bubbles[i]
            const acc = { x: 0, y: 0 }
            for (let j = 0; j < this.bubbles.length; j++) {
                if (i === j) continue
                const b = this.bubbles[j]

                const delta = { x: b.position.x - a.position.x, y: b.position.y - a.position.y }
                const dist = Math.sqrt(delta.x * delta.x + delta.y * delta.y) || 1
                let force = (dist - config.sphereRadius) / dist * b.mass

                if (j === 0 && dist < config.cursorRadius) {
                    force = (dist - config.cursorRadius) * b.mass
                }

                acc.x += delta.x * force
                acc.y += delta.y * force
            }
            a.velocity.x = a.velocity.x * config.smooth + acc.x * a.mass
            a.velocity.y = a.velocity.y * config.smooth + acc.y * a.mass
            a.update()
        }
    }

    update() {
        this.addBubbleFromMouse()
        this.bubbles[0].setPosition(this.mouse.pos)
        this.updateBubbles()
    }
    draw() {
        this.layer.drawBackground(config.bgColor);
        [...this.bubbles].reverse().forEach(bubble => bubble.draw())
    }
}
