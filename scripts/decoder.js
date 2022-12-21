 var textInput = document.getElementById('txt1')
 var textResul = document.getElementById('txt2')
 var botCod = document.getElementById('botCod')
 var botDescod = document.getElementById('botaoDescod')

 function criptografar(){
    var texto = textInput.value
    return texto.replace(/e/g, "enter").replace(/i/g, 'imes').replace(/a/g, 'ai').replace(/u/g, 'ufat').replace(/o/g, 'obes')
    //alert(resultCripto)
   
 }

 function desCriptografar(){
    var texto = textInput.value
    return texto.replace(/enter/g, "e").replace(/imes/g, 'i').replace(/ai/g, 'a').replace(/ufat/g, 'u').replace(/obes/g, 'o')
    //alert(resultCripto)
   
 }

 botCod.addEventListener('click',() =>{textResul.value = criptografar()} )
 botCod.addEventListener('click',() => {textInput.value = criptografar()})
 botDescod.addEventListener('click', () => {textResul.value = desCriptografar()})








/*let txt1 = document.getElementById('txt1')
let teste1 = 'fiizin gay'
//let a = prompt('diga algo')



//let codeButton = document.querySelector('div#botaoCod')
function botaoCodifica(){
    function decoderI(text) {
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



//let arrayDecodificado1 = decoderA(teste1);
let arrayDecodificado2 = decoderI(teste1)
//let arrayDecodificado3 = decoderE(arrayDecodificado2)
//let arrayDecodificado4 = decoderU(arrayDecodificado3)
//let arrayDecodificado5 = decoderO(arrayDecodificado4)
//let palavraJunta = juntaPalavra(arrayDecodificado5);
//let descodifica = teste1

alert(arrayDecodificado2)
    
    
}

//FINAL DA FUNÇÃO BOTAO


function decoderI(text) {
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



let arrayDecodificado1 = decoderA(teste1);
let arrayDecodificado2 = decoderI(arrayDecodificado1)
let arrayDecodificado3 = decoderE(arrayDecodificado2)
let arrayDecodificado4 = decoderU(arrayDecodificado3)
let arrayDecodificado5 = decoderO(arrayDecodificado4)
let palavraJunta = juntaPalavra(arrayDecodificado5);
let descodifica = teste1
//console.log(arrayDecodificado1);
console.log(palavraJunta)
console.log(descodifica)




//teste localStorage 
//saveLocalStorage("Teste")
*/
