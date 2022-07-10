
let n = [1, 2, 3,4,5,6,7, 8,9,10,11, 20,30,40,50,60,-1]
var saida = 0

//TODO: Complete os espaços em branco com uma possível solução para o desafio
        
for (let i = 0; i < n.length; i++){

    if(n[i] == 0){
        var saida = 0
    }

    else if (n[i] < 0){
        var saida = ''
    }

    else{
        var saida = n[i] - 1;
    }

    console.log(saida)

}