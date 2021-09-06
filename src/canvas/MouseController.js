export default class MouseController {
    /**
     * @param {Element} container
     */
    constructor({ container = document.body } = {}) {
        this.container = container
        this.isPressed = false
        this.isDown = false
        this.isUp = false
        this.pos = { x: 0, y: 0 }

        this.container.addEventListener('mouseup', (e) => this.changeState(e))
        this.container.addEventListener('mousedown', (e) => this.changeState(e))
        this.container.addEventListener('mousemove', (e) => this.changeState(e))
        this.container.addEventListener('mousewheel', (e) => this.changeState(e))
        this.container.addEventListener('mouseleave', (e) => this.changeState(e))
        this.container.addEventListener('contextmenu', (e) => this.changeState(e))
    }
    changeState(e) {
        this.pos.x = e.clientX
        this.pos.y = e.clientY

        if (e.type === 'mousedown') {
            this.isPressed = true
            this.isDown = true
            this.isUp = false
        } else if (e.type === 'mouseup') {
            this.isPressed = false
            this.isDown = false
            this.isUp = true
        }
    }
    update() {
        this.isDown = false
        this.isUp = false
    }
}
