const showText = document.querySelector("#display")
let number1Saves=0;
let number2Saves=0;
let result=0;

function press(number){
    numberPressed= number
    showText.textContent=numberPressed
}