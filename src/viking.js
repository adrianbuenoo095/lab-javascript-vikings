// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }

    attack() {
        return this.strength
    }

    receiveDamage(damage) {
        this.health -= damage;
    }
}
// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
    }

    receiveDamage(damage) {
        super.receiveDamage(damage)
        return this.health > 0 ? `${this.name} has received ${damage} points of damage` :
            `${this.name} has died in act of combat`
    }

    battleCry() {
        return "Odin Owns You All!";
    }
}

// Saxon
class Saxon extends Soldier {
    receiveDamage(damage) {
        super.receiveDamage(damage)
        return this.health > 0 ? `A Saxon has received ${damage} points of damage` :
            `A Saxon has died in combat`
    }
}

// War
class War {
    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }

    addViking(viking) {
        this.vikingArmy.push(viking);
    }

    addSaxon(saxon) {
        this.saxonArmy.push(saxon);
    }

    vikingAttack() {
        let randomSaxonNumber = Math.floor(Math.random() * this.saxonArmy.length);
        let randomSaxon = this.saxonArmy[randomSaxonNumber];
        let randomVikingNumber = Math.floor(Math.random() * this.vikingArmy.length);
        let randomViking = this.vikingArmy[randomVikingNumber];
        let damageResult = randomSaxon.receiveDamage(randomViking.strength);

        if (randomSaxon.health <= 0) {
            this.saxonArmy.splice(randomSaxonNumber, 1)
        }

        return damageResult;
    }

    saxonAttack() {
        let randomSaxonNumber = Math.floor(Math.random() * this.saxonArmy.length);
        let randomSaxon = this.saxonArmy[randomSaxonNumber];
        let randomVikingNumber = Math.floor(Math.random() * this.vikingArmy.length);
        let randomViking = this.vikingArmy[randomVikingNumber];
        let damageResult = randomViking.receiveDamage(randomSaxon.strength);

        if (randomViking.health <= 0) {
            this.vikingArmy.splice(randomVikingNumber, 1)
        }

        return damageResult;
    }

    showStatus() {
        return this.saxonArmy.length === 0 ? "Vikings have won the war of the century!" :
            this.vikingArmy.length === 0 ? "Saxons have fought for their lives and survived another day..." :
                "Vikings and Saxons are still in the thick of battle."
    }
}

