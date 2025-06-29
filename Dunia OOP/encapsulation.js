// encapsulation adalah proses untuk menyembunyikan data dan hanya memberikan akses melalui method tertentu
// dalam encapsulation, kita dapat mengatur untuk menetapkan data yang sudah ditetapkan dengan getter dan setter 
// agar tidak dapat dirubah secara langsung dari luar class

// getter adalah method get untuk mendapatkan nilai dari property
// setter adalah method set untuk menetapkan nilai dari property

// contoh penerapan encapsulation
class CoffeeMachine{
    #temperature = 90; // # adalah private property, hanya bisa diakses dari dalam class

    constructor(waterAmount, coffeeAmount){
        this.waterAmount = waterAmount; 
        this.coffeeAmount = coffeeAmount;
        this.#temperature = this.#defaultTemperature();
    }
    
    set temperature(temperature){
        console.log("You're not allowed to change the temperature.");
    }

    get temperature(){
        return this.#temperature;
    }

    // private method
    #defaultTemperature(){
        return 90; // default temperature
    }

}