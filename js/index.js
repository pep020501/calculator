const num1 = document.getElementById('number1');
const num2 = document.getElementById('number2');
const results = document.getElementById('result');
const operations = document.querySelectorAll('button');
let operationSelect; 
let firstNum; 
let secondNum;
let displayResults;

operations.forEach((operation) =>
     operation.addEventListener("click", (e) =>{ //adds an event listener for every button 
      operationSelect = e.target.id;  //gets the id of the selected operation 
      firstNum = parseFloat(num1.value); //sets the value of the number(s) based on user input 
      secondNum = parseFloat(num2.value); 
     displayResult(); //calls the display function 
}));

function displayResult(){ //performs the selected operation on the two numbers
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
            displayResults = "Divide by 0 error"; //returns an error if user tries to divide by 0 
        } else{
        displayResults = firstNum / secondNum;
        }
    }
    results.innerHTML = displayResults; //returns the result of the operation 

}