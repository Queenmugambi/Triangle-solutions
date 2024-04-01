function isPrime(num) {
    if (num <= 1) return false;
    if (num === 2) return true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function filterPrimes(numbers) {
    return numbers.filter(num => isPrime(num));
}

// Example usage:
const inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(filterPrimes(inputArray)); // Output: [2, 3, 5, 7]
