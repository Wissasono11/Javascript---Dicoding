export function makeCoffee(name){
    return new Promise((resolve, reject) => {
        const estimationTime = 2000; // waktu estimasi dalam milidetik
        let isSuccess = false;

        const inSecond = Math.ceil(estimationTime / 1000);
        console.log(`Mohon menunggu. Pramusaji sedang membuat kopi dalam ${inSecond} detik`);

        setTimeout(() => {
            const number = Math.random();
            if(number > 0.3){
                isSuccess =true;
            }

            if(!isSuccess){
                reject(new Error(`Maaf, pramusaji gagal membuat kopi ${name}`));
                return;
            }

            console.log(`Pramusaji berhasil membuat kopi ${name}`);
            resolve(name);
        }, estimationTime)
    });
}

export function sendCoffee(name){
    return new Promise((resolve, reject) => {
        return new Promise((resolve, reject) => {
            const estimationTime = 1000; // waktu estimasi dalam milidetik
            let isSuccess = false;

            console.log(`Pramusaji sedang mengantarkan kopi ${name} ke meja Anda`);

            setTimeout(() => {
                const number = Math.random();
                if(number > 0.1){
                    isSuccess = true;
                }

                if(!isSuccess){
                    reject(new Error(`Maaf, pramusaji gagal mengantarkan kopi ${name}`));
                    return;
                }

                console.log(`Pramusaji berhasil mengantarkan kopi ${name}`);
                resolve(name);
            }, estimationTime);
        })
    })
}