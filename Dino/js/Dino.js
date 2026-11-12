class Dino {
    #x
    #y
    #element
    #container
    #jumpTimeout
    #isCrowing = false
    #isJumping = false
    #akadalyokInterval
    constructor(x, y, container) {
        this.setX(x)
        this.setY(y)
        this.setContainer(container)
        this.createDino()
    }
    setX(x) {
        this.#x = x
    }
    setY(y) {
        this.#y = y
    }
    setContainer(container) {
        this.#container = document.querySelector(container)
    }
    createDino() {
        this.#element = document.createElement("img")
        this.#element.style.top = this.#y + "px"
        this.#element.style.left = this.#x + "px"
        this.#element.src = "img/kuka.png"
        this.#element.classList.add("dino")
        this.#container.appendChild(this.#element)
        window.addEventListener('keydown', (evnet) => {
            if (evnet.key == ' ' || evnet.key == 'w' || evnet.key == 'ArrowUp') {
                evnet.preventDefault()
                this.setjump()
            }
            if (evnet.key == 'ArrowDown') {
                evnet.preventDefault()
                this.setcrowDown()
            }
        })
        window.addEventListener("keyup", (event) => {
            if (event.key == 'ArrowDown' || event.key == 's' || event.key == 'Shift') {
                this.setcrowUp()
            }
        })
        this.#akadalyokInterval = setInterval(() => {
            this.remove()
        }, 20);
    }
    setjump() {
        if (this.#isJumping || this.#isCrowing) {
            return
        }
        this.#isJumping = true
        this.#element.classList.add("jumping")
        this.#jumpTimeout = setTimeout(() => {
            this.#element.classList.remove("jumping")
            this.#isJumping = false
        }, 800);

    }
    setcrowDown() {
        if (this.#isJumping || this.#isCrowing) {
            return
        }
        this.#isCrowing = true
        this.#element.classList.add("crouching")
    }
    setcrowUp() {
        this.#isCrowing = false
        this.#element.classList.remove("crouching")
    }
    remove() {
        var akadaly = document.querySelectorAll(".object")
        var karakter=this.#element.getBoundingClientRect()
        var end = false
        for (let i = 0; end || i < akadaly.length; i++) {
            var akad=akadaly[i].getBoundingClientRect()
            if (karakter.left < akad.right && karakter.right > akad.left && karakter.top < akad.bottom && karakter.bottom > akad.top) {
                clearInterval(this.#akadalyokInterval)
                window.jatekVege = true
                end = true
            }
        }
    }
}