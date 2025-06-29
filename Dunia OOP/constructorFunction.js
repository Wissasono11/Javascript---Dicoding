// contoh penggunaan constructor function dalam JavaScript
// karena JavaScript bukan berbasis class, sehingga kita menggunakan
// bahasa berbasis prototype  
function Person(name, age){
    this.name = name;
    this.age = age;

}

// prototype adalah turunan dari object (pewarisann sifat dan method antar object)
Person.prototype.eat = function(){
    console.log(`${this.name} is eating`);
}

// cara membuat object dari constructor function
const person1 = new Person("John", 30);
const person2 = new Person("Jane", 25);

console.log(person1.name); // John
console.log(person2.name); // 25

person1.eat(); // John is eating
person2.eat(); // Jane is eating