'use strict';

const $btnsEl = document.querySelectorAll("button");
const $resultEl =  document.getElementById("result")

console.log($resultEl);



for(let i = 0; i < $btnsEl.length; i++){
  $btnsEl[i].addEventListener("click", () => {
        const $btnValue = $btnsEl[i].textContent;
        if($btnValue === "AC"){
            clearResult();  
        }else if($btnValue === "+/-"){
            changeValue();
            console.log($btnValue)
        }else if($btnValue === "="){
            calculateResult();
        }else{
            appendValue($btnValue);
        }

    });
}

function clearResult(){
    $resultEl.value = "";
}

function calculateResult(){
    $resultEl.value = eval($resultEl.value);
}


function appendValue($btnValue){
    $resultEl.value += $btnValue;
}


