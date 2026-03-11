let diskCount = 3
let moveCount = 0

const towers = {A:[],B:[],C:[]}

function startGame(){
document.getElementById("login").style.display="none"
document.getElementById("game").style.display="block"
createGame()
}

function createGame(){

["A","B","C"].forEach(t=>{
document.getElementById("t"+t).innerHTML=""
towers[t]=[]
})

moveCount=0
updateDisplays()

for(let i=diskCount;i>=1;i--){

const disk=document.createElement("div")

disk.className="disk"
disk.style.width=(i*30+40)+"px"
disk.textContent=i
disk.draggable=true
disk.dataset.size=i

disk.addEventListener("dragstart",dragStart)

document.getElementById("tA").appendChild(disk)

towers.A.push(i)

}

}

function updateDisplays(){
document.getElementById("moves").textContent=moveCount
document.getElementById("diskCountDisplay").textContent=diskCount
document.getElementById("minMoves").textContent=Math.pow(2,diskCount)-1
}

function changeDisks(change){

diskCount+=change

if(diskCount<2) diskCount=2
if(diskCount>7) diskCount=7

createGame()

}

function resetGame(){
createGame()
}
