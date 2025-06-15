// rest operator biasanya digunakan pada parameter function 
// rest biasanya ditambahkan sebelum parameter terakhir menggunakan titik tiga (...)

function sum(...numbers){
    console.log('numbers:', numbers); 
}

sum(1, 2, 3, 4, 5); 

// rest juga memungkinkan kita untuk menulis argument tanpa batas pada function
function myUser(id, ...user){
    console.log('id:', id);
    console.log('user:', user);
}
myUser('005', 'Asep', 'Klaus', 'Budi');

// metode array length juga dapat digunakan pada rest operator
function myNumLength(... numbers){
    console.log(numbers.length)
    console.log('numbers:', numbers);
}
myNumLength(1, 2, 3, 4, 5, 6, 7, 8, 9);

// juga dapat digunakan pada destructuring array
const favoritePanganan = ['Nasi Goreng', 'Sate', 'Rendang', 'Soto Ayam Pak Yanto', 'Mie Goreng'];

const [firstPanganan, secondPanganan, ...restPanganan] = favoritePanganan;
console.log('firstPanganan:', firstPanganan);
console.log('secondPanganan:', secondPanganan);
console.log('restPanganan:', restPanganan);