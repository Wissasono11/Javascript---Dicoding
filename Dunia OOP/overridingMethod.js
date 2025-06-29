// overriding method adalah proses dimana kita mengubah implementasi dari method yang sudah ada di SuperClass 
class SmartPhones{
    constructor(color, brand, model){
        this.color = color;
        this.brand = brand; 
        this.model = model;
    }

    charging(){
        console.log(`Charging ${this.model}`);
    }
}

class Android extends SmartPhones{
    constructor(color, brand, model, device){
        super(color, brand, model); // memanggil constructor dari SuperClass
        this.device = device;
    }

    // contoh overriding method
    // bedannya dengan overriding constructor adalah tidak wajib untuk menuliskan super()
    // karena method ini sudah ada di SuperClass

    // charging(){
    //     console.log(`Charging ${this.model} with Fast Charging`);
    // }

    // atau juga bisa seperti i ni 
    charging(){
        super.charging(); // memanggil method dari SuperClass
        console.log(`Charging ${this.model} with Fast Charging`);
    }
    splitScreen(){
        console.log(`Splitting screen on ${this.model}`);
    }
}

// memanggil instance dari class Android
const myAndro = new Android("Black", "Samsung", "Galaxy S21", "Android 11");

myAndro.charging(); // akan memanggil method charging dari class Android

// output: