// teknik currying adalah teknik untuk mengubah fungsi dengan banyak 
// argumen menjadi fungsi dengan satu argumen yang mengembalikan fungsi lain.
// teknik ini memungkinkan kita untuk membuat fungsi yang lebih 
// fleksibel dan reusable.

function adjectivfy(adjective){
    return function (noun){
        return `${noun} ${adjective}`;
    }
}

function multipleBy(x){
    return function (y){
        return x * y;
    }
}

const coolifer = adjectivfy('cool');
const coolCat = coolifer('cat');

const multipleByFive = multipleBy(5);

console.log(coolifer('dog')); // dog cool
console.log(coolCat); // cat cool
console.log(multipleByFive(10)); // 50
console.log(multipleByFive(20)); // 100