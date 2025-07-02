export function makeCoffee(){
    // 1000 milidetik = 1 detik
    const estimationTime = 5000;

    const inSecond = Math.ceil(estimationTime / 1000);
    console.log(`Kopi akan siap dalam ${inSecond} detik`);

    setTimeout(() => {
        console.log('Kopi sudah siap, silakan dinikmati!');
    }, estimationTime)
}