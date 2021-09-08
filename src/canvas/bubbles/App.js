import Layer from "../Layer";
import Loop from "../Loop";
import Bubbles from "./Bubbles";
import MouseController from "../MouseController";

export default class App {
    /**
     * @param {Element} container
     */
    constructor(container) {
        this.layer = new Layer(container)
        this.mouse = new MouseController(container)
        this.loop = new Loop(() => this.update(), () => this.display())
        this.createBubbles()
    }

    createBubbles() {
        if (!this.layer) return
        this.bubbles = new Bubbles({ layer: this.layer, mouse: this.mouse })
    }
    update() {
        this.bubbles.update()
        this.mouse.update()
    }
    display() {
        this.bubbles.draw()
    }
}
