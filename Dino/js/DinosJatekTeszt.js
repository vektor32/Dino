var tesztAkadaly = new DinosJatek(80, 240, 2, ".teszt", "img/kuka.png")

console.assert(tesztAkadaly instanceof DinosJatek, "Hiba a konstruktorban!")

console.assert(document.querySelectorAll(".teszt .object").length === 1, "Hiba a createObject() metódusban!")

console.assert(document.querySelector(".teszt .object").src.includes("kuka.png"), "Hiba a kép beállításában!")

console.assert(document.querySelector(".teszt .object").style.top === "240px", "Hiba az Y koordináta beállításában!")

console.assert(document.querySelector(".teszt .object").style.left === "80%", "Hiba az X koordináta beállításában!")

tesztAkadaly.remove()

console.assert(document.querySelector(".teszt .object") === null, "Hiba a remove() metódusban!")