const leaderboard = [
  { name: "ShadowNinja_99", score: 11850 },
  { name: "PixelQueen", score: 11420 },
  { name: "VortexRider", score: 10900 },
  { name: "CyberSamurai", score: 10750 },
  { name: "CosmicBlaze", score: 10400 },
  { name: "NovaStrike", score: 10150 },
  { name: "ApexPredator", score: 9800 },
  { name: "PhantomEcho", score: 9550 },
  { name: "DriftKing_X", score: 9200 },
  { name: "HyperDrive", score: 8950 },
  { name: "ByteBandit", score: 8600 },
  { name: "SolarFlare", score: 8350 },
  { name: "IronClad", score: 8100 },
  { name: "QuantumLeap", score: 7850 },
  { name: "MysticWave", score: 7600 },
  { name: "ThunderBolt", score: 7350 },
  { name: "AlphaWolf", score: 7100 },
  { name: "FrostBite", score: 6850 },
  { name: "NeonRider", score: 6600 },
  { name: "BlazeStorm", score: 6350 },
  { name: "SkyWalker", score: 6100 },
  { name: "ViperStrike", score: 5850 },
  { name: "OmegaRay", score: 5600 },
  { name: "Titanium", score: 5350 },
  { name: "PhoenixRise", score: 5100 },
  { name: "SilverHawk", score: 4850 },
  { name: "StormChaser", score: 4600 },
  { name: "InfernoX", score: 4350 },
  { name: "ShadowRunner", score: 4100 },
  { name: "ZeroGravity", score: 3850 },
  { name: "RookieOne", score: 2100 }
];
var gameInterval = null
var gameArea = document.querySelector(".jatek")
var akadaly=["img/ceruza.png", "img/fuzet.png", "img/konyvek.png" , "img/kuka.png"]
var ido=0
var inetrvallIdo=0
var pont=0
var alma=document.querySelector(".alma")

frissit()
function akadalyok(){
    if (!gameInterval) {
        gameInterval = setInterval(() => {
            var y
            var speed = 0.56 + Math.random() * 0.0001
            var img=Math.floor(Math.random()*((akadaly.length)-1))
            var magassagok=[68,112,90]
            if(img==0){
                y =gameArea.offsetHeight-magassagok[Math.floor(Math.random()*3)] 
            }else{
                y=gameArea.offsetHeight-68
            }
            var gyumolcs = new DinosJatek(100, y, speed, ".jatek", akadaly[img])
            gyumolcs.move()
        }, inetrvallIdo);
    }
}
document.querySelector(".jatek").addEventListener('click', ()=>{
    inetrvallIdo=2500
    ido=0
    setInterval(() => {
        ido+=5
        if (ido%25==0) {
            inetrvallIdo-1000
            clearIntervall(gameInterval)
        }
        document.querySelector(".time span").innerHTML=(ido-(ido/5)*4)
        
        akadalyok()
    }, 1000);
    setInterval(() => {
        document.querySelector(".score span").innerHTML=pont++
    },50);
})

function frissit(){
    alma.innerHTML=""
    for (let i = 0; i < leaderboard.length; i++) {
        alma.innerHTML+=`
            <li class="list-group-item d-flex justify-content-between align-items-center">
                <span class="badge text-bg-primary rounded-pill">${i+1}</span>
                ${leaderboard[i].name}
                <span class="pontszam">${leaderboard[i].score}</span>
            </li>`
    }

}