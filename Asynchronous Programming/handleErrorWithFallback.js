import { makeCoffee, sendcoffee } from './makeCoffeeWithHandleError'

const order = 'Kopi Espresso';

console.log(`Saya memesan ${order} di kafe`);

makeCoffee(order, (makeCoffeeError, makeCoffeeData) => {
    if(makeCoffeeError) {
        console.error(`Gagal membuat kopi: ${makeCoffeeError.message}`);
        return;
    }

    sendCoffee(makeCoffeeData, (sendCoffeeError, sendCoffeeData) => {
        if(sendCoffeeError){
            console.error(`Gagal mengantarkan kopi: ${sendCoffeeError.message}`);
            return;
        }

        console.log(`Kopi ${sendCoffeeData} sudah siap, silakan dinikmati!`);
        console.log(`Saya mendapatkan ${sendCoffeeData} kopi dan menghabiskannya.`);
    });
});