function promiseExecutor(resolve, reject){
    setTimeout(() => {
        console.log('Melakukan sesuatu sebelum promise diselesaikan');

        const number = Math.random();

        if(number > 0.5){
            resolve('You did it!')
        } else{
            reject('Something went wrong!');
        }
    }, 2000);
}

export function doSomething(){
    return new Promise(promiseExecutor);
}