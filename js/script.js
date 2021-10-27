function mainFunction (callback) {
    let num1 = +prompt('Введите первое число');
    let num2 = +prompt('Введите второе число');

    return callback (num1, num2);
}

function exponentiation (a, b) {
    let expResult = Math.pow(a, b);
    return alert (expResult);
}

mainFunction (exponentiation);

// *Дополнительные задания

// function multiplay (a, b) {
//     let multResult = a * b;
//     return alert (multResult);
// }
// function division (a, b) {
//     let divResult = a / b;
//     return alert (divResult);
// }
// function modulo (a, b) {
//     let modResult = a % b;
//     return alert (modResult);
// }

// mainFunction (multiplay);
// mainFunction (division);
// mainFunction (modulo);

