const sesuatu = {};
const sesuatuYangLain = {name: "Bayu", gender: "Laki-laki" }

const sesuatuYangLainLagi = {
    name: "Bayu",
    gender: "Laki-laki",
    age: 20,
    location: "Yogyakarta",
};

// cara mengakses properti objek
const sesuatuYangLainLagiYangLainLagi =  {
    name: "Dicoding",
    'last name': "Indonesia",
    age: 9,
    location: "Jakarta",
};

console.log(sesuatuYangLainLagiYangLainLagi.name);
console.log(sesuatuYangLainLagiYangLainLagi['last name']);
console.log(sesuatuYangLainLagiYangLainLagi.age);
console.log(sesuatuYangLainLagiYangLainLagi. location)
console.log(sesuatuYangLainLagiYangLainLagi)

// cara mengakses menggunakan objek destructuring
const { name, gender } = sesuatuYangLain;
console.log(name, gender)

// atau memanfdaatkan default value saat destructuring
const { nama, gende, age, location = "Sampit"} = sesuatuYangLainLagi;
console.log(location)