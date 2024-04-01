function generateArray(start, end) {
    const result = [];
    for (let i = start; i <= end; i++) {
        result.push(i);
    }
    return result;
}
console.log(generateArray(4, 7));
console.log(generateArray(-4, 7));
