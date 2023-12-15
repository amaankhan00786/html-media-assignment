let num1 = 20;
let num2 = 30;
let operator = "+"
switch (num1, num2, operator) {
    case "+":
     console.log(num1 + num2 );
        break;
    case "-":
         console.log(num1 - num2 );
        break;
    case "*":
         console.log(num1 * num2 );
        break;
    case "/":
       console.log(num1 / num2 );
        break;

    default:
        console.log("Invalid operator");
        break;
}