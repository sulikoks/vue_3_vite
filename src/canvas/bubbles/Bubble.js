import {changeOpacity, createCircle, random} from "../utils";
import cfg from "./_config"

export default class Bubble {
    /**
     * @param {Layer} layer
     * @param {{ x: number, y: number }?} pos
     * @param {BubbleConfig} config
     */
    constructor({ layer, pos, config = cfg.bubbleConfig }) {
        this.layer = layer

        this.position = pos || {
            x: Math.random() * this.layer.w,
            y: Math.random() * this.layer.h
        }
        this.velocity = { x: 0, y: 0 }
        this.radius = config.radius || random(config.minRadius, config.maxRadius)
        this.mass = this.radius * config.massFactor
        this.color = config.colors[Math.round(random(0, config.colors.length - 1))]
    }

    setPosition({ x, y }) {
        this.position = { x, y }
    }

    update() {
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y
    }

    draw() {
        createCircle(this.layer.ctx, this.position, this.radius, this.color);
        createCircle(this.layer.ctx, this.position, this.radius, changeOpacity( this.color, 1), true);
    }
}
