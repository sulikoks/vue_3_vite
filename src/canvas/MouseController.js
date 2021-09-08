export default class MouseController {
    /**
     * @param {Element} container
     */
    constructor(container = document.body) {
        this.container = container
        this.isClick = false
        this.isPressed = false
        this.isDown = false
        this.isUp = false
        this._pos = {
            x: container.offsetWidth / 2,
            y: container.offsetHeight / 2
        }

        this.container.addEventListener('click', (e) => this.changeState(e))
        this.container.addEventListener('mouseup', (e) => this.changeState(e))
        this.container.addEventListener('mousedown', (e) => this.changeState(e))
        this.container.addEventListener('mousemove', (e) => this.changeState(e))
        this.container.addEventListener('mousewheel', (e) => this.changeState(e))
        this.container.addEventListener('mouseleave', (e) => this.changeState(e))
        this.container.addEventListener('contextmenu', (e) => this.changeState(e))
    }
    changeState(e) {
        this._pos.x = e.clientX
        this._pos.y = e.clientY

        if (e.type === 'click') {
            this.isClick = true
        } else if (e.type === 'mousedown') {
            this.isPressed = true
            this.isDown = true
            this.isUp = false
        } else if (e.type === 'mouseup') {
            this.isPressed = false
            this.isDown = false
            this.isUp = true
        } else if (e.type === 'contextmenu') {
            e.preventDefault()
        }
    }
    update() {
        this.isClick = false
        this.isDown = false
        this.isUp = false
    }

    get pos() {
        return { ...this._pos }
    }
}
