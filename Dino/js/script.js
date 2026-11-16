const leaderboard = [
    { name: "NovaStrike", score: 1015 },
    { name: "ShadowNinja_99", score: 1185 },
    { name: "PixelQueen", score: 1142 },
    { name: "CyberSamurai", score: 1075 },
    { name: "HyperDrive", score: 895 },
    { name: "ApexPredator", score: 980 },
    { name: "PhantomEcho", score: 955 },
    { name: "CosmicBlaze", score: 1040 },
    { name: "DriftKing_X", score: 920 },
    { name: "ByteBandit", score: 860 },
    { name: "MysticWave", score: 760 },
    { name: "IronClad", score: 810 },
    { name: "SolarFlare", score: 835 },
    { name: "QuantumLeap", score: 785 },
    { name: "NeonRider", score: 660 },
    { name: "AlphaWolf", score: 710 },
    { name: "FrostBite", score: 685 },
    { name: "ThunderBolt", score: 735 },
    { name: "BlazeStorm", score: 635 },
    { name: "OmegaRay", score: 560 },
    { name: "SkyWalker", score: 610 },
    { name: "Titanium", score: 535 },
    { name: "ViperStrike", score: 585 },
    { name: "PhoenixRise", score: 510 },
    { name: "SilverHawk", score: 485 },
    { name: "StormChaser", score: 460 },
    { name: "InfernoX", score: 435 },
    { name: "ShadowRunner", score: 410 },
    { name: "RookieOne", score: 210 },
    { name: "VortexRider", score: 1090 },
    { name: "ZeroGravity", score: 385 }
];
var gameInterval = null
var pontInterval = null
var idoInterval = null
var jatekVegeIdo = null
var gameArea = document.querySelector(".jatek")
var akadaly = ["img/ceruza.png", "img/fuzet.png", "img/konyvek.png", "img/kuka.png"]
var min = 0, sec = 0, pont = 0
var inetrvallIdo = 2500
var alma = document.querySelector(".alma")
var d
var bejelentkezve = false
var sebesseg = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--speed'))
leaderboard.sort().reverse()

var modal = document.querySelector(".jatekModal")
var jatekModal = bootstrap.Modal.getOrCreateInstance(modal)
document.querySelector(".bejelentkez").classList.remove("hidde")
document.querySelector(".kijelentkezes").classList.add("hidde")

var mentettFelhasznalo = JSON.parse(
    localStorage.getItem("bejelentkezettFelhasznalo")
)
if (mentettFelhasznalo != null) {
    if (mentettFelhasznalo.felhasznalo != undefined) {
        mentettFelhasznalo = mentettFelhasznalo.felhasznalo
    }
    if (mentettFelhasznalo.keresztNev != undefined &&
        mentettFelhasznalo.vezetekNev != undefined &&
        mentettFelhasznalo.felhasznaloNev != undefined &&
        mentettFelhasznalo.email != undefined) {
        account = new Felhasznalo(
            mentettFelhasznalo.keresztNev,
            mentettFelhasznalo.vezetekNev,
            mentettFelhasznalo.felhasznaloNev,
            mentettFelhasznalo.email
        )
        bejelentkezve = true
    }
}

document.querySelector(".login").addEventListener('click', () => {
    var keresztNev = document.querySelector(".validationCustom01").value
    var vezetekNev = document.querySelector(".validationCustom02").value
    var felhasznaloNev = document.querySelector(".validationCustomUsername").value
    var email = document.querySelector(".validationCustom03").value
    account = new Felhasznalo(keresztNev, vezetekNev, felhasznaloNev, email)
    bejelentkezve = true
    if (bejelentkezve) {
        var felhasznalo = {
            keresztNev: keresztNev,
            vezetekNev: vezetekNev,
            felhasznaloNev: felhasznaloNev,
            email: email
        }
        document.querySelector(".bejelentkez").classList.add("hidde")
        document.querySelector(".kijelentkezes").classList.remove("hidde")
        toastUzenet("Sikeres bejelentkezés!")
        localStorage.setItem("bejelentkezettFelhasznalo", JSON.stringify(felhasznalo))
    }
})

function ranglistabaMent() {
    var nev
    if (bejelentkezve) {
        nev = account.getFelhasznaloNev()
        var index = -1
        var voltBenne = false
        for (let i = 0; !voltBenne && i < leaderboard.length; i++) {

            if (leaderboard[i].name == nev) {
                index = i
                voltBenne = true
            }
        }
        if (index != -1) {
            if (pont > leaderboard[index].score) {
                leaderboard[index].score = pont
            }
        } else {
            leaderboard.push({
                name: nev,
                score: pont
            })
        }
        leaderboard.sort().reverse()

        localStorage.setItem("leaderboard", JSON.stringify(leaderboard))
    }
}
var toastElem = document.querySelector("#liveToast")

var toast = new bootstrap.Toast(toastElem, {
    delay: 5000
})
function toastUzenet(uzenet) {
    document.querySelector(".toast-body p").innerHTML = uzenet

    var toastElem = document.querySelector(".toast")
    var toast = bootstrap.Toast.getOrCreateInstance(toastElem)
    toast.show()
}

toast.show()
frissit()

function placeDino() {
    var x = 180 + "px"
    var y = 240 + "px"
    d = new Dino(x, y, ".jatek")
}
placeDino()
vegeE()
toastUzenet("Játék indításához nyomd meg a Space-t!")
window.addEventListener('keydown', (event) => {
    if (!document.querySelector("#exampleModal.show")) {
        if (event.key == ' ') {
            game()
        }
    }
})

function game() {
    if (!Dino.getGameEnd()) {
        if (gameInterval == null) {
            gameInterval = setInterval(() => {
                var y
                var speed = sebesseg
                var img = Math.floor(Math.random() * (akadaly.length))
                var magassagok = [68, 128, 90]
                if (img == 0) {
                    y = gameArea.offsetHeight - magassagok[Math.floor(Math.random() * 3)]
                } else {
                    y = gameArea.offsetHeight - 68
                }
                var akadalyok = new DinosJatek(100, y, speed, ".jatek", akadaly[img])
                akadalyok.move()
            }, inetrvallIdo)
            min = 0
            sec = 0
            pont = 0
            idoInterval = setInterval(() => {
                sec++
                if (sec >= 60) {
                    sec = 0
                    min++
                }
                document.querySelector(".time .min").innerHTML = String(min).padStart(2, "0")
                document.querySelector(".time .sec").innerHTML = String(sec).padStart(2, "0")
            }, 1000)
            pontInterval = setInterval(() => {
                document.querySelector(".score span").innerHTML = pont++
                if (pont % 150 == 0) {
                    sebesseg += 0.25
                }
            }, 50)
        }
    }
}

function stop() {
    clearInterval(gameInterval)
    clearInterval(pontInterval)
    clearInterval(idoInterval)
    gameInterval = null
    pontInterval = null
    idoInterval = null
    document.querySelectorAll(".object").forEach(obj => obj.remove())
}

function vegeE() {
    if (jatekVegeIdo == null) {
        jatekVegeIdo = setInterval(() => {
            if (Dino.getGameEnd() && gameInterval != null) {
                stop()
                if (bejelentkezve) {
                    ranglistabaMent()
                }
                modalKiIr()
            }
        }, 20);
    }
}

document.querySelector(".jatekModal .resetGame").addEventListener('click', () => {
    stop()
    document.querySelector(".score span").innerHTML = "0"
    document.querySelector(".time .min").innerHTML = "00"
    document.querySelector(".time .sec").innerHTML = "00"
    var modal = document.querySelector(".jatekModal")
    var jatekModal = bootstrap.Modal.getOrCreateInstance(modal)
    jatekModal.hide()
    sebesseg = 1
    d.resetGame()
    frissit()
})

function modalKiIr() {
    document.querySelector(".jatekModal .min").innerHTML = (String)(min).padStart(2, "0")
    document.querySelector(".jatekModal .sec").innerHTML = (String)(sec).padStart(2, "0")
    document.querySelector(".jatekModal .eredmeny").innerHTML = pont

    jatekModal.show()
}

function deSzeretekSzortirozni() {
    for (let i = 0; i < leaderboard.length - 1; i++) {
        var sor = 0
        for (let j = i; j < leaderboard.length; j++) {
            if (leaderboard[i].score < leaderboard[j].score) {
                sor = { name: leaderboard[i].name, score: leaderboard[i].score }
                leaderboard[i] = leaderboard[j]
                leaderboard[j] = sor
            }
        }
    }
}

function frissit() {
    ranglistabaMent()
    deSzeretekSzortirozni()
    alma.innerHTML = ""
    for (let i = 0; i < leaderboard.length; i++) {
        var szin = "secondary"
        if (i == 0) {
            szin = "success"
        } else if (i < 5) {
            szin = "info"
        } else if (i > leaderboard.length - 6) {
            szin = "danger"
        }
        alma.innerHTML += `
            <li class="list-group-item d-flex justify-content-between align-items-center">
                <span class="badge text-bg-${szin} rounded-pill">${i + 1}</span>
                ${leaderboard[i].name}
                <span class="pontszam">${leaderboard[i].score}</span>
            </li>`
    }
    document.querySelector(".elso .szoveg").innerHTML = `
        <h6 class="fw-bold mb-1">${leaderboard[0].name}</h6>
        <span class="badge bg-secondary rounded-pill">${leaderboard[0].score} pont</span>`
    document.querySelector(".masodik .szoveg").innerHTML = `
        <h6 class="fw-bold mb-1">${leaderboard[1].name}</h6>
        <span class="badge bg-secondary rounded-pill">${leaderboard[1].score} pont</span>`
    document.querySelector(".harmadik .szoveg").innerHTML = `
        <h6 class="fw-bold mb-1">${leaderboard[2].name}</h6>
        <span class="badge bg-secondary rounded-pill">${leaderboard[2].score} pont</span>`
}

document.querySelector(".logout").addEventListener('click', () => {
    if (confirm("Biztosanki jelentkezik?")) {
        localStorage.removeItem("bejelentkezettFelhasznalo")
        account = null
        toastUzenet("Sikeres kijelentkezés!")
        bejelentkezve = false
        document.querySelector(".validationCustom01").value = ""
        document.querySelector(".validationCustom01").classList.remove("is-valid")
        document.querySelector(".validationCustom01").classList.remove("is-invalid")
        document.querySelector(".valid-feedback .keresztNev").innerHTML = ""

        document.querySelector(".validationCustom02").value = ""
        document.querySelector(".validationCustom02").classList.remove("is-valid")
        document.querySelector(".validationCustom02").classList.remove("is-invalid")
        document.querySelector(".valid-feedback .vezetekNev").innerHTML = ""

        document.querySelector(".validationCustomUsername").value = ""
        document.querySelector(".validationCustomUsername").classList.remove("is-valid")
        document.querySelector(".validationCustomUsername").classList.remove("is-invalid")
        document.querySelector(".valid-feedback .felhasznaloNev").innerHTML = ""

        document.querySelector(".validationCustom03").value = ""
        document.querySelector(".validationCustom03").classList.remove("is-valid")
        document.querySelector(".validationCustom03").classList.remove("is-invalid")
        document.querySelector(".valid-feedback .emailCim").innerHTML = ""

        document.querySelector(".bejelentkez").classList.remove("hidde")
        document.querySelector(".kijelentkezes").classList.add("hidde")
    }
})