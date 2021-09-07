import {Layer} from "../Layer";
import {Loop} from "../Loop";
import Particles from "./Particles";
import MouseController from "../MouseController";

export default class App {
    /**
     * @param {Element} container
     */
    constructor(container) {
        this.layer = new Layer(container)
        this.mouse = new MouseController(container)

        this.particles = new Particles({ layer: this.layer, mouse: this.mouse })
        this.loop = new Loop(() => this.update(), () => this.display())
    }

    update() {
        this.particles.update()
    }
    display() {
        this.mouse.update()
    }
}
