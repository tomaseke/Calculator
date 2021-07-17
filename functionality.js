let nums = document.getElementsByClassName("numbers");
let display = document.getElementsByClassName("grid-item")[0];
let operators = document.querySelectorAll(".operator");
let allButtons = document.getElementsByClassName("grid-item");
let equalSign = document.getElementsByClassName("equals")[0];
let currentOperator = "";
let firstNum = "";
let secondNum = "";
let result = "";

function doCalc(){
    return function(){
        secondNum = display.innerHTML;
        switch(currentOperator){
            case "+":
               result = ((1000000*parseFloat(firstNum) + 1000000*parseFloat(secondNum))/1000000);
            break;
            case "–":
               result = ((1000000*parseFloat(firstNum) - 1000000*parseFloat(secondNum))/1000000);
            break;
            case "×":
               result = ((1000*parseFloat(firstNum) * 1000*parseFloat(secondNum))/1000000);
            break;
            case "÷":
               result = (1000000*firstNum) / (1000000*secondNum);
            break;
            case "%":
                result = firstNum % secondNum;
        }
        display.innerHTML = result;
        firstNum = result;
        secondNum = "";
        result = "";
        currentOperator = "";
    }
}

function operatorClicked(operator){
   return function(){
       if(operator.innerHTML == "–" && display.innerHTML == ""){
        display.innerHTML = "-";
       }
        else if(display.innerHTML != ""){
        switch(operator.innerHTML){
            case "+": currentOperator = operator.innerHTML;
            break;
            case "×": currentOperator = operator.innerHTML;
            break;
            case "÷": currentOperator = operator.innerHTML;
            break;
            case "–": currentOperator = operator.innerHTML;
            break;
            case "%": currentOperator = operator.innerHTML;
        }
        firstNum = display.innerHTML;
        display.innerHTML = "";
    }
}
}
function appendPoint(){
    return function(){
        if(!(/[.]/.test(display.innerHTML))){
            display.append(".");
        }
    }
}

// append point to display
let point = document.getElementsByClassName("point")[0];
point.addEventListener("click", appendPoint());

// append number to display
for (let item of nums){
    item.addEventListener("click", function(){display.append(item.innerHTML)});
};
// prevent select on doubleclick
for (let item of allButtons){
    item.addEventListener('mousedown', function(e){ e.preventDefault(); }, false);
}

let removeAll = document.querySelector('.remove-all');
removeAll.addEventListener("click", () => display.innerHTML = "");

let remove = document.querySelector(".delete");
remove.addEventListener("click", () => display.innerHTML = document.getElementsByClassName("grid-item")[0].innerHTML.slice(0, -1));

for (let item of operators){
    item.addEventListener("click", operatorClicked(item));
}

equalSign.addEventListener("click", doCalc());