// cara lain membuat object dan class adalah menggunakan ES6
// class adalah template untuk membuat object

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    eat() {
        console.log(`${this.name} is eating`);
    }
}

// membuat object dari class
const person1 = new Person("John", 30);
const person2 = new Person("Jane", 25);

console.log(person1.name); // John
console.log(person2.name); // Jane

person1.eat(); // John is eating
person2.eat(); // Jane is eating