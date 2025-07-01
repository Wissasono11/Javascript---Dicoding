// contoh kode program yang berisikan elemen array deret angka dari 0 hingga n.
function generateArray(n){
    const result = [];
    for (let i = 0 ; i <= n; i++){
        result.push(i);
    }
    return result;
}

console.log(generateArray(10)); // Output: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// versi Function Programming
function generateArrayFP(n) {
    return Array.from({ length: n + 1 }, (_, i) => i);
}
console.log(generateArrayFP(10)); // Output: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]