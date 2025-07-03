import { doSomething} from './promiseDoSomething.mjs'; 

function onFulfilled(doSomethingData){
    console.log('Data received:', doSomethingData);
}

function onRejected(doSomethingError){
    console.error('Error occurred:', doSomethingError);
}

doSomething().then(onFulfilled, onRejected);