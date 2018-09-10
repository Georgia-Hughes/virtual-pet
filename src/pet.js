function Unicorn(name, age) {
 this.name = name;
 this.age = 0;
 this.hunger = 0;
 this.fitness = 10;

 Unicorn.prototype.growUp = function() {
  this.age += 1;
  this.hunger += 5;
  this.fitness -= 3;
 };

 Unicorn.prototype.feed = function() {
  this.hunger += 5;
 }

 Unicorn.prototype.walk = function() {
  if ((this.fitness + 4 ) <= 10){
   this.fitness += 4;
  } else {
   this.fitness = 10;
  }
 }

 const pet = {
  name: 'Jerry'
 };

}

module.exports = Unicorn;