// spread operator ditandai dengan titik tiga (...)
const obj1 = { name: 'Build With Angga'};
const obj2 = { lastname: 'Indonesia', addres: 'Bandung'};
const newObj = {...obj1, ...obj2};

console.log(newObj)

// spread juga cocok digunakan untuk menggabungkan object
const originalObj = { name: 'Build With Angga', age: 5 };
const copyObj = { ...originalObj };
console.log(copyObj)

// juga cocok untuk menggabungkan array
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const newArr = [...arr1, ...arr2];
console.log(newArr);

// atau elemen array yang berbeda tipe data
const userName = ['Asep', 'Klaus', 'Budi'];
const userAge = [20, 30, 40];
const user = [...userName, ...userAge];
console.log(user);