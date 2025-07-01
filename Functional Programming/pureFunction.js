// pure function memiliki 2 ciri utama:
// 1. Tidak memiliki efek samping (side effect) terhadap variabel di luar fungsi.
// 2. Hasilnya selalu sama jika diberikan input yang sama.

// jika tidak mengandung 2 ciri tersebut, maka fungsi tersebut disebut impure function

// contoh kode program impure function
let valueForImpureFunction = 0;

function addWithImpureFunction(addingValue){
    valueForImpureFunction += addingValue;
    console.log(`Nilai sekarang: ${valueForImpureFunction}`);
    return valueForImpureFunction;
}

const impureResult1 = addWithImpureFunction(5); // Nilai sekarang: 5
const impureResult2 = addWithImpureFunction(10); // Nilai sekarang: 15
const impureResult3 = addWithImpureFunction(5); // Nilai sekarang: 20

console.log(impureResult1, impureResult2, impureResult3);

// contoh kode program pure function
function addWithPureFunction(valueForPureFunction, addingValue){
    return valueForPureFunction + addingValue;
}

const pureResult1 = addWithPureFunction(5, 5); // 10
console.log(pureResult1); // 10

const pureResult2 = addWithPureFunction(pureResult1, 11); 
console.log(pureResult2); 

const pureResult3 = addWithPureFunction(pureResult2, 5);
console.log(pureResult3); // 26

console.log(pureResult1, pureResult2, pureResult3); // 10 16 21