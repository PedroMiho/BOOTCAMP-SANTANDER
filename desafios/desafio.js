// a função gets() é implementada dentro do sistema para ler as entradas(inputs) dos dados e a função print() para imprimir a saída (output) de dados e já pula uma linha ("\n")
// Abaixo segue um exemplo de código que você pode ou não utilizar

let N = 9;
let jogador1, jogador2;
for (let i = 0; i < N; i++) {
    
    let jogador1array = ["Ataque", "Pedra", "Pedra", "Papel", "Ataque", "Papel", "Papel", "Pedra", "Ataque"]

    let jogador2array = ["Pedra", "Ataque", "Papel", "Pedra", "Papel", "Ataque", "Papel", "Pedra", "Ataque"]

    let jogador1 = jogador1array[i].toLowerCase();
    let jogador2 = jogador2array[i].toLowerCase();


    if(jogador1.toUpperCase() === "ATAQUE" && jogador2.toUpperCase() === "ATAQUE") {

        console.log("Aniquilacao mutua");
    }    
    else if (jogador1.toUpperCase() === "PAPEL" && jogador2.toUpperCase() === "PAPEL"){

    	console.log("Ambos venceram");
    }

    else if ( jogador1.toUpperCase() === "ATAQUE" && jogador2.toUpperCase() === "PEDRA") console.log("Jogador 1 venceu");
    
    else if (jogador1.toUpperCase() === "PEDRA" && jogador2.toUpperCase() === "ATAQUE") console.log("Jogador 2 venceu");
    
    else if (jogador1.toUpperCase() === "PEDRA" && jogador2.toUpperCase() === "PAPEL") console.log("Jogador 1 venceu");
    
    else if (jogador1.toUpperCase() === "PAPEL" && jogador2.toUpperCase() === "PEDRA") console.log("Jogador 2 venceu");

    else if ( jogador1.toUpperCase() === "ATAQUE" && jogador2.toUpperCase() === "PAPEL") console.log("Jogador 1 venceu");
    
    else if (jogador1.toUpperCase() === "PAPEL" && jogador2.toUpperCase() === "ATAQUE") console.log("Jogador 2 venceu");
    
    else console.log("Sem ganhador");
}
