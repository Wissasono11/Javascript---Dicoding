// style guide yang ideal adalah style gude camelCase 
// untuk penamaan variabel, fungsi, dan class
// tujuannya antara lain untuk mempermudah developer lain untuk membaca kode

// contoh inkonsistensi penamaan variabel
const user_name = "John"; 

let user_age =30;

let num_a = num_b = num_c = 10;

// contoh penamaan variabel yang konsisten
const userName = "John";

let userAge = 30;

let numA = 10, numB = 10, numC = 10;

if(userAge > 18){
    console.log("You're legal.")
} 