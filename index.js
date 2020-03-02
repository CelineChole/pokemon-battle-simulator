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

class Battle {
    constructor(pokemon1, pokemon2, player1, player2) {
        this.pokemon1 = pokemon1;
        this.pokemon2 = pokemon2;
        this.player1 = player1;
        this.player2 = player2;
    }
    attack(player, pokemon) {
        
    }
    gameState() {
        
    }
    
}

class Player {
    constructor(name, pokemon) {
        this.name = name;
        this.pokemon = pokemon;
    }
    getAction(name, attackName = "") {
        if (name === 'skip') {
            
        } else if (name === 'defend') {

        } else {

        }

    }
}

new Pokemon('Pikachu', 40, 'Electric', new Attack('Catastropika', 'Foudre', 20))
new Pokemon('Bulbasaur', 35, 'Grass', new Attack('Griffe', 10))
new Pokemon('Charmander', 60, 'Fire', new Attack('Griffe', 25))
console.log(new Player("Celine", "Charmander"))

module.exports = { Pokemon, Attack }

