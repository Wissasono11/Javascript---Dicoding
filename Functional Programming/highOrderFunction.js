// HOF adalah fungsi yang menerima fungsi lain sebagai argumen atau mengembalikan fungsi sebagai hasilnya. 
// HOF memungkinkan kita untuk membuat kode yang lebih fleksibel dan reusable.
// Contoh HOF adalah fungsi `map`, `filter`, dan `reduce` pada array. 
// Fungsi-fungsi ini menerima fungsi callback sebagai argumen dan menerapkannya pada setiap elemen array.

function apply(operation, ...args){
    return operation(...args);
}

function add(a, b, c) {
    return a + b + c;
}

function discount(disc, value){
    return value - (value * disc / 100);
}

const productPrice = apply(sum, 100, 200, 300);
const discountedPrice = apply(discount, 25, productPrice);

console.log(`Total price: ${productPrice}`); // Total price: 600
console.log(`Discounted price: ${discountedPrice}`); // Discounted price: