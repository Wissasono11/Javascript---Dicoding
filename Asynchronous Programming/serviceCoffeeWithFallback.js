import { makeCoffee, sendCoffee } from './makeCoffeeWithFallback.js';

console.log('Saya memesan kopi di kafe');

makeCoffee(() => {
    sendCoffee(() => {
        console.log('Kopi sudah siap, silakan dinikmati!');
        console.log('Saya mendapatkan kopi dan menghabiskannya');
    });
})
