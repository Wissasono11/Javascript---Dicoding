import { doSomething } from './utilsAsyncAwaitTryCatchDoSomething.mjs';

async function promiseWithAsyncAwait() {
    try {
        console.log('Starting the async operation...');

        const value = await doSomething();
        console.log(value);

        console.log('Ending the async operation...');

    } catch (error){
        console.error('Error occurred:', error);
    }
}

promiseWithAsyncAwait