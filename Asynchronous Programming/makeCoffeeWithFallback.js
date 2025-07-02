export function makeCoffee(callback){
    // 1000 milidetik = 1 detik
    const estimationTime = 5000;

    const inSecond = Math.ceil(estimationTime / 1000);
    console.log(`Kopi akan siap dalam ${inSecond} detik`);

    setTimeout(() => {
        console.log('Kopi sudah siap, silakan dinikmati!');

        callback();
    }, estimationTime);
}

export function sendCoffee(callback){
    // 1000 milidetik = 1 detik
    const estimationTime = 2000;

    console.log('Pramusaji sedang mengantarkan kopi pesanan');

    setTimeout(() => {
        console.log('Kopi sudah sampai di meja Anda');
        callback();
    }, estimationTime);
}