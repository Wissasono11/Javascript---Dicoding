// terdapat 2 jeni export: yaitu named export dan default export 
// named export adalah export yang bisa diimport dengan nama yang sama atau berbeda
// default export adalah export yang hanya bisa diimport dengan nama yang sama

// contoh named export sebelum deklarasi
export const name = 'John Doe';
export const age = 30;

// contoh named export setelah deklarasi 
const city = 'New York';
export { city };


export default function sayHi() {
  console.log('Hai, ini default export dari anotherfile.mjs');
}

export function sayGoodBye() {
  console.log('Bye, ini named export dari anotherfile.mjs');
}