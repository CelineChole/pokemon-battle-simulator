class Pokemon {
    constructor(name, health, type, attacks) {
        this.name = name;
        this.health = health;
        this.type = type;
        this.attacks = attacks;
    }
}

class Attack {
    constructor(name, power, type) {
        this.name = name;
        this.power = power;
        this.type = type;
    }
}

// class Play() {
//     constructor() {
//     }
//     pokemonTurn() {

//     }
//     winner() {

//     }
// }

console.log(new Pokemon('Pikachu', 40, 'Electric', new Attack('Catastropika', 'Foudre', 20)))
console.log(new Pokemon('Bulbasaur', 35, 'Grass', new Attack('Griffe', 10)))
console.log(new Pokemon('Charmander', 60, 'Fire', new Attack('Griffe', 25)))

module.exports = { Pokemon, Attack }

