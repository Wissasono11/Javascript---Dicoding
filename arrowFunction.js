let temperatureInFahrenheit = null;

// regular function
const convertCelciusToFahrenheit = function(temperature)
{
    const result = (9 / 5) * temperature + 32;
    return result; 
}

temperatureInFahrenheit = convertCelciusToFahrenheit(90);
console.log("Hasil konversi suhu:", temperatureInFahrenheit);


// arrow function
const convertCelciusToFahrenheitUsingArrow = (temperature) => {
    const result = (9 / 5) * temperature + 32;
    return result;
}
temperatureInFahrenheit = convertCelciusToFahrenheitUsingArrow(90);
console.log("Hasil konversi suhu menggunakan arrow function:", temperatureInFahrenheit);

// arow function simple version
const convertCelciusToFahrenheitInConciseSyntax = (temperature) => ( 9 / 5) * temperature + 32;

temperatureInFahrenheit = convertCelciusToFahrenheitInConciseSyntax(90);
console.log("Hasil konversi suhu menggunakan arrow function dengan sintaksis ringkas:", temperatureInFahrenheit);