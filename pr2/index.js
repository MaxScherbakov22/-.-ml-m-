// Завдання 1 
function getAge () {
    let age = parseInt(prompt("ваш вік:"))
    if (age<18) {
        alert("вхід заборонено")
    } else if(age<=65) {
        alert("ласкаво просимо")
    } else {
        alert("будь ласка. будьте обережні!")
    } 
} 
getAge ()


// Завдання 2 
function parnie () {
let n = prompt("Введіть число n:");
n = parseInt(n);

for (let i = 2; i <= n; i += 2) {
    console.log(i);
 }
}
parnie ()


//Завдання 3 
 function NumberFactorial () {  
     let n = prompt("Введіть число n:");
n = parseInt(n);
let factorial = 1;
let i = 1;
while (i <= n) {
    factorial *= i;
    i++;
console.log(factorial);
 }
}
NumberFactorial ()


//Завдання 4 
function KalkulatorNumber () { 
 let a = +prompt("Введіть 1 число:");
let b = +prompt("Введіть 2 число:");
let op = prompt("Введіть знак (+, -, *, /):");
let result = op === "+" ? a + b :
             op === "-" ? a - b :
             op === "*" ? a * b :
             op === "/" ? (b !== 0 ? a / b : "Ділити на нуль неможливо.") :
             "Невірно.";
alert(result);
 }
}
KalkulatorNumber ()
