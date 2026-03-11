function generateMoves(n,from,to,aux,moves){

if(n===1){
moves.push([from,to])
return
}

generateMoves(n-1,from,aux,to,moves)

moves.push([from,to])

generateMoves(n-1,aux,to,from,moves)

}

function autoSolve(){

const moves=[]

generateMoves(diskCount,"A","C","B",moves)

let i=0

const interval=setInterval(()=>{

if(i>=moves.length){
clearInterval(interval)
return
}

moveDisk(moves[i][0],moves[i][1])
i++

},500)

}
