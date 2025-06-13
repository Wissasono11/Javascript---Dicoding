function greetingMessage(){
    return "Hello, welcome to our service!";
    console.log("Baris ini tidak akan dieksekusi karena return sudah ada")
}

const message = greetingMessage();
console.log(message);

function convertCelciusToFahrenheit(temperature){
     const result = (9 / 5) * temperature + 32;
     return result; 
}

const temperatureFahrenheit = convertCelciusToFahrenheit(90);
console.log("Hasil konversi suhu: ", temperatureFahrenheit); 