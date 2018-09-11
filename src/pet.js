function Unicorn(name, age) {
 this.name = name;
 this.age = 0;
 this.hunger = 0;
 this.fitness = 10;

 Unicorn.prototype.growUp = function() {
  this.age += 1;
  this.hunger += 3;
  this.fitness -= 3;
 };

 const MINIMUM_HUNGER = 0;

 Unicorn.prototype.feed = function() {
  if ((this.hunger - 3) >= MINIMUM_HUNGER){
   this.hunger -= 3;
  } else {
   this.hunger = MINIMUM_HUNGER;
  }
 }

 const MAXIMUM_FITNESS = 10;

 Unicorn.prototype.walk = function() {
  if ((this.fitness + 4 ) <= MAXIMUM_FITNESS){
   this.fitness += 4;
  } else {
   this.fitness = MAXIMUM_FITNESS;
  }
 }




 const pet = {
  name: 'Jerry'
 };

}

module.exports = Unicorn;