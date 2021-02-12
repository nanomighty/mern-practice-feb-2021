// Assignment: Ninja 

// Example Outputs:
// const ninja1 = new Ninja("Hyabusa");
// ninja1.sayName();
// ninja1.showStats();

class Ninja {
    constructor(name){
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    }
    sayName(){
        console.log(this.name);
    }
    showStats(){
        console.log(this.name,this.strength,this.speed,this.health)
    }
    drinkSake(){
        this.health += 10;
    }
}