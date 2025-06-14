// array juga merupakan sebuah object
const array = [1, 2]
console.log(typeof array);

// array dengan constructor
const array2 = new Array();

console.log(array2);

// array dengan constructor dan inisialisasi
const array3 = new Array(1, 2, 3, 4, 5);
console.log(array3);

// sintax array from
const name = Array.from('Asep', )
console.log(name)

// atau bisa digunakan untuk menyalin array lainnya
const user = new Array("Asep", "Reinjders", "Verstappen", "Kubernetes");
const customer = Array.from(user);
console.log(customer)

// mengakses elemen array
console.log(user[0])

// manipulasi elemen array
let fruits = ['apple', 'banana', 'orange'];
fruits[2] = 'Dragon Fruit';
console.log(fruits)

// push atau menambahkan elemen di akhir array
fruits.push('Coconut')
console.log(fruits)

// menghapus elemen array
let Informatics = ["Frontend", "Backend", "Fullstack"]
delete Informatics[2];
console.log(Informatics)

// atau bisa menggunakan splice untuk menghapus elemen array
Informatics.splice(2, 1);
console.log(Informatics)

// untuk menghapus elemene pertama 
Informatics.shift()
console.log(Informatics)

// untuk menghapus elemen terakhir
let addInformatics = ["Frontend", "Backend", "Fullstack", "ML"]
addInformatics.pop();
console.log(addInformatics)

// array destructuring: untuk melihat isi dari array
const greeting = ['Oi', 'Hello']
const [greetingIndonesia, greetingEnglish] = greeting
console.log(greetingIndonesia)
console.log(greetingEnglish)

// array method seperti reverse dan sort
const IT = ['Frontend', 'Backend', 'Fullstack', 'ML', 'DevOps'];
IT.reverse();
console.log(IT)

// sort
const login = ['password','asswordp', 'woassrdp', 'possward', 'awossrpd'];
login.sort();
console.log(login);