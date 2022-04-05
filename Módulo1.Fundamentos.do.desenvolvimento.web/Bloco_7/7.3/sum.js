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

module.exports = { sum, myRemove }