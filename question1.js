function swapCase(str) {
    return str.split('').map(char => {
        if (char === char.toUpperCase()) {
            return char.toLowerCase();
        } else {
            return char.toUpperCase();
        }
    }).join('');
}

// Example usage:
const inputString = 'The Quick Brown Fox';
console.log(swapCase(inputString)); // Output: 'tHE qUICK bROWN fOX'
