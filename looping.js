// perulangan sederhana
const n = 90 // bisa mengganti nilai n sesuai dengan kebutuhan
for (let i = 0; i < n; i ++){
    console.log(`Perulangan ke-${i + 1}`);
}
 
// atau bisa melakukan perulangan pada object menggunakan for...in
const person = {name: 'John Doe', age: 30, city: 'New York', 
                occupation: 'Software Engineer'};

for (const property in person ){
    console.log(`${property}: ${person[property]}`);
}

// for ...of untuk array
const panganan = ['ayam geprek', 'mie wonton', 'nasi goreng', ' tahu tek tek', 'sate madura']

for (const item of panganan){
    console.log(item);
}

// looping dengan while
let z = 0;

while (z < 5){
    console.log(`While loop iteration: ${z}`);
    z++;
}s

// do...while loop
let j = 0;

do {
    console.log(`Do...while loop iteration: ${j}`);
    j++;
}
while (j < 5);