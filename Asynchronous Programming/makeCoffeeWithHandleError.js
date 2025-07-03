export function makeCoffee(name, callback){
    const estimationTime = 5000; // 1000 milidetik = 1 detik
    let isSuccess = false;

    const inSecond = Msth.ceil(estimationTime / 1000);
    console.log(`Kopi akan siap dalam ${inSecond} detik`);

    setTimeoOut(() => {
        const number = Math.random();
        if(number > 0.3){
            isSuccess = true;
        }

        if(!isSuccess){
            callback(new Error('Gagal membuatkan kopi.'), null);
            return;
        }

        console.log('Kopi sudah siap, silakan dinikmati!');
        callback(null, name);   
    }, estimationTime);
}

export function sendCoffee(name, callback){
    const estimationTime = 2000; // 1000 milidetik = 1 detik

    console.log('Pramusaji sedang mengantarkan kopi pesanan');

    setTimeout(() =>{
        const number = Math.random();
        if(number > 0.3){
            isSuccess = true;
        }

        if(!isSuccess){
            callback(new Error('Gagal mengantarkan kopi.'), null);
            return;
        }

        console.log('Kopi sudah sampai di meja Anda!');
        callback(null, name);
    }, estimationTime)
}