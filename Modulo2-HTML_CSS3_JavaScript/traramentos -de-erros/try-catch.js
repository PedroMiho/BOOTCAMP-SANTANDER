function verificarPalindromo(string){
    if(!string) throw "String Invalida";

    return string === string.split('').reverse().join('')
}   

function tryCatchExemplo(string){ 
    try {
        verificarPalindromo(string)
    } 
    catch(e){
        console.log('corrigir o erro existente', e)
    }
    finally{
        console.log(string)
    }
}
 
tryCatchExemplo('pedro')