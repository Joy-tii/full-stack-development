function calci(operator, num1, num2) {
    switch (operator) {
        case 'add':
            return num1 + num2;
        case 'subtract':
            return num1 - num2;
        case 'multiply':
            return num1 * num2;
        case 'divide':
            return num1 / num2;

        default:
            return 'Error'
    }
}

function userInput() {
    let operator = prompt("Enter operator :- add,substract,multiply,divide");
    let num1 = parseFloat(prompt("Enter the first number:"));
    let num2 = parseFloat(prompt("Enter the second number:"));

    if (isNaN(num1) || isNaN(num2)) {
        alert("error");
        return;
    }

    let result = calci(operator, num1, num2);

    alert(`Your Result of  ${operator}  ${num1} and ${num2}: ${result}`)
    // alert(" Your Result " + result);

}

userInput();