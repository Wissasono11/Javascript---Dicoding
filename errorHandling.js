// throwing error
const price = 100;
const paid = 10;

if (paid < price) {
  throw new Error("Not enough money");
}

// catching error berfungsi untuk menangkap error yang terjadi 
// bisa menggunakan try...catch
try {
  if (paid < price) {
    throw new Error("Not enough money");
  }
} catch (error) {
  console.error("Karena ada error maka, blok ini akan diabaikan:");
}

// jika ingin menangkap error yang terjadi pada blok kode tertentu maka:
try{
    if (paid < price){
        throw new Error("Not enough money");
    }
} catch (error) {
    console.error("Terjadi error:", error.message);
}

// finally block digunakan untuk mengeksekusi kode yang akan selalu dijalankan
try {
  if (paid < price) {
    throw new Error("Not enough money");
  }
}
catch (error) {
    console.error("Terjadi error:", error.message);
    }
finally {
    console.log("Blok ini akan selalu dijalankan, terlepas dari apakah terjadi error atau tidak.");
}