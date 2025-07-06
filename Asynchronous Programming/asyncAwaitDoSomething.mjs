import { doSomething } from  '.utilsAsyncAwaitDoSomething.mjs';

// console.log('Starting the async operation...');

// doSomething() 
//  .then((value) => {
//     console.log(value);
//  });

// console.log('Ending the async operation...');

// jika menggunakan async-await

async function promiseWithAsyncAwait() {
    console.log('Starting the async operation...');

    const value = await doSomething();
    console.log(value);

    console.log('Ending the async operation...');
}

promiseWithAsyncAwait();