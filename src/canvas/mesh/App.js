import Layer from "../Layer";
import Loop from "../Loop";
import Mesh from "./Mesh";

export default class App {
    /**
     * @param {Element} container
     */
    constructor(container) {
        this.layer = new Layer(container, () => this.createMesh())
        this.loop = new Loop(() => this.update(), () => this.display())
        this.createMesh()
    }

    createMesh() {
        if (!this.layer) return
        this.mesh = new Mesh({ layer: this.layer })
    }
    update() {
        this.mesh.updateParticles(this.loop.deltaTime / 800);
        this.mesh.updateTriangles(this.loop.deltaTime / 800);
    }
    display() {
        this.mesh.drawTriangles();
        // this.mesh.drawParticles();
    }
}
