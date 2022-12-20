module.exports =  function teste(){
    console.log("chamei")
}

function saveLocalStorage(arr){
    //
    const myLocalStorage = localStorage 
    const localStorageIsnull =  myLocalStorage.getItem('arrayDecoder')

    if(localStorageIsnull == null || !captureLocalStorage().flagDecoder){
        const arrDecoder = {
            flagDecoder :  true, // <--- Esse booelan vai dizer se oque vai ser armazenado la ja ta decodificado ou nao 
            arrDecoder: arr
        }

        //o navegador tem um armazenamento proprio que a gente pode usar para armazenar variaveis naquele momento e acessar dps <<-
        const myLocalStorage = localStorage //<--
        myLocalStorage.setItem('arrayDecoder', JSON.stringify(arrDecoder))
        console.log("deu")
        //captureLocalStorage()
    }
}

function captureLocalStorage(){
    
    const myLocalStorage = localStorage 
    const localStorageObject = JSON.parse(myLocalStorage.getItem('arrayDecoder'))
    return localStorageObject
}