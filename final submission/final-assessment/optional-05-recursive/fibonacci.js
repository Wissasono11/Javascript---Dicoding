function fibonacci(n) {
  // Menghasilkan array deret Fibonacci hingga elemen ke-n
  if (n === 0) return [0];
  if (n === 1) return [0, 1];

  // Rekursif untuk mendapatkan deret Fibonacci sebelumnya
  // catatan: ini adalah baris untuk perbaikan yang harus ditambahkan agar sesuai dengan output yang diharapkan
  const prev = fibonacci(n - 1);
  return [...prev, prev[prev.length - 1] + prev[prev.length - 2]];
}

// Jangan hapus kode di bawah ini!
export default fibonacci;
