//1-задание
function srednyiPositive(...numbers) {
    const positiveNumbers = numbers.filter(num => num > 0)
    const sum = positiveNumbers.reduce((acc, curr) => acc + curr, 0)
    return sum / positiveNumbers.length
}

const numbersArray = [2, -78, 45, 4, -7, -6, -10, 26, 30, 8]
console.log("Средняя арифметическая положительных чисел:", srednyiPositive(...numbersArray))

//2-задание

function sumChetnyhSquares(numbers) {
    return numbers.reduce((acc, curr) => {
        if (curr % 2 === 0) {
            return acc + curr ** 2
        }
        return acc
    }, 0)
}

const numberArray = [2, -78, 45, 4, -7, -6, -10, 26, 30, 8]
console.log("Сумма квадратов четных чисел:", sumChetnyhSquares(numbersArray))

//3-задание

function isPrime(number) {
    if (number <= 1) return false;
    if (number <= 3) return true;

    if (number % 2 === 0 || number % 3 === 0) return false;

    var i = 5;
    while (i * i <= number) {
        if (number % i === 0 || number % (i + 2) === 0) return false;
        i += 6;
    }

    return true;
}

console.log("Число 13 является простым?", isPrime(13)); // true
console.log("Число 20 является составным?", isPrime(20)); // false