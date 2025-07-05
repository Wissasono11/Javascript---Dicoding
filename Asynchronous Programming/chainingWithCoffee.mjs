import { makeCoffee, sendCoffee } from "./serviceCoffeeWithChaining.js";

const coffeeOrder = "Kopi Espresso";

console.log(`Order received: ${coffeeOrder}`);

makeCoffee(coffeeOrder)
  .then(
    (value) => {
      return sendCoffee(value);
    },
    (error) => {
      console.error(error.message);
      throw error;
    }
  )

  .then(
    (value) => {
      console.log(`Pramusaji memberikan ${value} pesanan kopi Anda.`);
      console.log(`Saya mendapatkan ${value} dan menghabiskannya`);
    })
  
    .catch((error) => {
      console.error(error.message);
      throw error;
    });
