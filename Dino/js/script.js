var gameInterval = null
var gameArea = document.querySelector(".jatek")
var akadaly=["img/ceruza.png", "img/fuzet.png", "img/konyvek.png" , "img/kuka.png"]
var ido=0
var inetrvallIdo=0

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
        document.querySelector(".score span").innerHTML=(ido-(ido/5)*4)
        akadalyok()
    }, 1000);
})