class Dino {
    #x
    #y
    #element
    #container
    #jumpTimeout
    #isCrowing = false
    #isJumping = false
    #akadalyokInterval
    static #gameEnd = false
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
    static getGameEnd() {
        return Dino.#gameEnd
    }
    static setGameEnd() {
        Dino.#gameEnd = true
    }
    static resetGameEnd() {
        Dino.#gameEnd = false
    }
    akadalyok() {
        this.#akadalyokInterval = setInterval(() => {
            if (!Dino.#gameEnd) {
                this.remove()
            }
            return
        }, 20);
    }
    createDino() {
        this.#element = document.createElement("img")
        this.#element.style.top = this.#y + "px"
        this.#element.style.left = this.#x + "px"
        this.#element.src = "img/allo.png"
        this.#element.classList.add("dino")
        this.#container.appendChild(this.#element)
        window.addEventListener('keydown', (evnet) => {
            if (!document.querySelector("#exampleModal.show")) {
                if (evnet.key == ' ' || evnet.key == 'w' || evnet.key == 'ArrowUp') {
                    evnet.preventDefault()
                    this.setjump()
                }
                if (evnet.key == 'ArrowDown' || evnet.key == 's' || evnet.key == 'Shift') {
                    evnet.preventDefault()
                    this.setcrowDown()
                }
            }
        })
        window.addEventListener("keyup", (event) => {
            if (event.key == 'ArrowDown' || event.key == 's' || event.key == 'Shift') {
                this.setcrowUp()
            }
        })
        this.akadalyok()
    }
    setjump() {
        if (!this.#isJumping || !this.#isCrowing) {
            this.#isJumping = true
            this.#element.classList.add("jumping")
            this.#jumpTimeout = setTimeout(() => {
                this.#element.classList.remove("jumping")
                this.#element.src = "img/allo.png"
                this.#isJumping = false
            }, 800);
        }
        this.#element.src = "img/ugro.png"
    }
    setcrowDown() {
        if (!this.#isJumping || !this.#isCrowing) {
         
        this.#isCrowing = true
        this.#element.classList.add("crouching")
        this.#element.src = "img/gugolo.png"
        }
        
    }
    setcrowUp() {
        this.#isCrowing = false
        this.#element.classList.remove("crouching")
        this.#element.src = "img/allo.png"
    }
    resetGame() {
        clearInterval(this.#akadalyokInterval)
        this.#akadalyokInterval = null
        Dino.resetGameEnd()
        this.akadalyok()
    }
    remove() {
        var akadaly = document.querySelectorAll(".object")
        var karakter = this.#element.getBoundingClientRect()
        for (let i = 0; i < akadaly.length; i++) {
            var akad = akadaly[i].getBoundingClientRect()
            if (karakter.left < akad.right && karakter.right > akad.left && karakter.top < akad.bottom && karakter.bottom > akad.top) {
                clearInterval(this.#akadalyokInterval)
                Dino.setGameEnd()
                return
            }
        }
    }
}