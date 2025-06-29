// polymorphism adalah konsep dimana suatu entitas menjadi SuperClass 
// untuk mewariskan property dan method ke SubClass

class Smartphone {
    constructor(color, brand, model){
        this.color = color;
        this.brnad = brand;
        this.model = model;
    }

    charging(){
        console.log(`Charging ${this.model}`);
    }
}

class Android extends Smartphone {
    // overiding constructor 
    // adalah proses dimana kita mengubah implementasi dari method yang sudah ada di SuperClass
    constructor(color, brand, model, device){
        super(color, brand, model); // wajib memanggil constructor dari SuperClass
        this.device = device;
    }

    splitScreen(){
        console.log(`Splitting screen on ${this.model}`);
    }
}

// memanggil instance dari class Android
const myAndro = new Android("Black", "Samsung", "Galaxy S21", "Android 11");