export default class Layer {
    /**
     * @param {Element} container
     * @param {(object ?: { w: number, h: number }) => {}} onResize
     */
    constructor(container , onResize = () => {}) {
        this.container = container
        this.onResize = onResize
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
        this.onResize({ w: this.w, h: this.h })
    }
    drawBackground(color) {
        this.ctx.fillStyle = color
        this.ctx.fillRect(0, 0, this.w, this.h)
    }
    get w() {
        return this.canvas.width
    }
    get h() {
        return this.canvas.height
    }
}
