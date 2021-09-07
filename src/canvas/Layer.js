export class Layer {
    /**
     * @param {Element} container
     */
    constructor(container) {
        this.container = container
        this.container.appendChild(this.createLayer());

        addEventListener('resize', () => this.fitToContainer())
        this.fitToContainer()
    }

    createLayer() {
        this.canvas = document.createElement('canvas')
        this.ctx = this.canvas.getContext('2d')
        return this.canvas
    }
    fitToContainer() {
        this.canvas.width = this.container.offsetWidth
        this.canvas.height = this.container.offsetHeight
    }
    get w() {
        return this.canvas.width
    }
    get h() {
        return this.canvas.height
    }
}
