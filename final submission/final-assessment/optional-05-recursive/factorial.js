function factorial(n) {
  // Basis: jika n adalah 0, kembalikan 1
  if (n === 0) return 1;

  // Rekusif: kembalikan n dikalikan dengan faktorial dari n-1
  return n * factorial(n - 1);
}

// Jangan hapus kode di bawah ini!
export default factorial;
