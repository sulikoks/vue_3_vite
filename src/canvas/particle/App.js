import Layer from "../Layer";
import Loop from "../Loop";
import Particles from "./Particles";
import MouseController from "../MouseController";

export default class App {
    /**
     * @param {Element} container
     */
    constructor(container) {
        this.layer = new Layer(container)
        this.mouse = new MouseController(container)
        this.loop = new Loop(() => this.update(), () => this.display())

        this.particles = new Particles({ layer: this.layer, loop: this.loop, mouse: this.mouse })
    }

    update() {
        this.particles.update()
        this.mouse.update()
    }
    display() {
        this.particles.display()
    }
}
