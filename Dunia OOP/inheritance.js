// inheritance adalah pewarisan properti dan method dari class induk ke class anak
// class anak dapat mewarisi properti dan method dari class induk

// contoh inheritance
// ini adakah superclass atau parent class SmarthPhones
class SmarthPhones{
    constructor(color, brand, model){
        this.color = color;
        this.brand = brand;
        this.model = model;
    }

    // function untuk charging
    charging(){
        console.log(`Charging ${this.model}`);
    }
}

// ini adalah subclass atau child class Android dan Ios
// Android dan Ios mewarisi properti dan method dari SmarthPhones
class Android extends SmarthPhones{
    splitScreen(){
        console.log('Android have a feature split screen');
    }
}

class Ios extends SmarthPhones{
    airDrop(){
        console.log('Ios have a feature AirDrop');
    }
}

// membuat object dari kedua subclass
const androidPhone = new Android('Black', 'Samsung', 'Galaxy S21');
const iosPhone = new Ios('White', 'Apple', 'iPhone 13');

androidPhone.charging(); // Charging Galaxy S21
androidPhone.splitScreen(); // Android have a feature split screen

iosPhone.charging(); // Charging iPhone 13
iosPhone.airDrop(); // Ios have a feature AirDrop

