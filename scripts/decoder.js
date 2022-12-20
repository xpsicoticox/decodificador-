const teste = "India"


export  function decoderI(text) {
    const arrDecoder = [];

    for (let i = 0; i < text.length; i++) {
        if (text[i] == "i") {
            arrDecoder[i] = "imes";
        } else {
            arrDecoder[i] = text[i];
        }
    } return arrDecoder
}

function decoderA(text) {
    const arrDecoder = [];

    for (let i = 0; i < text.length; i++) {
        if (text[i] == "a") {
            arrDecoder[i] = "ai";
        } else {
            arrDecoder[i] = text[i];
        }
    } return arrDecoder
}

function decoderE(text) {
    const arrDecoder = [];

    for (let i = 0; i < text.length; i++) {
        if (text[i] == "e") {
            arrDecoder[i] = "enter";
        } else {
            arrDecoder[i] = text[i];
        }
    } return arrDecoder
}

function decoderU(text) {
    const arrDecoder = [];

    for (let i = 0; i < text.length; i++) {
        if (text[i] == "u") {
            arrDecoder[i] = "ufat";
        } else {
            arrDecoder[i] = text[i];
        }
    } return arrDecoder
}

function decoderU(text) {
    const arrDecoder = [];

    for (let i = 0; i < text.length; i++) {
        if (text[i] == "u") {
            arrDecoder[i] = "ufat";
        } else {
            arrDecoder[i] = text[i];
        }
    } return arrDecoder
}

function decoderO(text) {
    const arrDecoder = [];

    for (let i = 0; i < text.length; i++) {
        if (text[i] == "o") {
            arrDecoder[i] = "ober";
        } else {
            arrDecoder[i] = text[i];
        }
    } return arrDecoder
}


//concatenacao
function juntaPalavra(arr) {
    let palavra = ""
    for (let i = 0; i < arr.length; i++) {
        palavra = palavra + arr[i]
    }
    return palavra
}



//let arrayDecodificado1 = decoderA(teste);
//let arrayDecodificado2 = decoderI(arrayDecodificado1)
//let arrayDecodificado3 = decoderE(arrayDecodificado2)
//let arrayDecodificado4 = decoderU(arrayDecodificado3)
//let arrayDecodificado5 = decoderO(arrayDecodificado4)
//let palavraJunta = juntaPalavra(arrayDecodificado1);
//console.log(arrayDecodificado);



//teste localStorage 
saveLocalStorage("Testeee")


