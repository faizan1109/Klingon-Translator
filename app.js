var translator = document.querySelector("#translator");
var inputText = document.querySelector("#input-text");
var outputDiv = document.querySelector("#output");

var url = "https://api.funtranslations.com/translate/klingon.json"

function geturl(input) {

    return url + "?" + "text=" + input
}


function errorHandler(error){
    console.log("error occured",error)
    alert("Limit exceeded!!!Come Back Later.")  
}



function eventHandler(){
    var text=inputText.value
    fetch(geturl(text))
    .then(response => response.json())
    .then(json => { 
        var translatedText=json.contents.translated;
        outputDiv.innerText=translatedText;
     } )

    .catch(errorHandler)
};

translator.addEventListener("click", eventHandler)
