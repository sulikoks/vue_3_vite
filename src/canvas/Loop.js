export class Loop {
    /**
     * @param {(number) => {}} update
     * @param {() => {}} display
     */
    constructor(update, display) {
        this.update = update
        this.display = display

        this.currentFrame = 0
        this.deltaTime = 0
        this.lastUpdate = 0
        this.maxInterval = 40

        requestAnimationFrame(time => this.animate(time))
    }

    animate(currentTime) {
        requestAnimationFrame(time => this.animate(time))

        ++this.currentFrame
        this.deltaTime = currentTime - this.lastUpdate
        this.lastUpdate = currentTime

        if (this.deltaTime < this.maxInterval) {
            this.update()
            this.display()
        }
    }
}
