import { readFile} from 'fs';

readFile('./Asynchronous Programming/sample.txt', (error, data) => {
    if(error){
        console.log(error);
        return;
    }

    const greeting = data.toString()
        .replace('%name%', 'Asep Verstappen')
        .replace('%your_name%', 'Asep')
    
    console.log(greeting);
})