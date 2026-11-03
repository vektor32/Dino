var gameInterval = null
var gameArea = document.querySelector(".jatek")
var akadaly=["img/ceruza.png", "img/fuzet.png", "img/konyvek.png" , "img/kuka.png"]

function akadalyok(){
    if (!gameInterval) {
        gameInterval = setInterval(() => {
            var y
            var speed = 0.56 + Math.random() * 0.0001
            var img=Math.floor(Math.random()*((akadaly.length)-1))
            if(img==0){
                y =190
            }else{
                y=225
            }
            
            var gyumolcs = new DinosJatek(100, y, speed, ".jatek", akadaly[img])
            gyumolcs.move()
        }, 2500);
    }
}
document.querySelector(".jatek").addEventListener('click', ()=>{
    setInterval(() => {
        akadalyok()
    }, 1000);
})


