var tesztDino = new Dino(180, 240, ".teszt")

console.assert(tesztDino instanceof Dino, "Hiba a konstruktorban!")

console.assert(Dino.getGameEnd() === false, "Hiba a getGameEnd() metódusban!")

Dino.setGameEnd()
console.assert(Dino.getGameEnd() === true, "Hiba a setGameEnd() metódusban!")

Dino.resetGameEnd()
console.assert(Dino.getGameEnd() === false, "Hiba a resetGameEnd() metódusban!")

console.assert(document.querySelector(".teszt .dino") !== null, "Hiba a createDino() metódusban!")

tesztDino.setjump()
console.assert(document.querySelector(".teszt .dino").src.includes("ugro.png"), "Hiba a setjump() metódusban!")

tesztDino.setcrowDown()
console.assert(document.querySelector(".teszt .dino").src.includes("gugolo.png"), "Hiba a setcrowDown() metódusban!")

tesztDino.setcrowUp()
console.assert(document.querySelector(".teszt .dino").src.includes("allo.png"), "Hiba a setcrowUp() metódusban!")