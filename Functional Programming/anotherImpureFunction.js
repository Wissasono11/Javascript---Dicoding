// ini adalah contoh impure function

let count = 0;

function increment(){
    count ++
}

// mengakses waktu sistem
function getCurrentTime(){
    return new Date().toLocaleTimeString();
}

// mengubah status objek yang diterima sebagai parameter
function updateStatus(user){
    user.name = 'Updated Name';
}

// menulis ke dalam berkas
const fs = require('fs');

function writeToFile(data){
    fs.writeFileSync('data.txt', data);
}