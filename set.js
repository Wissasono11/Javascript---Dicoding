// cara membuat set
const set = new Set();

const productSet = new Set(['Shoes', 'Shirt', 'Hat']);
console.log(productSet)

// cara menyimpan nilai di Set
// const userSet = new Set();
// set.add('Asep Reinjders');
// set.add('Klaus Verstappen');
// set.add('Kubernetes');
// console.log(set);

// cara mengakses nilai di Set 
const userUsingFor = new Set();
set.add('Budi Lekatompessy')
set.add('Asep Bakarbessy')
set.add('Klaus Bakrieverssy')

for(const userPrintUsingFor of set){
    console.log(userPrintUsingFor)
}

// atau menggunakan foreach
const userForech = new Set();
set.add('Asep Reinjders');
set.add('Klaus Verstappen');
set.add('Kubernetes');

set.forEach((value) => console.log(value));

// menghapus nilai di Set
set.delete('Klaus Verstappen');
console.log(set);
