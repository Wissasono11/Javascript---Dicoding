// Promise adalah sebuah objek yang mewakili penyelesaian (atau kegagalan) dari operasi asynchronous.
// Promise memungkinkan kita untuk menangani operasi asynchronous dengan cara yang lebih terstruktur dan mudah dibaca.
// Promise memiliki tiga status:
// 1. Pending: Status awal, promise belum selesai.
// 2. Fulfilled: Promise berhasil diselesaikan.
// 3. Rejected: Promise gagal diselesaikan.

// contoh penggunaan Promise:
function onFullFilled(doSomethingData){
    console.log(doSomethingData);
}

function onRejected(doSomethingError){
    console.log(doSomethingError);
}

doSomething().then(onFullFilled, onRejected);

// bagaimana cara memanggil doSomethingData?