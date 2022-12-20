const teste = "tarcizo" 

function decoder(text){
    const arrDecoder = [];

    for(let i = 0; i < text.length; i++){
        if(text[i] == "i"){
            arrDecoder[i] = "imes";
        }else{
            arrDecoder[i] = text[i];
        }
    }

    return arrDecoder
}

//concatenacao
function juntaPalavra(arr){
    let palavra = ""
    for (let i = 0; i < arr.length; i++) {
        palavra = palavra + arr[i] 
    }
    return palavra
}

const arrayDecodificado = decoder(teste);
const palavraJunta = juntaPalavra(arrayDecodificado);
console.log(arrayDecodificado);
console.log(palavraJunta)



