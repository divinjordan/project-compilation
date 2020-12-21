const { createMatcher } = require("./regex");

const expElement = document.getElementById("exp");
const wordElement = document.getElementById("word");
const resultElement = document.getElementById("result");
const btnCheck = document.getElementById("check");
const btnDraw = document.getElementById("draw");

btnCheck.addEventListener("click",function(){

    const match = createMatcher(expElement.value);

    const result = match(wordElement.value);
    if(result){
        if(resultElement.classList.contains("alert-danger"))
            resultElement.classList.remove("alert-danger");
        resultElement.classList.add("alert-success")
        resultElement.innerText = "Accepter"
    }else{
        if(resultElement.classList.contains("alert-success"))
             resultElement.classList.remove("alert-success");
        resultElement.classList.add("alert-danger")
        resultElement.innerText = "Refuser";
    }
})

btnDraw.addEventListener("click",function(){
    console.log("draw the automaton");
});