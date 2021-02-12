// Assignment: Ninja 

// Example Outputs:
// const ninja1 = new Ninja("Hyabusa");
// ninja1.sayName();
// ninja1.showStats();

class Ninja {
    constructor(name, health, strength=3,speed=3){
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }
    sayName(){
        console.log(this.name);
        return this;
    }
    showStats(){
        console.log("Strength: " + this.strength,"Speed: " + this.speed, "Health: " + this.health);
        return this;
    }
    drinkSake(){
        this.health += 10;
        return this;
    }
}

const nancy = new Ninja ("Nancy");
nancy.showStats();