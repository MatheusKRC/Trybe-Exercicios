const sum = (a, b) => {
    if (typeof a === 'string' || typeof b === 'string') {
        throw new Error('parameters must be numbers')
    } return a + b;

}

const myRemove = (arr, item) => {
    let newArr = [];
    for (let index = 0; index < arr.length; index += 1) {
        if (item !== arr[index]) {
            newArr.push(arr[index]);
        }
    }
    return newArr;
}

const myFizzBuzz = (num) => {
    if (typeof num !== 'number') return false;
    if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
    if (num % 3 === 0) return 'fizz';
    if (num % 5 === 0) return 'buzz';
    return num;
}

const encode = (Codificar) => {
    for (i = 0; i < Codificar.length; i += 1) {
        Codificar = Codificar.replace(/e/i, 2);
        Codificar = Codificar.replace(/a/i, 1);
        Codificar = Codificar.replace(/i/i, 3);
        Codificar = Codificar.replace(/o/i, 4);
        Codificar = Codificar.replace(/u/i, 5);
    }
    return Codificar;
}

const decode = (Decodificar) => {
    for (i = 0; i < Decodificar.length; i += 1) {
        Decodificar = Decodificar.replace(/1/i, 'a');
        Decodificar = Decodificar.replace(/2/i, 'e');
        Decodificar = Decodificar.replace(/3/i, 'i');
        Decodificar = Decodificar.replace(/4/i, 'o');
        Decodificar = Decodificar.replace(/5/i, 'u');
    }
    return Decodificar;
}

module.exports = { sum, myRemove, myFizzBuzz, encode, decode }