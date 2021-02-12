// Assignment: Super Ninja

// example output
//      const superSensei = new Sensei("Master Splinter");
//      superSensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
//      superSensei.showStats();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"


class Ninja {
    constructor(name, health, strength = 3, speed = 3) {
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }
    sayName() {
        console.log(this.name);
        return this;
    }
    showStats() {
        console.log(`Strength: ${this.strength}, Speed: ${this.speed}, Health: ${this.health}`)
        return this;
    }
    drinkSake() {
        this.health += 10;
        return this;
    }
}


class Sensei extends Ninja{
    constructor(name, health, strength, speed, wisdom = 10){
        super(name,health=210,strength=10,speed=10);
        this.wisdom = wisdom;
    }
    speakWisdom(){
        console.log("What one programmer can do in one month, two programmers can do in two months.");
        return this;
    }
    drinkSake(){
        Ninja.drinkSake();
        return this;
    }
}

const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.showStats();