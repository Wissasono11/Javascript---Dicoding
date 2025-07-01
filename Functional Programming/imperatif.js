// imperatif adalah programming style yang mengutamakan langkah-langkah
// atau instruksi yang harus diikuti untuk mencapai suatu tujuan.

// contoh kode program imperatif
const names = ['Alice', 'Bob', 'Charlie', 'David'];

const newNamesWithExcMark = [];

for (let i = 0; i < names.length; i++){
    newNamesWithExcMark.push(`${names[i]}!`);
}

console.log(newNamesWithExcMark); // ['Alice!', 'Bob!', 'Charlie!', 'David!']