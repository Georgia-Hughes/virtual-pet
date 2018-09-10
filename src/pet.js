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
 const pet = {
  name: 'Jerry'
 };

}

module.exports = Unicorn;