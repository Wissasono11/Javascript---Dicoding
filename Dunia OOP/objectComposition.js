// object composition adalah konsep dimana kita menggabungkan beberapa class menjadi satu class baru
// dengan cara menggabungkan property dan method dari class yang ada

class Character{
    constructor(name, health, position){
        this.name = name;
        this.health = health;
        this.position = position; 
    }

    canMove(){
        console.log(`${this.name} can move to ${this.position}`);
    }
}

// contoh penerapan object composition
function canAttack(character){
    return {
        attack: () => {
            console.log(`${character.name} attacks with a weapon!`);
        }
    };
}

function canDefend(character){
    return {
        defend: () => {
            console.log(`${character.name} defends with a shield!`);
        }
    };
}

function canCastSpell(character){
    return {
        canCastSpell: () => {
            console.log(`${character.name} casts a spell!`);
        }
    }
}

function createMonster(name){
    const character = new Character(name, 100, 0);
    return Object.assign(character, canAttack(character));
}

function createGuardian(name){
    const character = new Character(name, 100, 0);
    return Object.assign(character, canDefend(character));
}

function createWarrior(name){
    const character = new Character(name, 100, 0);
    return Object.assign(character, canAttack(character), canDefend(character));
}

// memanggil instance dari masing-masing class character
const monster = createMonster("Monster");
monster.canMove(); // Monster can move to 0
monster.attack(); // Monster attacks with a weapon!

const guardian = createGuardian("Guardian");
guardian.canMove(); // Guardian can move to 0
guardian.defend(); // Guardian defends with a shield!

const warrior = createWarrior("Warrior");
warrior.canMove(); // Warrior can move to 0
warrior.attack(); // Warrior attacks with a weapon!
warrior.defend(); // Warrior defends with a shield!