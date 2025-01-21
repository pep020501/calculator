const num1 = document.getElementById('number1');
const num2 = document.getElementById('number2');
const results = document.getElementById('result');
const operations = document.querySelectorAll('button');
let operationSelect; 
let firstNum; 
let secondNum;
let displayResults;

operations.forEach((operation) =>
     operation.addEventListener("click", (e) =>{
      operationSelect = e.target.id; 
      firstNum = parseFloat(num1.value);
      secondNum = parseFloat(num2.value); 
     displayResult();
}));

function displayResult(){
    if(operationSelect == "addition"){
        displayResults = firstNum + secondNum; 
    }
    if(operationSelect == "subtraction"){
        displayResults = firstNum - secondNum;
    }
    if(operationSelect == "multiplication"){
        displayResults = firstNum * secondNum;
    }
    if(operationSelect == "division"){
        if(secondNum == 0){
            displayResults = "Divide by 0 error";
        } else{
        displayResults = firstNum / secondNum;
        }
    }
    results.innerHTML = displayResults;

}