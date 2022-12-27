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
 botDescod.addEventListener('click', () => {textResul.value = desCriptografar()})
