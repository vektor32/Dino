class DinosJatek {
    #x
    #y
    #speed
    #element
    #container
    #moveInterval
    constructor(x, y, speed, container, img) {
        this.setX(x)
        this.setY(y)
        this.setSpeed(speed)
        this.setContainer(container)
        this.createObject(img)
    }
    setX(x) {
        this.#x = x
    }
    setY(y) {
        this.#y = y
    }
    setSpeed(speed) {
        this.#speed = speed
    }
    setContainer(container) {
        this.#container = document.querySelector(container)
    }
    createObject(img) {
        this.#element = document.createElement("img")
        this.#element.style.top = this.#y + "px"
        this.#element.style.left = this.#x + "%"
        this.#element.classList.add("object")
        this.#element.src = img
        this.#container.appendChild(this.#element)
    }
    remove() {
        this.#element.remove()
        clearInterval(this.#moveInterval)
    }
    move() {
        this.#moveInterval = setInterval(() => {
            if (!Dino.getGameEnd()) {
                this.#x -= this.#speed
                this.#element.style.left = this.#x + "%"
                if (this.#x <= -10) {
                    this.remove()
                }
            }
        }, 20)
    }

}