// map dapat dibuat menggunakan constructor
const map = new Map();

// menambahkan properti ke dalam map
const product = new Map([
    ['Shoes', 100],
    ['Shirt', 50],
    ['Hat', 20]
]);

console.log(product);

// menyimpan nilai di Map
const user = new Map();
user.set('name', 'Asep Reinjders')
console.log(user);

const peta = new Map();
peta.set(1, 'this is number one')
console.log(peta); 

// cara mengakses nilai di Map
const productName = new Map()
productName.set('Klambi', 'ini cara mengakses nilai di Klambi')
console.log(productName.get('Klambi'))

// cara menghapus nilai di Map
const nickname = new Map()
map.set('nickname', 'Klausss Verstappen.')
map.set('second nickname', 'Kubernetes.')
map.delete('nickname')
console.log(map)