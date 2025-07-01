// menerima argumen sebuah fungsi 
function memoize(fn){
    const cache = new Map();

    return function(...args) {
        const key = JSON.stringify(args);

        if(cache.has(key)){
            return cache.get(key);
        }

        const result = fn(...args);
        cache.set(key, result);

        return result;
    };
}

function sumArray(arr){
    if(arr.length === 0) return 0;
    return arr[0] + sumArray(arr.slice(1));
}

const memoizedSumArray = memoize(sumArray);
const largeArray = Array.from({ length: 5000 }, (_, i) => i + 1);

console.time('Memoized Sum First call');
console.log('Total:', memoizedSumArray(largeArray)); // 12502500
console.timeEnd('Memoized Sum First call'); // Memoized Sum First call: 0.123ms

console.time('Memoized Sum Second call');
console.log('Total:', memoizedSumArray(largeArray)); // 12502500
console.timeEnd('Memoized Sum Second call (Cached)'); // Memoized Sum Second call: 0.001ms
