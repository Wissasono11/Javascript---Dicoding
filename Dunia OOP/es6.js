// cara lain membuat object dan class adalah menggunakan ES6
// class adalah template untuk membuat object

class Person {
    // ini adalah method constructor
    constructor(name, age) {
        // ini adalah property dari class Person
        this.name = name;
        this.age = age;
    }
    
    // ini adalah method eat
    eat() {
        console.log(`${this.name} is eating`);
    }
}

// membuat object dari class
const person1 = new Person("John", 30);
const person2 = new Person("Jane", 25);

// ini cara mengakses property dan method dari object
console.log(person1.name); // John
console.log(person2.name); // Jane

// ini cara mengakses property dan method dari object
person1.eat(); // John is eating
person2.eat(); // Jane is eating