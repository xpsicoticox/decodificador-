const teste = "tarcizo" 

function decoder(text){
    const arrDecoder = []

    for(let i = 0; i < text.length; i++){
        if(text[i] == "i"){
            arrDecoder[i] = "imes";
        }else{
            arrDecoder[i] = text[i];
        }
    }

    

    return arrDecoder.toString()
}



console.log(decoder(teste))